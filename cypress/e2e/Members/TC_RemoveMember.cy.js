import { members } from "../../support/PageObjects/Members"

describe("members test", () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    
        cy.viewport(1920, 1020);
        members.visit();
    })

    it("remove members", () => {
       
        members.threeDots();
        cy.wait(2000);
        members.remove();
    })
})