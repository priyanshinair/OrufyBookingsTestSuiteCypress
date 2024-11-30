describe("plan info api", () =>{

    beforeEach(() => {
        cy.loginAPI();

    })

    it("plan info",() => {
        cy.request({
            method :'GET',
            url: "/bookings/agent/info"
        })
        .then((response) => {
            const {planInfo} = response.body;
            const {packageInfo, isExpired, featureObj} = planInfo;

            expect(response.status).to.eq(200)
            expect(packageInfo.key).to.eql('PRO')
            expect(isExpired).to.eql(false)
            expect(featureObj["WEBHOOK"].quantity).to.eql(10);
            expect(featureObj["ROUND_ROBIN_MEETINGS"].quantity).to.eql(-1)
            expect(featureObj["ZOOM_INTEGRATION"].type).to.eql("FEATURE")
        })
    })
})