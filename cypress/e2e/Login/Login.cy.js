import { loginPage } from "../../support/PageObjects/LoginPage";

/// <reference types = "Cypress" />

describe("Login Test", () => {

    it('test if login was successfull', () => {

        loginPage.visit();
        loginPage.enterEmail("priyanshi+ww@orufy.com");
        loginPage.enterPassword("Orufy@123");
        loginPage.loginBtn();
    })
})