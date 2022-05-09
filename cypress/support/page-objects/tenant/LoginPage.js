class LoginPage {

    visit() {
        cy.visit(Cypress.env("tenantSite") + "/auth/login")
    }

    get getUsernameField() {
        return cy.get("input#username")
    }

    get getPasswordField() {
        return cy.get("input#password")
    }

    get getSignInButton() {
        return cy.contains("button", "Sign In")
    }

    // To do: Convert this into a cy.request() login to make it faster
    login(accessLevel) {
        this.visit()

        cy.url().should("contain", "/auth/login")

        this.getUsernameField.type(Cypress.env(accessLevel).username)
        this.getPasswordField.type(Cypress.env(accessLevel).password)
        this.getSignInButton.click()
    }

}

export default new LoginPage()