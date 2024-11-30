describe("Info API ", () =>{

    beforeEach(() => {
        cy.loginAPI();
    })

    it("Info API GET req", () =>{

        cy.request('GET','https://orufy.com/api/v1/user/info')
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(2000);
            expect(response.headers['content-type']).to.include('application/json');
        })
    })

})