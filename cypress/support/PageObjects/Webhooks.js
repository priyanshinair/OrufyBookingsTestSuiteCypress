import { PageLinks } from "../../Configurations/PageLinks";

class Webhooks {

    createBtn = "/html/body/div/div/div[2]/div[2]/div[1]/div/button";
    urlField = "/html/body/div[2]/div/form/div[1]/input";
    triggerBtn = "/html/body/div[2]/div/form/div[2]/div/div/div[1]/div[1]/div[2]/input";
    eventBtn = "/html/body/div[2]/div/form/div[3]/div/div/div[1]/div[1]/div[2]/input";
    secretField = "/html/body/div[2]/div/form/div[4]/input";
    saveBtn = "/html/body/div[2]/div/form/div[5]/button";

    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/div[2]/div/div[1]/div[2]/button";
    deleteBtn = "/html/body/div[2]/div/div[1]";
    confirmDeleteBtn = "/html/body/div[2]/div/div[2]/button[2]";

    visit(){
        cy.visit(PageLinks.webhooksUrl);
    }

    create(){
        cy.xpath(this.createBtn).click();
    }

    seturl(url){
        cy.xpath(this.urlField).type(url);
    }

    trigger(){
        cy.xpath(this.triggerBtn).click();
    }

    event(){
        cy.xpath(this.eventBtn).click();
    }

    secret(name){
        cy.xpath(this.secretField).type(name);
    }

    save(){
        cy.xpath(this.saveBtn).click();
    }

    threeDots(){
        cy.xpath(this.threeDotsBtn).click();
    }

    delete(){
        cy.xpath(this.deleteBtn).click();
    }

    confirmDelete(){
        cy.xpath(this.confirmDeleteBtn).click();
    }
}

export const webhooks = new Webhooks();