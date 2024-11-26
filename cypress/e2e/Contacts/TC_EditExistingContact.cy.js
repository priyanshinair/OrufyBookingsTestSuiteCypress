import { loginPage } from "../../support/PageObjects/LoginPage";
import { contacts } from "../../support/PageObjects/Contacts";

describe("contacts test ", () => {

    it('edit a contact', () => {

        loginPage.visit();
        loginPage.enterEmail("priyanshi+ww@orufy.com");
        loginPage.enterPassword("Orufy@123");
        loginPage.loginBtn();

        cy.wait(5000);

        contacts.visit();
        contacts.threeDots();
        contacts.edit();

        cy.xpath("/html/body/div[2]/div/div[2]/form/div/div[1]/input").clear();

        contacts.setName("edited name");
        contacts.save();
    })
})