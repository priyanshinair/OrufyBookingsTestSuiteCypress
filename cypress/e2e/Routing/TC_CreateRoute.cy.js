import { RoutingModule } from "../../support/PageObjects/Routing";
import { loginPage } from "../../support/PageObjects/LoginPage";
/// <reference types = "Cypress" />

describe('routing test', () => {

    it('create route form', () => {

        loginPage.visit();
        
        
        loginPage.enterEmail("priyanshi+ww@orufy.com");
        loginPage.enterPassword("Orufy@123");
        loginPage.loginBtn();

        
        RoutingModule.visit();
        RoutingModule.create();
        RoutingModule.setName("cypress test");
        RoutingModule.save();
    })
})