///<reference types = "Cypress"/>
import { eventTypes } from "../../support/PageObjects/EventTypes";

describe('Create Event Types Test Cases', () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        cy.viewport(1920, 1024);
        //eventTypes.visit()
    })


    //TEST CASES
    //TC_01 Verify if able tp create a global one-on-one event with all the required fields
    it('TC_01 Verify if able tp create a global event with all the required fields', () => {
        eventTypes.create();
        eventTypes.selctGlobal();
        eventTypes.eventName('cypress test event');
        eventTypes.duration(45);
        eventTypes.mode();
        cy.get('body').type('{enter}');
        eventTypes.save();
    })
})