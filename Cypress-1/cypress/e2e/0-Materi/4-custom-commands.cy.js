describe('Working with inputs', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    });


    it('Should fill username & Password', () => {
        cy.fixture("user").then(user => {
            const username = user.userr
            const password = user.pass

            cy.login(username,password);

        })
    });
});
