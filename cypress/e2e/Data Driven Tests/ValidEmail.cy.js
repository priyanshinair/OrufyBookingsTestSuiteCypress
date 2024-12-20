describe('Data Driven Testing For Email', () => {

    beforeEach(() => {
        cy.viewport(1920,1024);
        cy.visit('https://beta.orufy.in/login?redirect=BOOKINGS')
        cy.wait(5000)
    })

    it('Validate different combination of emails', () => {

        cy.fixture('emailData.json').then((emails) => {
            emails.forEach ((emailData) => {
                cy.get('input[type="email"]').clear().type(emailData.email);
                cy.get('input[type="password"]').type('Orufy@123');
                cy.get('button[type="submit"]').click();
                cy.wait(6000);

                cy.xpath("/html/body/div/div[1]/div/form/div[1]/div/div").should('be.visible').contains('Invalid email')
            })
        })
    })
})