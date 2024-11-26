import { RoutingModule } from "../../support/PageObjects/Routing";
import { loginPage } from "../../support/PageObjects/LoginPage";
/// <reference types = "Cypress" />

describe('routing test', () => {

    beforeEach(() => {
        cy.viewport(1920,1080); //desktop view
        cy.login();
    })

    it('create route form', () => {

        cy.wait(5000)
        RoutingModule.visit();
        RoutingModule.create();
        RoutingModule.setName("cypress test");
        RoutingModule.save();
    })
})