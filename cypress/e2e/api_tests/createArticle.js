import Utility from "../utility";

describe('Global Feed API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const signInPath = '/users/login'
    const articleFeedPath = '/articles';
    const utility = new Utility();

    it('Create article', function () {
        const accessToken = '';
        const title = '';
        //first request logs in and saves the access token
        cy.request({
            method: "POST",
            url: apiUrl + signInPath,
            body:
            {
                user: { email: "tinikapas@gmail.com", password: "Test@123" }
            }
        }).then(response => {
            this.accessToken = response.body.user.token;
            expect(this.accessToken).not.to.be.undefined; //verifies the access token isn't null
        }).then((accessToken) =>
            //second request creates the article
            cy.request({
                method: "POST",
                url: apiUrl + articleFeedPath,
                headers: {
                    Authorization: 'Token ' + this.accessToken
                },
                body:
                {
                    "article":
                    {
                        "title": utility.generateRandomTitle(),
                        "description": "How to be an amazing QA engineer",
                        "body": "API testing for dummies",
                        "tagList": ["api", "testing"]
                    }
                }
            }).then(this.title, response => {
                this.title = response.body.article.title;
                expect(response.status).to.eq(201);
                expect(response.body.article).to.have.property('title');
                expect(response.body.article.title).to.eq(this.title);
                expect(response.body.article).to.have.property('description');
                expect(response.body.article).to.have.property('body');
                expect(response.body.article).to.have.property('author');
                expect(response.body.article.tagList).to.be.a('array');
            }))
    })
})