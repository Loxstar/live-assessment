import '../../fixtures/catData.json';

describe('CatDB API requests', () => {
    it('Post cat to DB', () => {
        cy.request({
            method: "POST",
            url: 'http://localhost:3000/cats',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Garfield",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
                id: "123",
            }
        }).its('status')
            .should('equal', 201).then((response) => {
                cy.log(response.body);
            })
    })

    it('Get cat from DB', () => {
        cy.request({
            method: "GET",
            url: 'http://localhost:3000/cats/123',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Garfield",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
                id: "123"
            }
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })

    it('Should patch update to cat', () => {
        cy.request({
            method: "PATCH",
            url: "http://localhost:3000/cats/123",
            headers: {
                contentType: "application/json",
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Oddie",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
                id: "123"
            }
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })

    it('Should delete cat', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/cats/123",
            headers: {
                contentType: "application/json",
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Oddie",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
                id: "123"
            }
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })
})