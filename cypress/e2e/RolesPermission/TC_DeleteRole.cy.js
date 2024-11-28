import { roles } from "../../support/PageObjects/Roles";

describe("roles test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
    })

    it('delete role', () => {
        cy.wait(2000);
        roles.visit();
        roles.threeDots();
        roles.delete();
        roles.confirmDelete();
    })
})