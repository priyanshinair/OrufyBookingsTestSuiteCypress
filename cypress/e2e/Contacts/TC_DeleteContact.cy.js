import { contacts } from "../../support/PageObjects/Contacts"
import { loginPage } from "../../support/PageObjects/LoginPage"


describe("contacts tests", () => {

    before(() =>{
        cy.session('loginSession', () => {
            cy.login();
        })
    })
    beforeEach(() =>{
        cy.session('loginSession', () =>{
            cy.login();
        })
        contacts.visit();
    })


    //TEST CASES 
    
    it('delete contact', () => {

        cy.wait(5000);

        contacts.visit();
        contacts.threeDots();
        contacts.delete();
        contacts.confirmDelete();
    })
})