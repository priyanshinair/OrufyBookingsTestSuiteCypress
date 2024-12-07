import { RoutingModule } from "../../support/PageObjects/Routing";

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

    it('rename route', () => {

        RoutingModule.threeDotBtn();
        RoutingModule.rename();
        
    })
    
})