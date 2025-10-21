

describe('Fixture assessment practice', () => {
    it('Should verify catData fixture file is able to be imported for test', () => {
        cy.fixture('catData.json').as('catData')
            .then((json) => {
                cy.intercept('GET', '@catData', json)
                cy.log(json)
            })
    })

    it('Should verify birdData fixture file is able to be imported for test', () => {
        cy.fixture('birdData.json');
        cy.intercept({
            method: 'GET',
            url: '/birds'
        }).as('getbirds').then(() => {
            cy.visit('/')
            cy.get('body > main > ul > li > a')
                .as('btn')
                .click()
                .then(() => {
                    cy.get('body > pre')
                        .should('contain.text', '"Cooper\'s Hawk"')
                })
        })
    })

    it('Should verify bearData fixture file is able to be imported for test', () => {
        cy.fixture('bearData.json').then((bearData) => {
            cy.intercept('GET', '/bears', bearData)
            cy.log(bearData);
        })
    })
})

