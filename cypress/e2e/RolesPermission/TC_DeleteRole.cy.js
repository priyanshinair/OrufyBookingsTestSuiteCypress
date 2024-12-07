import { roles } from "../../support/PageObjects/Roles";

describe("roles test", () => {

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
        roles.visit();
    })

    it('delete role', () => {
        
        roles.threeDots();
        roles.delete();
        roles.confirmDelete();
    })
})