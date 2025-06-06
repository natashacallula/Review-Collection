describe('Navbar test', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });


    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')   
        cy.contains('Account Summary').should('be.visible')    
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.contains('Feedback').should('be.visible')
    });


     it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.contains('Transfer Funds').should('be.visible')
    });
});
