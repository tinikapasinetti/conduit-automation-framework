import Utility from "../utility";

describe('Sign Up API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const signUpPath = '/users'
    const utility = new Utility();

    it('Successful Sign Up', () => {
        cy.request('POST', apiUrl + signUpPath, {
            user: {
                username: utility.gernateRandomUsername(),
                email: utility.generateRandomEmail(),
                password: "Test@123"
            }
        }).should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.user.token).to.be.not.null;
            expect(response.body.user.email).to.be.not.null;
            expect(response.body.user.username).to.be.not.null;
        });
    });

    it('Unsuccessful Sign Up', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signUpPath,
            failOnStatusCode: false,
            body:
            {
                user:
                {
                    username: utility.gernateRandomUsername(),
                    email: "tinikapas@gmail.com",
                    password: "Test@123"
                }
            }
        }).should((response) => {
            expect(response.status).to.eq(403);
            expect(response.body.errors["email"]).to.contain('has already been taken');
        })
    });
})