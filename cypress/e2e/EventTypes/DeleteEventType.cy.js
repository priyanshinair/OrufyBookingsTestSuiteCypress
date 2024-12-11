import { eventTypes } from "../../support/PageObjects/EventTypes";
import { members } from "../../support/PageObjects/Members";

describe('Delete Event Type Test Cases', () => {

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
    
    //TC_01 Delete an event type (positive scenario)
    it('TC_01 Delete an event type (positive scenario)', () => {
        eventTypes.threeDots();
        eventTypes.delete();
        eventTypes.confirmDelete();

    })
})