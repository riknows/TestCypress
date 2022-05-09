import LoginPage from "../../../support/page-objects/tenant/LoginPage"
import SkillsPage from "../../../support/page-objects/tenant/SkillsPage"
import {generateRandomString} from "../../../support/functions"

describe("Test user Story 4", () => {
    it("should create 2 skills and delete the second skill", () => {
        // Added a random generator to make sure skills are unique each run.
        let strRandomSkill = generateRandomString(6)
        let strSkill1 = strRandomSkill + "_A"
        let strSkill2 = strRandomSkill + "_B"

        // As an authenticated user <Admin>
        LoginPage.login("admin")

        // When I visit <tenant>/spa/settings/skills
        SkillsPage.visit()

        // Then I press 'Create Skill' button
        SkillsPage.createSkill(strSkill1)

        // Then I see 1 newly Skill listed
        //Ill use the filter here to avoid scrolling through all the pages since it has more than the newly created skills
        SkillsPage.getFilterTextField.clear()
        SkillsPage.getFilterTextField.type(strRandomSkill)
        SkillsPage.getSkillsTableRow.should('have.length', 1) // Checks that the newly added skill is listed

        // Then I create a new skill once again
        SkillsPage.createSkill(strSkill2)

        // Then I see 2 Skills listed
        //SkillsPage.verifySkillList(strSkill2)
        SkillsPage.getSkillsTableRow.should('have.length', 2)

        // When I select the kebab menu for the second skill
        // I needed to iterate through all of the elements and look at each text that includes my Skill2 name. This should be flexible enough to handle the other scenarios where
        // it would have more than 2 skills or if skills were not created in alphabetical order
        cy.get('.jMYLqO').each(($ele, index) => {
                if ($ele.text().includes(strSkill2)) {
                        cy.get(".sc-iQNlJl").eq(index).click() //click the index
                }
              })
        
        // Then I select 'Delete' option
        SkillsPage.getKebabDeleteButton.click()

        // Then I confirm, by selecting the 'Delete' option
        SkillsPage.getDeleteConfirmationButton.click()

        // Verify out of the 2 skills created, only the first skill is listed
        SkillsPage.getSkillsTableRow.should('have.length', 1)//Checks that I only have 1 record left in the skills i newly created
        SkillsPage.getSkillsTableRow.should("have.text", strSkill1) //Checks thats it contains my 1st skill

})
})