import { loginPage } from "../../support/PageObjects/LoginPage";
import { contacts } from "../../support/PageObjects/Contacts";

describe("contacts test ", () => {

    beforeEach(() => {
        cy.login();
    })

    it('edit a contact', () => {

    
        cy.wait(5000);

        contacts.visit();
        contacts.threeDots();
        contacts.edit();

        cy.xpath("/html/body/div[2]/div/div[2]/form/div/div[1]/input").clear();

        contacts.setName("edited name");
        contacts.save();
    })
})