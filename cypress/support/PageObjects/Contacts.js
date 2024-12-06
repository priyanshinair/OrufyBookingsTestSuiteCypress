import { PageLinks } from "../../Configurations/PageLinks";

class Contacts {

    //elements 
    createBtn  = "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/button";
    nameField = "/html/body/div[2]/div/div[2]/form/div/div[1]/input";
    emailField = "/html/body/div[2]/div/div[2]/form/div/div[2]/input";
    timezoneBtn = "/html/body/div[2]/div/div[2]/form/div/div[3]/div"
    searchTimezoneField = "/html/body/div[4]/div/div/div[1]/input"
    phoneNumberField = "/html/body/div[2]/div/div[2]/form/div/div[4]/div/div/input"
    saveBtn = "/html/body/div[2]/div/div[2]/form/button";
    errorOnField = "/html/body/div[3]/div/div[2]/form/div/div[1]/p"
    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[4]/div/button[2]";
    editBtn = "/html/body/div[2]/div/div[2]";
    deleteBtn = "/html/body/div[2]/div/div[3]";
    deleteConfirmBtn = "/html/body/div[2]/div/div[2]/div/button[2]";

    //methods
    visit(){
        cy.visit(PageLinks.contactsUrl);
    }

    create(){
        cy.xpath(this.createBtn).click();
    }

    setName(name){
        cy.xpath(this.nameField).type(name);
    }

    setEmail(email){
        cy.xpath(this.emailField).type(email);
    }

    timezone(){
        cy.xpath(this.timezoneBtn).click();
    }

    searchTimezone(name){
        cy.xpath("//input[@placeholder='Search ...']").type(name);
    }

    phoneNumber(number){
        cy.xpath(this.phoneNumberField).type(number)
    }
    
    errorField(){
        cy.xpath(this.errorOnField).should('be.visible').and('contain','Please enter name')
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

    delete(){
        cy.xpath(this.deleteBtn).click();
    }

    confirmDelete(){
        cy.xpath(this.deleteConfirmBtn).click();
    }
}

export const contacts = new Contacts();