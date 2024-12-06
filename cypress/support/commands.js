// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath')

/// <reference types = "Cypress" />



// global login operation
Cypress.Commands.add("login", () => {
    cy.visit("https://beta.orufy.in/login?redirect=BOOKINGS");
    cy.xpath("/html/body/div/div[1]/div/form/div[1]/div/input").type("priyanshi+ww@orufy.com"); // Replace with your email locator
    cy.xpath('/html/body/div/div[1]/div/form/div[2]/div/input').type("Orufy@123"); // Replace with your password locator
    cy.xpath('/html/body/div/div[1]/div/form/div[3]/button').click(); // Replace with your submit button locator
    cy.wait(3000);
  });


//global login api call
Cypress.Commands.add("loginAPI",() =>{

  cy.request({
    method :'POST', 
    url : 'https://orufy.com/api/v1/user/login',
    body: {
        
            emailId:"priyanshi+ww@orufy.com",
            password:"Orufy@123",
            productId:"BOOKINGS"
        
    }
} )
})
  