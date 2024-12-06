import { members } from "../../support/PageObjects/Members";

describe("Members Test Cases", () => {

    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.login();
        members.visit();
        members.invite();
    })

    //TEST CASES


    //TC_01 Verify if able to invite a member by filling required details
    it("invite member by filling required fields", () => {

        
        members.setEmail("priyanshi+9@orufy.com");
        members.role();
        cy.get('body').type('{enter}');
        members.save();
    })


    //TC_02 Verify if able to invite a member with 'user' role
    it.skip("inviting a member with 'user' role", () => {
        
        members.setEmail("priyanshi+0@orufy.com");
        members.role();

        //selecting user role option
        members.roleWithArrowKeys()
        //giving error
        .then(($el) => {
            cy.wrap($el).type('{downarrow}');
        })
        .type('{enter}')

        
        members.save();
    })
    


    //TC_03 Verify if able to invite a member with assigning a holiday category
    it('invite a member with assigning holiday also', () => {
        
        members.setEmail("priyans+2@orufy.cm");
        members.role();
        cy.get('body').type('{enter}');
        members.holiday();
        cy.get('body').type('{enter}');
        members.save();
    })



    //TC_04 Verify if able to invite a member without filling required details
    it("invite member without filling required fields", () => {
        
        members.save();
        members.errorField()
    })
})