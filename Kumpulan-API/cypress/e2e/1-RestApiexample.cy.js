describe('Get employee List', () => {
    it('Verify the list employee will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://dummy.restapiexample.com/api/v1/employees',
        }).as('list')

        cy.get('@list').its('status').should('equal', 200)
        cy.get('@list').its('body.data[0].employee_name').should('equal', "Tiger Nixon")
    });
});

describe('Get single employee', () => {
    it('Verify data user will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://dummy.restapiexample.com/api/v1/employee/10',
        }).as('user')

        cy.get('@user').its('status').should('equal', 200)
        cy.get('@user').its('body.data.employee_name').should('equal', "Sonya Frost")
    });
});

describe('Create new employee', () => {
    it('Verify the new employee will submitted', () => {
         var user1 = {
            "name":"Loid Forger",
            "salary":"1000000",
            "age":"25"
        }

        cy.request({
            method: 'POST',
            url: 'https://dummy.restapiexample.com/api/v1/create', 
            body: user1
        }).as('new')

        cy.get('@new').its('status').should('equal', 200)
        cy.get('@new').its('body.data.name').should('equal', "Loid Forger")
    });
});

describe('Update data employee', () => {
    it('Verify new data for employee will submitted', () => {
         var user2 = {
            "name":"Twilight",
            "salary":"1000000",
            "age":"25"
        }

        cy.request({
            method: 'PUT',
            url: 'https://dummy.restapiexample.com/api/v1/update/21', 
            body: user2
        }).as('update')

        cy.get('@update').its('status').should('equal', 200)
        cy.get('@update').its('body.data.name').should('equal', "Twilight")
    });
});

describe('Delete data employee', () => {
    it('Verify the data is deleted from database', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://dummy.restapiexample.com/api/v1/delete/700',
        }).as('hapus')

        cy.get('@hapus').its('status').should('equal', 200)
        cy.get('@hapus').its('body.message').should('equal', "Successfully! Record has been deleted")
    });
});