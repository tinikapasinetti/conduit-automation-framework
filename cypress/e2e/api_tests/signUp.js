import Utility from "../utility";

describe('Sign Up API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const signUpPath = '/users'
    const utility = new Utility();

    it('Successful Sign Up', () => {
        cy.request('POST', apiUrl + signUpPath, {
            user: {
                username: utility.generateRandomUsername(),
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

    it('Unsuccessful Sign Up with Existing Email', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signUpPath,
            failOnStatusCode: false,
            body:
            {
                user:
                {
                    username: utility.generateRandomUsername(),
                    email: "tinikapas@gmail.com",
                    password: "Test@123"
                }
            }
        }).should((response) => {
            expect(response.status).to.eq(422);
            expect(response.body.errors["email"]).to.contain('has already been taken');
        })
    });

    it('Unsuccessful Sign Up with Existing Username', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signUpPath,
            failOnStatusCode: false,
            body:
            {
                user:
                {
                    username: "Tinika1",
                    email: utility.generateRandomEmail(),
                    password: "Test@123"
                }
            }
        }).should((response) => {
            expect(response.status).to.eq(422);
            expect(response.body.errors["username"]).to.contain('has already been taken');
        })
    });
})