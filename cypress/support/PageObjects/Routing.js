import { PageLinks } from "../../Configurations/PageLinks"

class Routing {

    //elements on main page
    createBtn = "/html/body/div/div/div[2]/div[2]/section/section/div[1]/button"
    nameField = "/html/body/div[2]/div/form/div[1]/div/input"
    saveBtn = "/html/body/div[2]/div/form/div[2]/div/button"
    errorOnField = "/html/body/div[2]/div/form/div[1]/div/p"
    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/section/section/div[2]/section/div/div[1]/div[1]/div[2]/button"
    renameBtn = "/html/body/div[2]/div/div[2]"
    deleteBtn = "/html/body/div[2]/div/div[5]"
    editBtn = "/html/body/div[2]/div/div[1]"
    confirmDeleteBtn = "/html/body/div[2]/div/div[2]/button[2]"
    


    //elements of form
    fromName = "/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[1]/div[1]/input"
    desc = "/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[1]/div[2]/textarea"
    addQuesBtn = "/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[1]/div[3]/button"
    quesName = "/html/body/div[2]/div/form/div[1]/input"
    saveQuesBtn = "/html/body/div[2]/div/form/button"
    saveFormBtn = "/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[2]/button"

    //elements of logic
    logicBtn = "/html/body/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/a"
    createLogicBtn = "/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/button"
    selectQuesBtn = "/html/body/div[2]/div/div[2]/form/div[1]/div/div[2]/div[1]/div/div[1]/button"
    //selectQues = "/html/body/div[2]/div/div[2]/form/div[1]/div/div[2]/div[1]/div/div[1]/select/option[1]"
    selectConditionBtn = "/html/body/div[2]/div/div[2]/form/div[1]/div/div[2]/div[1]/div/div[2]/button"
    //selectCondition = "/html/body/div[2]/div/div[2]/form/div[1]/div/div[2]/div[1]/div/div[2]/select/option[1]"
    addValue = "/html/body/div[2]/div/div[2]/form/div[1]/div/div[2]/div[1]/div/div[3]/div/input"
    eventTypeBtn = "/html/body/div[2]/div/div[3]/form/div/div[2]/div/button"
    selectEventType = "/html/body/div[2]/div/div[3]/form/div/div[2]/div/select/option[1]"
    saveLogicBtn = "/html/body/div[2]/div/div[3]/form/button"

    //share routing form elements
    shareBtn = "/html/body/div/div/div[2]/div[2]/section/section/div[2]/section/div/div/table/tbody/tr[1]/td[6]/button[1]"
    copyLinkBtn = "/html/body/div[2]/div/div[2]/div/div[1]/div/button"

    //submit button on routing form
    submitRouteFormBtn = "/html/body/div/div/div/div/section/form/button"


    //methods for main page
    visit(){
        cy.visit(PageLinks.routingUrl);
    }

    create(){
        cy.xpath(this.createBtn).click();
    }

    save(){
        cy.xpath(this.saveBtn).click();
    }

    setName(name){
        cy.xpath(this.nameField).type(name);
    }

    errorField(){
        cy.xpath(this.errorOnField).should('be.visible').and('contain','Name is required');
    }

    threeDotBtn(){
        cy.xpath(this.threeDotsBtn).click();
    }
    
    rename(){
        cy.xpath(this.renameBtn).click();
    }

    delete(){
        cy.xpath(this.deleteBtn).click();
    }

    edit(){
        cy.xpath(this.editBtn).click();
    }


    confirmDelete(){
        cy.xpath(this.confirmDeleteBtn).click();
    }

    //methods for form
    setFormName(name){
        cy.xpath(this.fromName).type(name);
    }

    setDesc(name){
        cy.xpath(this.desc).type(name);
    }

    addQues(){
        cy.xpath(this.addQuesBtn).click();
    }

    setQues(name){
        cy.xpath(this.quesName).type(name);
    }

    saveQues(){
        cy.xpath(this.saveQuesBtn).click();
    }

    saveForm(){
        cy.xpath(this.saveFormBtn).click();
    }

    //methods for logic 
    logic(){
        cy.xpath(this.logicBtn).click();
    }

    createLogic(){
        cy.xpath(this.createLogicBtn).click();
    }

    logicQues(){
        cy.xpath(this.selectQuesBtn).click();
    }

    conditionBtn(){
        cy.xpath(this.selectConditionBtn).click();
    }

    giveValue(name){
        cy.xpath(this.addValue).type(name);
    }

    eventType(){
        cy.xpath(this.eventTypeBtn).click();
    }

    saveLogic(){
        cy.xpath(this.saveLogicBtn).click();
    }

    //methods for share routing form 
    share(){
        cy.xpath(this.shareBtn).click();
    }

    copyLink(){
        cy.xpath(this.copyLinkBtn).click();
    }

    submit(){
        cy.xpath(this.submitRouteFormBtn).click();
    }
}

export const RoutingModule = new Routing();