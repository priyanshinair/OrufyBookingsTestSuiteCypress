import { teams } from "../../support/PageObjects/Teams"

describe("teams test", () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    
        cy.viewport(1920, 1024);
        teams.visit();
    })

    it("delete teams", () => {
       
        teams.threeDots();
        teams.delete();
        teams.confirmDelete();
    })
})