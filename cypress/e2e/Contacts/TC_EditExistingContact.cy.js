import { loginPage } from "../../support/PageObjects/LoginPage";
import { contacts } from "../../support/PageObjects/Contacts";

describe("contacts test ", () => {

    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        contacts.visit();
    })

    //TEST CASES

    it('edit a contact', () => {

        contacts.threeDots();
        contacts.edit();

        cy.xpath("/html/body/div[2]/div/div[2]/form/div/div[1]/input").clear();

        contacts.setName("edited name");
        contacts.save();
    })
})