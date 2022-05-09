import LoginPage from "../../../support/page-objects/tenant/LoginPage"

describe("Test user Story 2", () => {
    it("should show the username and password fields in the login page", () => {
        // As a non-logged in user
        // When I visit <tenant>/spa/settings
        // Added the tenantSite in the cypress.env.json file. This would make sure that any changes to the tenant site url is reflected in all of the tests for the tenant site
        // I could have added the /spa/settings or /auth/login to the env.json file but decided not to for readability purposes. 
        // This might present a problem later on if changes are made to the url. For the purposes of this qa tech test. i'll leave it as is.
        cy.visit(Cypress.env("tenantSite") + "/spa/settings" )

        // Then I should see the login page <tenant>/auth/login
        cy.url().should("contain", Cypress.env("tenantSite") + "/auth/login")

        // Verify username and password fields are visible
        LoginPage.getUsernameField.should("be.visible")
        LoginPage.getPasswordField.should("be.visible")
    })

})