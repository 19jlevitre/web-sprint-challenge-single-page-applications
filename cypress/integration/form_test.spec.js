

describe("App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Unexpected token')) {
      return false
    }})
    
    it('sanity check', () => {
        expect(1 + 1).to.equal(2);

    })
})