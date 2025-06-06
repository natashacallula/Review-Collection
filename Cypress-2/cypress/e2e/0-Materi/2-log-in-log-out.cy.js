describe('Working with inputs', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    });


    it('Should fill username & Password', () => {
        cy.fixture("user").then(user => {
            const username = user.userr
            const password = user.pass

        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)

        cy.get('#user_password').clear()
        cy.get('#user_password').type(password)
        
        cy.get('input[name="submit"]').click()

        cy.get('ul.nav-tabs').should('be.visible')

        //Logout
        cy.contains('username').click()
        cy.contains('Logout').click()

        cy.url().should('include', 'index.html')


        })
    });
});
