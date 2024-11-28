import { members } from "../../support/PageObjects/Members"

describe("members test", () => {

    beforeEach( () => {
        cy.viewport(1920, 1020);
        cy.login();
    })

    it("remove members", () => {
        cy.wait(2000);
        members.visit();

        members.threeDots();
        cy.wait(2000);
        members.remove();
    })
})