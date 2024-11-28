import { members } from "../../support/PageObjects/Members";

describe("members tests", () => {

    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.login();
    })

    it("invite members", () => {

        cy.wait(2000);
        members.visit();
        
        members.invite();
        members.setEmail("priyanshi+9@orufy.com");
        members.role();
        cy.get('body').type('{enter}');
        members.holiday();
        cy.get('body').type('{enter}')
        members.save();
    })
})