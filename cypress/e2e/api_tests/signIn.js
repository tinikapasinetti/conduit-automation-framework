import Utility from "../utility";

describe('Sign In API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const signInPath = '/users/login'
    const utility = new Utility();

    it('Successful Login', () => {
        cy.request('POST', apiUrl + signInPath, {
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

    it('Unsuccessful Login with invalid email', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signInPath,
            failOnStatusCode: false,
            body:
            {
                user: { email: utility.generateRandomEmail(), password: "Test@123" }
            }
        }).should((response) => {
            expect(response.status).to.eq(403);
            expect(response.body.errors).to.have.property('email or password');
            expect(response.body.errors["email or password"]).to.contain('is invalid');
        })
    });

    it('Unsuccessful Login with invalid password', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signInPath,
            failOnStatusCode: false,
            body:
            {
                user: { email: "tinikapas@gmail.com", password: "Test@124" }
            }
        }).should((response) => {
            expect(response.status).to.eq(403);
            expect(response.body.errors).to.have.property('email or password');
            expect(response.body.errors["email or password"]).to.contain('is invalid');
        })
    });

    it('Unsuccessful Login with blank email', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signInPath,
            failOnStatusCode: false,
            body:
            {
                user: { email: "", password: "Test@123" }
            }
        }).should((response) => {
            expect(response.status).to.eq(422);
            expect(response.body.errors["email"]).to.contain('can\'t be blank');
        })
    });

    it('Unsuccessful Login with blank password', () => {

        cy.request({
            method: "POST",
            url: apiUrl + signInPath,
            failOnStatusCode: false,
            body:
            {
                user: { email: "utility.generateRandomEmail()", password: "" }
            }
        }).should((response) => {
            expect(response.status).to.eq(422);
            expect(response.body.errors["password"]).to.contain('can\'t be blank');
        })
    });
})