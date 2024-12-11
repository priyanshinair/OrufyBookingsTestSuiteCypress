
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
        eventTypes.create();
        eventTypes.selectGlobalBtn();
    })


    //TEST CASES
    //TC_01 Verify if able tp create a global one-on-one event with all the required fields
    it.skip('TC_01 Verify if able tp create a global event with all the required fields', () => {
        
        eventTypes.eventName('cypress test event');
        eventTypes.duration(45);
        cy.get('body').type('{enter}')
        eventTypes.mode();
        cy.get('body').type('{enter}');
        eventTypes.save();
        
    })


    //TC_02 Verify if able to create a global event type without filling required details
    it.skip('TC_02 Verify if able to create a global event type without filling required details',() => {
        
        eventTypes.save();
    })



    //TC_03 Verify if able to create collective/round-robin event type
    //Pre-requisite : must have atleaset 2 members in the company
    //this test is currently not working as expected
    it.skip('TC_03 Verify if able to create collective/round-robin event type', () => {
       
        eventTypes.eventName('collective');
        cy.get('body').type('{enter}')
        eventTypes.mode();
        cy.get('body').type('{enter}');
        eventTypes.eventType();
        eventTypes.collective();
        eventTypes.save()

    })

    //TC_04 Verify if able to create event type if respective calendar related to mode is not connected
    //Pre-requisite : make sure intended calendar is not connected/selected in add bookings to
    it.skip('TC_04 Verify if able to create event type if respective calendar related to mode is not connected', () => {
        eventTypes.eventName('error')
        eventTypes.mode();
        
    })



    //TC_05 Verify if invite dialog appears on creating multi host event types if only one member
    it.skip('TC_05 Verify if invite dialog appears on creating multi host event types if only one member',() => {

    })
})