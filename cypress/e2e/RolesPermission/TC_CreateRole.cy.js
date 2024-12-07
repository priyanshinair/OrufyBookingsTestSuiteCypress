import { PageLinks } from "../../Configurations/PageLinks";
import { roles } from "../../support/PageObjects/Roles";

describe("roles tests", () => {
    
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

    it('create role', () => {
        
        roles.create();
        roles.setName("cypress role");
        roles.save();
    })
})