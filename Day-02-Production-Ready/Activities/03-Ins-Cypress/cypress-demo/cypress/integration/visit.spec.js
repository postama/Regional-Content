describe('Visit Test', function () {
    it('Visits the app', function () {
        cy.visit('localhost:3000');
    });

    it('Searches for items by deafult', function () {
        cy.visit('localhost:3000');

        cy.get('.list-group')
            .find('.list-group-item')
            .its('length')
            .should('eq', 20);
    });

    it('Should be able to search for new items', function () {
        cy.get('#search')
            .type('dogs');

        cy.get('.btn')
            .click();

        cy.get('.list-group')
            .find('.list-group-item')
            .its('length')
            .should('eq', 20);
    })
});