describe('Working with inputs', () =>{
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
    });

    
    it('Should fill username & Password + keep me signed in', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')

        cy.get('#user_remember_me').click()
        cy.get('input[name="submit"]').click()

    });
})