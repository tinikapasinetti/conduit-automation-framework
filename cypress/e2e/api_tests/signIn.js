describe('Sign In API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const loginPath = '/users/login'

    it('Successful Login', () => {
        cy.request('POST', apiUrl + loginPath, {
            user:
            {
                email: 'tinikapas@gmail.com',
                password: 'Test@123'
            }
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.user.email).to.eq('tinikapas@gmail.com');
            expect(response.body.user.username).to.eq('Tinika1');
            expect(response.body.user.token).to.be.not.null;
        });
    });

    it('Unsuccessful Login', () => {
        const email = 'email' + String(new Date().getTime());

        cy.request({
            method: "POST",
            url: apiUrl + loginPath,
            failOnStatusCode: false,
            body:
            {
                user: { email: "tinikapasofuhjkl@gmail.com", password: "Test@123" }
            }
        }).should((response) => {
            expect(response.status).to.eq(403);
            expect(response.body.errors).to.have.property('email or password');
            expect(response.body.errors["email or password"]).to.contain('is invalid');
        })
    });
})