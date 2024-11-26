import { RoutingModule } from "../../support/PageObjects/Routing";

describe("routing test", () => {

    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.login();
    })

    it('share route form ', () => {
        cy.wait(4000);

        RoutingModule.visit();
        
        RoutingModule.share();
        RoutingModule.copyLink();
        
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((copiedLink) => {
              cy.visit(copiedLink); // Use the copied link to open the page
            });
          });
    })
    
})