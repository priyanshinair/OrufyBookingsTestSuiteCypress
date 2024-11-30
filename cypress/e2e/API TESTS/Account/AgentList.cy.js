describe("agent list api", () =>{

    beforeEach(() => {
        cy.loginAPI()
    })

    it("agent lists api", () => {
        cy.request({
            method:'GET',
            url:"/bookings/agent/list"
        })
        .then((response) => {
            const members = response.body.list.some(member => member.emailId === 'priyanshinair.work@gmail.com')
            expect(response.status).to.eq(200)
            //expect(response.body.list.emailId).to.eql('priyanshinair.work@gmail.com')
            expect(members).to.be.false
        })
    
    })
})