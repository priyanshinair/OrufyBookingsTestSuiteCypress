import { RoutingModule } from "../../support/PageObjects/Routing";

describe("routing tests", () => {

    beforeEach( () => {
        cy.login();
    })

    it('rename route', () => {

        cy.wait(2000);

        RoutingModule.visit();
        RoutingModule.threeDotBtn();
        RoutingModule.rename();
        
    })
    
})