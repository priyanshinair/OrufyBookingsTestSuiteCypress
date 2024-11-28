import { teams } from "../../support/PageObjects/Teams"

describe("teams test", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
    })

    it("delete teams", () => {
        cy.wait(2000);
        teams.visit();
        teams.threeDots();
        teams.delete();
        teams.confirmDelete();
    })
})