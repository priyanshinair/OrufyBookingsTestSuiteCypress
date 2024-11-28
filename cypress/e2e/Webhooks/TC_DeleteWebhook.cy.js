import { webhooks } from "../../support/PageObjects/Webhooks"

describe("webhooks test", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
    })

    it("delete webhook", () => {
        cy.wait(3000);
        webhooks.visit();
        webhooks.threeDots();
        webhooks.delete();
        webhooks.confirmDelete();
    })
})