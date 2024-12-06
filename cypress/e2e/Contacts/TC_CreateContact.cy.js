import { contacts } from "../../support/PageObjects/Contacts";
import { generateRandomEmail, generateRandomString, number } from "../../support/Utilities/Utils";
/// <reference types = "Cypress"/>

  
describe("Contacts Test Cases", () => {

    beforeEach(() => {
        cy.login(); // Use the global login command
        cy.wait(5000);
        contacts.visit();
      });
    

    //TC_01 Verify creating contact with name and email
    it('create contact with name and email only', () => {

      const randomName = generateRandomString(10);
      const randomEmail = generateRandomEmail();
      contacts.setName(randomName);
      contacts.setEmail(randomEmail);
      contacts.save();
      
  })



    //TC_02 Verify creating multiple contacts for pagination purpose
    it('creating multiple contacts for pagination', () => {

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
      
    })


    //TC_04 Verify if able to create contact without filling any details
})