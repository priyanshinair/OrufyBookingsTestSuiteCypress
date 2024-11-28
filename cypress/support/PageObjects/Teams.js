import { PageLinks } from "../../Configurations/PageLinks";

class Teams {

    createBtn = "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/button";
    teamName = "/html/body/div[2]/div/div[2]/div/form/div[1]/input";
    teamMembers = "/html/body/div[2]/div/div[2]/div/form/div[7]/div/div[2]";
    addTeamMember = "/html/body/div[3]/div/div[2]/div[1]/div/div/div[1]/div[1]/div[2]";
    saveMemberBtn = "/html/body/div[3]/div/div[3]/button";
    closeMemberBtn = "/html/body/div[3]/div/button";
    saveTeamBtn = "/html/body/div[2]/div/div[2]/button";
    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/div/div[2]/div/div/table/tbody/tr/td[4]/div/button"
    deleteBtn = "/html/body/div[2]/div/div[2]"
    confirmDeleteBtn = "/html/body/div[2]/div/div[2]/button[2]"

    visit(){
        cy.visit(PageLinks.teamUrl);
    }

    create(){
        cy.xpath(this.createBtn);
    }

    setTeamName(name){
        cy.xpath(this.teamName).type(name);
    }

    teamMember(){
        cy.xpath(this.teamMembers).click();
    }

    saveMember(){
        cy.xpath(this.saveMemberBtn).click();
    }

    closeMember(){
        cy.xpath(this.closeMemberBtn).click();
    }

    closeMember(){
        cy.xpath(this.closeMemberBtn).click();
    }

    saveTeam(){
        cy.xpath(this.saveTeamBtn).click();
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

export const teams = new Teams();