import { contacts } from "../../support/PageObjects/Contacts"
import { loginPage } from "../../support/PageObjects/LoginPage"


describe("contacts tests", () => {

    it('delete contact', () => {

        loginPage.visit();
        loginPage.enterEmail("priyanshi+ww@orufy.com");
        loginPage.enterPassword("Orufy@123");
        loginPage.loginBtn();

        cy.wait(5000);

        contacts.visit();
        contacts.threeDots();
        contacts.delete();
        contacts.confirmDelete();
    })
})