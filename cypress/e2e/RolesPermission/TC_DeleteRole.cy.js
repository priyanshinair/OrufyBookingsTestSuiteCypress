import { roles } from "../../support/PageObjects/Roles";

describe("roles test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
        roles.visit();
    })

    it('delete role', () => {
        
        roles.threeDots();
        roles.delete();
        roles.confirmDelete();
    })
})