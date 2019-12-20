context('test-cases', () => {
it('test', () => {
cy.visit('localhost:3000')
cy.get('#list>li').should('have.length', 2)
cy.get('#item')
cy.contains('CYCL')
});
});