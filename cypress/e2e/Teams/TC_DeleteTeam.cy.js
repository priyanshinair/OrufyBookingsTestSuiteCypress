import { teams } from "../../support/PageObjects/Teams"

describe("teams test", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
        teams.visit();
    })

    it("delete teams", () => {
       
        teams.threeDots();
        teams.delete();
        teams.confirmDelete();
    })
})