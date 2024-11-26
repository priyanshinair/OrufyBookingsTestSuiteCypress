import { contacts } from "../../support/PageObjects/Contacts"
import { loginPage } from "../../support/PageObjects/LoginPage"


describe("contacts tests", () => {

    beforeEach(() =>{
        cy.login();
    })

    it('delete contact', () => {

        cy.wait(5000);

        contacts.visit();
        contacts.threeDots();
        contacts.delete();
        contacts.confirmDelete();
    })
})