import { webhooks } from "../../support/PageObjects/Webhooks";

describe("webhooks tests", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
    })

    it("create webhook with all the fields correctly filled", () => {
        cy.wait(3000);
        webhooks.visit();
        webhooks.create();
        
        webhooks.seturl("https://orufy.com");
        webhooks.trigger();
        cy.get('body').type('{enter}');
        webhooks.event();
        cy.get('body').type('{enter}');
        webhooks.secret("123");
        webhooks.save();
        
    })

    it("create webhook without filling all the fields and click save", () => {
        cy.wait(3000);
        webhooks.visit();
        webhooks.create();
        webhooks.save();
        webhooks.errorUrl();
        
    })

    it("create webhook with selecting 3rd option from both the dropdowns", () => {
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
                cy.wrap($element).type('{downarrow}')
            }
        })
        .type('{enter}');


        //fill secret and save
        webhooks.secret('123')
        webhooks.save();
    })
    
})