describe("app info api", () => {

    beforeEach(() => {
        cy.loginAPI()
    })

    it("app info api", () => {
        cy.request({
            method:'GET',
            url:"/bookings/app/info"
        })
    })
})