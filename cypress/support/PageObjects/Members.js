import { PageLinks } from "../../Configurations/PageLinks";

class Members {

    //elements
    inviteBtn ="/html/body/div/div/div[2]/div[2]/div/div[1]/div[2]/button";
    emailField = "/html/body/div[2]/div/form/div/div[1]/input";
    roleBtn = "/html/body/div[3]/div/form/div/div[2]/button";
    holidayBtn = "/html/body/div[3]/div/form/div/div[3]/button";
    saveBtn = "/html/body/div[3]/div/form/button";
    threeDotsBtn = "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/div/table/tbody/tr[2]/td[4]/button";
    editBtn = "/html/body/div[3]/div/div[1]";
    removeBtn = "/html/body/div[2]/div/div[2]";

    //methods

    visit(){
        cy.visit(PageLinks.memberUrl);

    }

    invite() {
        cy.xpath(this.inviteBtn).click();
    }

    setEmail(email){
        cy.xpath(this.emailField).type(email);
    }

    role(){
        cy.xpath(this.roleBtn).click();
    }

    holiday(){
        cy.xpath(this.holidayBtn).click();
    }

    save(){
        cy.xpath(this.saveBtn).click();
    }

    threeDots(){
        cy.xpath(this.threeDotsBtn).click();
    }

    edit(){
        cy.xpath(this.editBtn).click();
    }

    remove(){
        cy.xpath(this.removeBtn).click();
    }
}

export const members = new Members();