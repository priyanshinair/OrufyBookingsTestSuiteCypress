import { PageLinks } from "../../Configurations/PageLinks";

class Roles {

    //elements

    createBtn = "/html/body/div/div/div[2]/div[2]/div/div/div[1]/div[2]/button";
    roleField = "/html/body/div[2]/div/form/div[1]/input";
    saveBtn = "/html/body/div[2]/div/form/div[2]/button"
    role = "/html/body/div/div/div[2]/div[2]/div/div/div[1]/div[1]/div/button[4]";
    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/div/div/div[2]/form/div[1]/div/div/button";
    deleteBtn = "/html/body/div[2]/div";
    confirmDeleteBtn = "/html/body/div[2]/div/div[2]/button[2]";

    visit(){
        cy.visit(PageLinks.rolesUrl);
    }

    create(){
        cy.xpath(this.createBtn).click();
    }

    setName(name){
        cy.xpath(this.roleField).type(name);
    }

    save(){
        cy.xpath(this.saveBtn).click();
    }
    
    selectRole(){
        cy.xpath(this.role).click();
    }

    threeDots(){
        cy.xpath(this.threeDotsBtn).click();
    }

    delete(){
        cy.xpath(this.createBtn).click();
    }

    confirmDelete(){
        cy.xpath(this.confirmDeleteBtn).click();
    }

}

export const roles = new Roles();