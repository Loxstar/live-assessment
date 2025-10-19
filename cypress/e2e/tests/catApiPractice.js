///<reference types='cypress'/>
const { faker } = require('@faker-js/faker');
import '../../fixtures/catData.json';
import 'dotenv/config';


describe('CatDB API requests', () => {
    it('Should find cats from fixture file catData.json', () => {
        cy.request({
            method: 'GET',
            url: '/cats',
            failOnStatusCode: false,
            headers: {
                'accept': 'application/json',
            },
            response: []
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.get(response.body[0].cats).should('have.id', '34428da0-3ecc-4c2a-ad1f-47cdbd2a1ab1');
        });
    });

    it('Should add a cat from fixture file catData.json', () => {
        cy.intercept('POST', 'http://localhost:3000/cats', (req) => {
            req.body = {
                id: faker.string.uuid(),
                cat: faker.animal.cat(),
                createdAt: faker.date.past()
            }
            //button click or form sub would go here
            cy.get(req.status).should.equal(201);
        });
    });

    it('Should delete a cat from fixture file catData.json', () => {
        cy.intercept('DELETE', '/cats', { statusCode: 204 }).as('deleteCat');
        //button click or form sub would go here
        cy.wait('@deleteCat');
        cy.wait('@deleteCat').its('request.body').should('include', { id: '34428da0-3ecc-4c2a-ad1f-47cdbd2a1ab1' });
        cy.wait('@deleteCat').its('response.statusCode').should('eq', 204);
        cy.get(response.body).should.not('have.id', '34428da0-3ecc-4c2a-ad1f-47cdbd2a1ab1');
    });
});

it('Should pass token', () => {
    cy.request({
        method: 'GET',
        url: '/cats',
        headers: {
            Authorization: process.env.PRIVATE_TOKEN,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});
