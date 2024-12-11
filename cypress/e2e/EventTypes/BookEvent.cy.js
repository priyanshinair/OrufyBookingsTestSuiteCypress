it.skip('TC_03 Verify if able to create collective/round-robin event type', () => {
    eventTypes.create();
    eventTypes.selctGlobal();
    eventTypes.eventName('collective');
    cy.get('body').type('{enter}')
    eventTypes.mode();
    cy.get('body').type('{enter}');
    eventTypes.eventType();
    cy.contains('Collective(more than one host with attendee)').should('be.visible').click();
