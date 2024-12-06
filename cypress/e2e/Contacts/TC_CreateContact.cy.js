import { contacts } from "../../support/PageObjects/Contacts";
import { generateRandomEmail, generateRandomString, number } from "../../support/Utilities/Utils";
/// <reference types = "Cypress"/>

  
describe("Contacts Test Cases", () => {

    beforeEach(() => {
        cy.viewport(1920, 1024)
        cy.login(); // Use the global login command
        cy.wait(5000);
        contacts.visit();
      });
    

    //TEST CASES

    //TC_01 Verify creating contact with name and email
    it.skip('create contact with name and email only', () => {

      contacts.create();
      cy.wait(2000);
      const randomName = generateRandomString(10);
      const randomEmail = generateRandomEmail();
      contacts.setName(randomName);
      contacts.setEmail(randomEmail);
      contacts.save();
      
  })



    //TC_02 Verify creating multiple contacts for pagination purpose
    it.skip('creating multiple contacts for pagination', () => {

        //creating 10 contacts at a time. This code is written for pagination purpose
        for(let i=0;i<10;i++){
        contacts.create();
        const randomName = generateRandomString(10);
        const randomEmail = generateRandomEmail();
        contacts.setName(randomName);
        contacts.setEmail(randomEmail);
        contacts.save();
        cy.wait(2000);
        }
    })

    

    //TC_03 Verify creating contact by filling timezone and phone number also

    it("create contact with timezone and number field as well", () => {
      
      contacts.create();
      const randomName = generateRandomString(10);
      const randomEmail = generateRandomEmail();
      contacts.setName(randomName);
      contacts.setEmail(randomEmail);
      contacts.timezone();
      contacts.searchTimezone("Asia/Kolkata");
      cy.get('body').type('{enter}')
      const randomNumber = number();
      contacts.phoneNumber(randomNumber);
      contacts.save();
    })




    //TC_04 Verify if able to create contact without filling any details
    it('create contact without filling required fields', () => {
      
      contacts.create();
      contacts.save();
      contacts.errorField();
    })
})