import { members } from "../../support/PageObjects/Members"

describe("members test", () => {

    beforeEach( () => {
        cy.viewport(1920, 1020);
        cy.login();
        members.visit();
    })

    it("remove members", () => {
       
        members.threeDots();
        cy.wait(2000);
        members.remove();
    })
})