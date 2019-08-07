describe('Visit Test', function () {
    it('Visits the app', function () {
        cy.visit('localhost:3000');
    });

    it('Search for items by default', function () {
        cy.visit('localhost:3000');

        cy.get('.list-group')
            .find('.list-group-item')
            .its('length')
            .should('eq', 20);
    });

    it('should be able to search for new items', function () {
        cy.get('#search')
            .type('dogs');

        cy.get('.btn')
            .click();

        cy.get('.list-group')
            .find('.list-group-item')
            .its('length')
            .should('eq', 20);
    })

    // it('Should be able to search for new items', function () {
    //     cy.get('#search')
    //         .type('dogs');

    //     cy.get('.btn')
    //         .click();

    //     cy.get('.list-group')
    //         .find('.list-group-item')
    //         .its('length')
    //         .should('eq', 20);
    // })
});