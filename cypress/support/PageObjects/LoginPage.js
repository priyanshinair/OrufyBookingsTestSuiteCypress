import { PageLinks } from "../../Configurations/PageLinks";
class LoginPage{

    //elements
    email = "/html/body/div/div[1]/div/form/div[1]/div/input";
    password = "/html/body/div/div[1]/div/form/div[2]/div/input";
    submitBtn = "/html/body/div/div[1]/div/form/div[3]/button";


    //methods
    visit(){
        cy.visit(PageLinks.login);
    }
    
    enterEmail(email){
        cy.xpath(this.email).should('be.visible').type(email);
    }

    enterPassword(password){
        cy.xpath(this.password).type(password);
    }

    loginBtn(){
        cy.xpath(this.submitBtn).click();
    }
}

//export an instance of the class
export const loginPage = new LoginPage();