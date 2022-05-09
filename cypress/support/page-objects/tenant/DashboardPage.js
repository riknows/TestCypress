class DashboardPage {

    visit() {
        cy.visit(Cypress.env("tenantSite") + "/spa/dashboard")
    }

    get getHeader() {
        return cy.get("h1.jjLTxb", {timeout: 10000})
    }

}

export default new DashboardPage()