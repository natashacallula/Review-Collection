describe('E2E Searchbox', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    });


    it('Should fill username & Password', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')

        cy.get('input[name="submit"]').click()

        cy.get('#searchTerm').clear()
        cy.get('#searchTerm').type('online {enter}')

        cy.url().should('include','searchTerm=online+')
    });
})