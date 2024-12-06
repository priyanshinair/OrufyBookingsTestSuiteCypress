import { RoutingModule } from "../../support/PageObjects/Routing";

describe("routing tests", () => {

    beforeEach( () => {
        cy.login();
        RoutingModule.visit();
    })

    it('rename route', () => {

        RoutingModule.threeDotBtn();
        RoutingModule.rename();
        
    })
    
})