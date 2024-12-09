
import { eventTypes } from "../../support/PageObjects/EventTypes";
import { members } from "../../support/PageObjects/Members";


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
        members.visit();
        cy.wait(5000)
        eventTypes.goToLeftSidebar()
        cy.wait(5000)
    })


    //TEST CASES
    //TC_01 Verify if able tp create a global one-on-one event with all the required fields
    it.skip('TC_01 Verify if able tp create a global event with all the required fields', () => {
        
        eventTypes.create();
        eventTypes.selctGlobal();
        eventTypes.eventName('cypress test event');
        eventTypes.duration(45);
        cy.get('body').type('{enter}')
        eventTypes.mode();
        cy.get('body').type('{enter}');
        eventTypes.save();
        
    })


    //TC_02 Verify if able to create a global event type without filling required details
    it('TC_02 Verify if able to create a global event type without filling required details',() => {
        eventTypes.create();
        eventTypes.selctGlobal()
        eventTypes.save();
    })



    //TC_03 Verify if able to create collective/round-robin event type
    //Pre-requisite : must have atleaset 2 members in the company
    it('TC_03 Verify if able to create collective/round-robin event type', () => {

    })


    //TC_04 Verify if able to create event type if respective calendar related to mode is not connected
    it('TC_04 Verify if able to create event type if respective calendar related to mode is not connected', () => {
        
    })



    //TC_05 Verify if invite dialog appears on creating multi host event types if only one member
    it('TC_05 Verify if invite dialog appears on creating multi host event types if only one member',() => {

    })
})