describe('Global Feed API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const signInPath = '/users/login'
    const articleFeedPath = '/articles';
    const slug = 'Ill-quantify-the-redundant-TCP-bus-that-should-hard-drive-the-ADP-bandwidth!-553';
    const accessToken = '';


    it('Get article by slug', () => {
        cy.request('GET', apiUrl + articleFeedPath + '/' + slug, {
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.article).to.have.property('slug');
            expect(response.body.article).to.have.property('title');
            expect(response.body.article).to.have.property('description');
            expect(response.body.article).to.have.property('author');
            expect(response.body.article.tagList).to.be.a('array');
            expect(response.body.article.author).to.have.property('username');
        });
    });

    it('Get articles by author', () => {
        cy.request('GET', apiUrl + '/articles?author=Maksim+Esteban&limit=5&offset=0', {
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.articles).to.not.be.null;
            expect(response.body.articlesCount).to.be.greaterThan(0);
        });
    });

    it('Get all articles', () => {
        cy.request('GET', apiUrl + articleFeedPath, {
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.articles).to.not.be.null;
            expect(response.body.articlesCount).to.be.greaterThan(0);
        });
    });

    it('Get articles by tag', () => {
        cy.request('GET', apiUrl + '/articles?tag=eos', {
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.articles).to.not.be.null;
            expect(response.body.articlesCount).to.be.greaterThan(0);
        });
    });
})