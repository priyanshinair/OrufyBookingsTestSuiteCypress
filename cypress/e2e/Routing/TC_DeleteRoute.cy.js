import { RoutingModule } from "../../support/PageObjects/Routing";

/// <reference types = "Cypress"/>

describe("routing tests", () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        RoutingModule.visit();
    })

    it('delete route', () =>{

        RoutingModule.threeDotBtn();
        RoutingModule.delete();
        RoutingModule.confirmDelete();
    })
})