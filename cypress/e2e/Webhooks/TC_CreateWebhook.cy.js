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

    it("create webhook with leaving some fields blank", () =>{
        cy.wait(2000);
        webhooks.visit();
        webhooks.create();
        
        webhooks.save();
        webhooks.errorUrl();
        
    })
})