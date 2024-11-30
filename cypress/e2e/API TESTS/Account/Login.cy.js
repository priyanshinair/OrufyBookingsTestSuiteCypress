describe(" Accounts API", () => {

    //generic approach
    it("Login api", () => {

        cy.request({
            method :'POST', 
            url : 'https://orufy.com/api/v1/user/login',
            body: {
                
                    emailId:"priyanshi+qq@orufy.com",
                    password:"Orufy@123",
                    productId:"BOOKINGS"
                
            }
        } )
        .its('status')
        .should('equal', 200);
    })


    //approach - 3 using fixture file
    it("approach 3", () => {

        cy.fixture('apiTest').then((fixtureData) =>{
            const requestBody = fixtureData

            cy.request({
                method:'POST',
                url : 'https://orufy.com/api/v1/user/login',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                //expect(response.body.emailId).to.eq(requestBody.emailId)
                expect(response.body).has.property('isSuccess',true) //response validation
            })
        })
    })

    //hard coded approach
    it.skip("hard coded", () => {
        
        const requestBody = {
            emailId:"priyanshi+qq@orufy.com",
            password:"Orufy@123",
            productId:"BOOKINGS"
        }

        cy.request({
            method:'POST',
            url : 'https://orufy.com/api/v1/user/login',
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.emailId).to.eq("priyanshi+qq@orufy.com")
        })
    })


    //dynamically generate json object
    it.skip("approach 2", () =>{
        const requestBody = {
            emailId:Math.random().toString(5).substring(2),
            password:Math.random().toString(5).substring(2)+"@gmail.com"
        }
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.emailId).to.eq(requestBody.emailId)
        })
        
    })

    
})