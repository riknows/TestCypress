describe("Test user Story 1", () => {
    it("should show that the Fujitsu General case study is shown and download button is present, ", () => {
        /* This is the first test, I didn't bother to create a page object model for this one
            since the page was only used for 1 test. This was just me exploring what cypress can/can't do and try out stuff
        */ 
        // As an anonymous User
        //When I visit https://www.intellihr.com
        cy.visit('https://www.intellihr.com')

        //Then I should see the intelliHR public homepage
        cy.url().should("eq", "https://intellihr.com/")

        //Verify intelliHR logo is visible
        cy.get('#header-logo').should("be.visible")

        //When I scroll to the bottom and select 'Case Studies'
        cy.contains("Case studies").click()
        cy.url().should("contain", "case-studies")

        //Then I should see multiple Case Studies
        // Assumption was made here that when anything greater than 1 this test would return a pass
        cy.get(".post-result-container").find("a").its('length').should('be.gte', 1)

        //When I select 'Fujitsu General'
        cy.contains("Fujitsu General").click()
        cy.url().should("contain", "case-studies/fujitsu-general")

        //Then I should see a Case Study for Fujitsu
        cy.contains("Fujitsu General").should("be.visible")

        //Verify 'Download now' button is visible
        cy.contains("Download now").should("be.visible")

    })
})