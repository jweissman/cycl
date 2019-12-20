context('test-cases', () => {
it('test', () => {
cy.visit('localhost:3000')
cy.get('#list>li').should('have.length', 2)
cy.get('#item')
cy.contains('CYCL')
cy.get('#counter').should('have.text', '0 clicks')
cy.contains('increment').click()
cy.get('#counter').should('have.text', '1 clicks')
cy.contains('increment').click()
cy.get('#counter').should('have.text', '2 clicks')
});
});