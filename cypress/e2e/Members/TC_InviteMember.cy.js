import { members } from "../../support/PageObjects/Members";

describe("members tests", () => {

    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.login();
        members.visit();
    })

    it("invite members", () => {

        members.invite();
        members.setEmail("priyanshi+9@orufy.com");
        members.role();
        cy.get('body').type('{enter}');
        members.holiday();
        cy.get('body').type('{enter}')
        members.save();
    })
})