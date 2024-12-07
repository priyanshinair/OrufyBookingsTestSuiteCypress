import { teams } from "../../support/PageObjects/Teams";

describe("team test", () => {
    
    before(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
    })

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.login();
        })
        cy.viewport(1920, 1024);
        
        teams.visit();
    })

    it('create team', () => {
        
        teams.create();
        teams.setTeamName("cypress team");
        teams.teamMember();
        teams.saveMember();
        teams.saveTeam();
    })
})