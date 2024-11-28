import { teams } from "../../support/PageObjects/Teams";

describe("team test", () => {
    beforeEach(() => {
        cy.viewport(1920, 1024);
        cy.login();
    })

    it('create team', () => {
        cy.wait(2000);
        teams.visit();
        cy.wait(2000);
        teams.create();
        teams.setTeamName("cypress team");
        teams.teamMember();
        teams.saveMember();
        teams.saveTeam();
    })
})