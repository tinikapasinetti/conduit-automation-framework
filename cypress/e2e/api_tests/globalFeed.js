describe('Global Feed API Tests', () => {

    const apiUrl = 'https://conduit.productionready.io/api';
    const globalFeedPath = '/articles?limit=10&offset=0'

    it('Verify the final state of the global feed shows 10 articles', () => {
        cy.request('GET', apiUrl + globalFeedPath, {
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.articles).to.have.length(10);
        });
    });
})