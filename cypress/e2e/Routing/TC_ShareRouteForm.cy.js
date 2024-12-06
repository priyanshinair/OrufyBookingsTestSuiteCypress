import { RoutingModule } from "../../support/PageObjects/Routing";

describe("routing test", () => {

    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.login();
        RoutingModule.visit();
    })

    it('share route form ', () => {
        
        RoutingModule.share();
        RoutingModule.copyLink();
        
        // Get the link from the modal and store it
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[1]/div/button') // Replace with the input or element that displays the link
    .invoke('val') // Use 'invoke' to get the value if it's an input, or 'text' if it's plain text
    .then((link) => {
      // Log the copied link for debugging
      cy.log(`Copied Link: ${link}`);

      // Visit the copied link
      cy.visit(link);

      // Validate the page opened correctly
      cy.url().should('eq', link); // Ensure the URL matches
    });
    })
    
})