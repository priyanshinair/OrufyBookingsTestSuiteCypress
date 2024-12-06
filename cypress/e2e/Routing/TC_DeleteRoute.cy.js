import { RoutingModule } from "../../support/PageObjects/Routing";

/// <reference types = "Cypress"/>

describe("routing tests", () => {

    beforeEach(()=>{
        cy.login();
        RoutingModule.visit();
    })

    it('delete route', () =>{

        RoutingModule.threeDotBtn();
        RoutingModule.delete();
        RoutingModule.confirmDelete();
    })
})