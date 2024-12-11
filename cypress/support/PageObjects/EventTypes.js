class EventTypes {

    //elements
    createBtn = "/html/body/div/div/div[2]/div[2]/div/div[1]/div[2]/button"
    selectGlobalBtn = "/html/body/div[2]/div/div/div[1]/div/div"
    eventNameField = "/html/body/div[2]/div/div[2]/form/div[1]/input"
    durationField = "/html/body/div[2]/div/div[2]/form/div[2]/input"
    durationTypeBtn = "/html/body/div[2]/div/div[2]/form/div[3]/button"
    modeOfEventBtn = "/html/body/div[2]/div/div[2]/form/div[4]/button"
    eventTypeBtn = "/html/body/div[2]/div/div[2]/form/div[5]/button"
    eventHostBtn = "/html/body/div[2]/div/div[2]/form/div[6]/button"
    makeSceretBtn = "/html/body/div[2]/div/div[2]/form/div[7]/div/button"
    saveBtn = "/html/body/div[2]/div/div[2]/form/div[8]/button"
    threeDotsBtn = "/html/body/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/ul/li[1]/div[2]/div[1]/button"
    editBtn = "/html/body/div[2]/div/div[1]"
    duplicateBtn = "/html/body/div[2]/div/div[3]"
    deleteBtn = "/html/body/div[2]/div/div[4]"
    confirmDeleteBtn = "/html/body/div[2]/div/div[2]/button"
    disableBtn = "/html/body/div[2]/div/div[6]/button" 
    makeSecretBtnFromMenu = "/html/body/div[2]/div/div[5]/button"
    goToLinkBtn = "/html/body/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/ul/li[1]/div[2]/div[2]/div[2]/a/div"
    goToLeftSidebarBtn = "/html/body/div/div/div[1]/div/div[2]/div[1]/a"
    errorOnNameField = "/html/body/div[2]/div/div[2]/form/div[1]/p"

    //methods
    visit(){
        cy.visit("https://bookings.beta.orufy.in/event-types")
    }

    create(){
        cy.xpath(this.createBtn).should('be.visible').click();
    }
    selctGlobal(){
        cy.xpath(this.selectGlobalBtn).click();
    }
    eventName(name){
        cy.xpath(this.eventNameField).type(name);
    }
    duration(number){
        cy.xpath(this.durationTypeBtn).type(number);
    }
    durationType(){
        cy.xpath(this.durationTypeBtn).click();
    }
    mode(){
        cy.xpath(this.modeOfEventBtn).click();
    }
    eventType(){
        cy.xpath(this.eventTypeBtn).click()
    }
    host(){
        cy.xpath(this.eventHostBtn).click();
    }
    makeSecret(){
        cy.xpath(this.makeSceretBtn).click();
    }
    save(){
        cy.xpath(this.saveBtn).click();
    }
    threeDots(){
        cy.xpath(this.threeDotsBtn).click();
    }
    edit(){
        cy.xpath(this.editBtn).click();
    }
    duplicate(){
        cy.xpath(this.duplicateBtn).click();
    }
    delete(){
        cy.xpath(this.deleteBtn).click();
    }
    confirmDelete(){
        cy.xpath(this.confirmDeleteBtn).click();
    }
    goToLink(){
        cy.xpath(this.goToLinkBtn).click();
    }
    goToLeftSidebar() {
        cy.xpath(this.goToLeftSidebarBtn).click();
    }
    errorField() {
        cy.xpath(this.errorOnNameField).should('be.visible').and('contain','Please enter meeting name')
    }
}

export const eventTypes = new EventTypes();