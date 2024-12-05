import { PageLinks } from "../../Configurations/PageLinks";

class Webhooks {

    createBtn = "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div/button";
    urlField = "/html/body/div[2]/div/form/div[1]/input";
    triggerBtn = "/html/body/div[2]/div/form/div[2]/div/div/div[1]/div[1]/div[2]/input";
    eventBtn = "/html/body/div[2]/div/form/div[3]/div/div/div[1]/div[1]/div[2]/input";
    secretField = "/html/body/div[2]/div/form/div[4]/input";
    saveBtn = "";
    errorOnUrl = "/html/body/div[2]/div/form/div[1]/p"

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

    triggerWithArrowKeys(){
        return cy.xpath(this.triggerBtn);
    }

    event(){
        cy.xpath(this.eventBtn).click();
    }

    eventWithWithArrowKeys(){
        return cy.xpath(this.eventBtn);
    }

    secret(name){
        cy.xpath(this.secretField).type(name);
    }

    save(){
        cy.xpath('//button[contains(text(), "Save")]').click();
    }

    errorUrl(){
        cy.xpath(this.errorOnUrl).should('be.visible').and('contain','Please enter valid url')
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