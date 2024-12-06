import { webhooks } from "../../support/PageObjects/Webhooks"

describe("webhooks test", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
        webhooks.visit();
    })

    it("delete webhook", () => {
     
        webhooks.threeDots();
        webhooks.delete();
        webhooks.confirmDelete();
    })
})