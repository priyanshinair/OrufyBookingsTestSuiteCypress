import { loginPage } from "../../support/PageObjects/LoginPage";
import { contacts } from "../../support/PageObjects/Contacts";

/// <reference types = "Cypress"/>

//function to generate random name
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters to use
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    
    return result;
  }
  

  //function to generate random email ids
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    
    // Function to generate a random string of a given length
    function getRandomString(length) {
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    }
    
    // Generate random username (6-12 characters)
    const username = getRandomString(Math.floor(Math.random() * 7) + 6);
  
    // Select a random domain
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    // Return the random email
    return `${username}@${domain}`;
  }
  
  
  

describe("contacts tests", () => {

    beforeEach(() => {
        // Use the global login command
        cy.login();
      });
    
    it('create new contacts', () => {

        
        cy.wait(5000);
        
        contacts.visit();

        for(let i=0;i<10;i++){
        contacts.create();
        const randomName = generateRandomString(10);
        const randomEmail = generateRandomEmail();
        contacts.setName(randomName);
        contacts.setEmail(randomEmail);
        contacts.save();
        cy.wait(5000);
        }
    })
})