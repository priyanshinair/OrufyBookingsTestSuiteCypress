import { teams } from "../../support/PageObjects/Teams";

describe("team test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
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