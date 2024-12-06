import { webhooks } from "../../support/PageObjects/Webhooks";

describe("Webhooks Test Cases", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
        webhooks.visit();
    })


    //TC_01 Verify if able to create a webhook by filling required fields 
    it("create webhook with all the fields correctly filled", () => {
        
        webhooks.create();
        
        webhooks.seturl("https://orufy.com");
        webhooks.trigger();
        cy.get('body').type('{enter}');
        webhooks.event();
        cy.get('body').type('{enter}');
        webhooks.secret("123");
        webhooks.save();
        
    })


    //TC+02 Verify if able to create webhook without filling required fields
    it("create webhook without filling required fields", () => {
        cy.wait(3000);
        webhooks.visit();
        webhooks.create();
        webhooks.save();
        webhooks.errorUrl();
        
    })

    
//TC_03 Verify if able to create webhook by selecting certain options from triggeres and events dropdown
    it("create webhook by selecting 3rd option from both the dropdowns", () => {
        cy.wait(3000);
        webhooks.visit();
        webhooks.create();
        webhooks.seturl("https://orufy.com");
        
        //select 3rd option from trigger dropdown
        webhooks.triggerWithArrowKeys()
        .then(($element) => {
            for(let i =0;i<3;i++){
                cy.wrap($element).type('{downarrow}')
            }
        })
        .type('{enter}');


        //select 3rd option from event type dropdown
        webhooks.eventWithWithArrowKeys()
        .then(($element) => {
            for(let i=0;i<3;i++){
                cy.wrap($element).type('{downarrow}')   //cy.wrap() in Cypress is used to wrap a non-Cypress object (like a DOM element, JavaScript object, or variable) into a Cypress chainable object, enabling you to use Cypress commands on it. 
            }
        })
        .type('{enter}');


        //fill secret and save
        webhooks.secret('123')
        webhooks.save();
    })
    
})