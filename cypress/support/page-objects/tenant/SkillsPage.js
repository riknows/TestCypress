class SkillsPage {

    visit() {
        cy.visit(Cypress.env("tenantSite") + "/spa/settings/skills")
    }

    get getCreateSkillBtn() {
        return cy.get(".sc-ksYbfQ").contains("Create Skill")
    }

    get getSkillNameField() {
        return cy.get("#name")
    }

    get getSkillDescriptionField() {
        return cy.get("#description")
    }

    get getFilterTextField() {
        return cy.get("#filterControllerSearchInput")
    }

    get getFirstResult() {
        return cy.get(".Kgltn > .sc-cSHVUG")
    }

    get getSkillsTableRow() {
        return cy.get(".Kgltn", {timeout: 10000})
    }

    get getKebabDeleteButton() {
        return cy.get("button > .sc-dnqmqq > .sc-gZMcBi")
    }

    get getDeleteConfirmationButton() {
        return cy.get(":nth-child(2) > .sc-hmzhuo")
    }

    //Creates a skill and takes the skillName as both the Skill  Name and Description
    // To do: Look at moving this into an API call
    createSkill(strSkillName) {
        this.getCreateSkillBtn.click()
        this.getSkillNameField.type(strSkillName)
        this.selectFirstSkillDiscipline()
        this.getSkillDescriptionField.type(strSkillName)
        cy.contains("Save").click()
    }

    //Selects the first discipline in the list.
    //To do: Update/create this to select by index
    selectFirstSkillDiscipline() {
        //This was a react listbox which is trickier to automate. But this solution works
        cy.get('.Select-arrow-zone')
            .click()
            .get('.Select-menu') // find opened dropdown
            .find('.Select-option') // find all options
            .first()
            .click()
    }

}

export default new SkillsPage()