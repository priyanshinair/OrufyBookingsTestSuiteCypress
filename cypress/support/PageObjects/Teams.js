import { PageLinks } from "../../Configurations/PageLinks";

class Teams {

    create = "/html/body/div/div/div[2]/div[2]/div/div[1]/button";
    teamName = "/html/body/div[2]/div/div[2]/div/form/div[1]/input";
    teamMembers = "/html/body/div[2]/div/div[2]/div/form/div[7]/div/div[2]";
    addTeamMember = "/html/body/div[3]/div/div[2]/div[1]/div/div/div[1]/div[1]/div[2]";
    saveMemberBtn = "/html/body/div[3]/div/div[3]/button";
    closeMemberBtn = "/html/body/div[3]/div/button";
    saveTeamBtn = "/html/body/div[2]/div/div[2]/button";

    visit(){
        cy.visit(PageLinks.teamUrl);
    }

    create(){
        
    }

}