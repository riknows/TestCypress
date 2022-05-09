import DashboardPage from "../../../support/page-objects/tenant/DashboardPage"
import LoginPage from "../../../support/page-objects/tenant/LoginPage"
import {getTimeOfDay} from "../../../support/functions"

describe("Test user Story 3", () => {
    it("should login to the tenant site and show the heading greeting", () => {
        // As an authenticated user <normal user>
        // When I visit <tenant>/auth/login
        LoginPage.visit()

        // Then I should see the login page
        cy.url().should("contain", "/auth/login")

        // When I login with the correct credentials
        LoginPage.getUsernameField.type(Cypress.env("normal").username)
        LoginPage.getPasswordField.type(Cypress.env("normal").password)
        LoginPage.getSignInButton.click()

        // Then I should see the dashboard
        cy.url().should("contain", "spa/dashboard")

        // Verify the greeting is visible (eg. Good Morning, <name>)
        // This part was failing intermittently, i had 3 options to resolve this, 1. was to create a retry function to wait for the text to show
        // 2. was to increase the retries 3. was to increase the timeout for the specific element 
        // implemented both option (retries updated to 2) and option 3
        DashboardPage.getHeader.should("have.text", "Good " + getTimeOfDay() + ", " + Cypress.env("normal").name)
    })

})