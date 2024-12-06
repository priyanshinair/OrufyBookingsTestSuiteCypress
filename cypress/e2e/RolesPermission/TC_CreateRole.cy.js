import { PageLinks } from "../../Configurations/PageLinks";
import { roles } from "../../support/PageObjects/Roles";

describe("roles tests", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
        roles.visit();
    })

    it('create role', () => {
        
        roles.create();
        roles.setName("cypress role");
        roles.save();
    })
})