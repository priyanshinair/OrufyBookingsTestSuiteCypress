import { members } from "../../support/PageObjects/Members";

describe("Members Test Cases", () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        cy.viewport(1920,1080);
        cy.wait(3000)
        members.visit();
        members.invite();
    })

    //TEST CASES


    //TC_01 Verify if able to invite a member by filling required details
    it.skip("TC_01 Verify if able to invite a member by filling required details", () => {

        
        members.setEmail("priyanshi+9@orufy.com");
        members.role();
        cy.get('body').type('{enter}');
        members.save();
    })


    //TC_02 Verify if able to invite a member with 'user' role
    it.skip("TC_02 Verify if able to invite a member with 'user' role", () => {
        
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
    it.skip('TC_03 Verify if able to invite a member with assigning a holiday category', () => {
        
        members.setEmail("priyans+2@orufy.cm");
        members.role();
        cy.get('body').type('{enter}');
        members.holiday();
        cy.get('body').type('{enter}');
        members.save();
    })



    //TC_04 Verify if able to invite a member without filling required details
    it.skip("TC_04 Verify if able to invite a member without filling required details", () => {
        
        members.save();
        members.errorField()
    })




    //TC_05 Verify if able to invite the existing member again
    it.skip('TC_05 Verify if able to invite the existing member again', () => {
        members.setEmail('priyanshi@orufy.com');
        members.role();
        cy.get('body').type('{enter}');
        members.save();
        members.existingUser();
    })



    //TC_06 Verify if able to resend invite again before 5 minutes
    it('TC_06 Verify if able to resend invite again before 5 minutes', () => {
        
    })
    
})