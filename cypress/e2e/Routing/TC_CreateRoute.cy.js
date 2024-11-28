import { RoutingModule } from "../../support/PageObjects/Routing";
import { loginPage } from "../../support/PageObjects/LoginPage";
/// <reference types = "Cypress" />

describe('routing test', () => {

    const viewports = [
        { device: 'Desktop', width: 1280, height: 720 },
        { device: 'Tablet', width: 768, height: 1024 },
        { device: 'Mobile', width: 375, height: 667 },
      ];
    beforeEach(() => {
        //cy.viewport(1920,1080); //desktop view
        cy.login();
    })
    viewports.forEach((viewport) => {
    it('create route form', () => {

        cy.viewport(viewport.width, viewport.height);
        cy.wait(5000)
        RoutingModule.visit();
        RoutingModule.create();
        RoutingModule.setName("cypress test");
        RoutingModule.save();
    });
    })
})