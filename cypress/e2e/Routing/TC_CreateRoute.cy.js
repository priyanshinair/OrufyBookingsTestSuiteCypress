import { RoutingModule } from "../../support/PageObjects/Routing";
import { loginPage } from "../../support/PageObjects/LoginPage";
/// <reference types = "Cypress" />

describe('routing test', () => {

    const viewports = [
        { device: 'Desktop', width: 1280, height: 720 },
        { device: 'Tablet', width: 768, height: 1024 },
        { device: 'Mobile', width: 375, height: 667 },
      ];

    
    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        cy.viewport(1920,1080); //desktop view
        RoutingModule.visit();
    })
 
    /*
    viewports.forEach((viewport) => {
    it('create route form (positive case)', () => {

        cy.viewport(viewport.width, viewport.height);
        cy.wait(5000)
        RoutingModule.visit();
        RoutingModule.create();
        RoutingModule.setName("cypress test");
        RoutingModule.save();
    });
    
    })
*/
    //verify if showing error if saving without filling name
    it('if showing error if saving without filling name', () => {

        RoutingModule.visit();
        
        RoutingModule.create();
        RoutingModule.save();
        RoutingModule.errorField();
    })
})