import { RoutingModule } from "../../support/PageObjects/Routing";

/// <reference types = "Cypress"/>

describe("routing tests", () => {

    beforeEach(()=>{
        cy.login();
    })

    it('delete route', () =>{

        cy.wait(5000);

        RoutingModule.visit();
        RoutingModule.threeDotBtn();
        RoutingModule.delete();
        RoutingModule.confirmDelete();
    })
})