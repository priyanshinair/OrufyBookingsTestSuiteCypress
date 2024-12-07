import { webhooks } from "../../support/PageObjects/Webhooks"

describe("webhooks test", () => {

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
        webhooks.visit();
    })

    it("delete webhook", () => {
     
        webhooks.threeDots();
        webhooks.delete();
        webhooks.confirmDelete();
    })
})