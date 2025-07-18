describe('My First Test', () =>{
it('clicking "type" shows the right headings', () => {
    cy.visit('https://example.cypress.io')
    cy.pause()
    cy.contains('type').click()

    //Should be on a new url which includes '/commands/actions'
    cy.url().should ('include', '/commands/actions')

    //Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
    .type('email')
    .should('have.value', 'email')
});

})