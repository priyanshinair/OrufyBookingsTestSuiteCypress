import { RoutingModule } from "../../support/PageObjects/Routing";

describe("routing tests", () => {

    beforeEach( () => {
        cy.viewport(1920,1080); //desktop view
        cy.login();
    })

    it('edit route', () => {
        cy.wait(5000);

        //create a new route
        RoutingModule.visit();
        RoutingModule.create();
        RoutingModule.setName("cypress form test");
        RoutingModule.save();

        //update form configurations
        RoutingModule.setFormName("cypress form name");
        RoutingModule.setDesc("this is cypress desc");
        RoutingModule.addQues();
        RoutingModule.setQues("cypress question");
        RoutingModule.saveQues();
        cy.wait(2000);
        RoutingModule.saveForm();

        //update route logic
        cy.wait(2000);
        RoutingModule.logic();
        RoutingModule.createLogic();
        RoutingModule.logicQues();
        cy.get('body').type('{enter}');
        RoutingModule.conditionBtn();
        cy.get('body').type('{enter}')
        RoutingModule.giveValue("test");
        RoutingModule.eventType();
        cy.get('body').type('{enter}');
        RoutingModule.saveLogic();
    })
})