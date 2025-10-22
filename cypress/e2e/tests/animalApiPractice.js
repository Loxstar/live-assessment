

describe('Animal API requests', () => {
    it('Post cat to DB', () => {
        cy.request({
            method: "POST",
            url: 'http://localhost:3000/animals',
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
            },
        }).its('status')
            .should('equal', 201).then((response) => {
                cy.log(response);
            })
    })

    it('Get bear from DB', () => {
        cy.request({
            method: "GET",
            url: 'http://localhost:3000/animals',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                bears: {
                    id: "ef0c5879-22d7-4eb1-b2ca-8d93a8ffb722",
                    bear: "American black bear",
                    createdAt: "2025-08-11T22:43:09.520Z"
                },
                id: "e2e3"
            }
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response);
            })
    })

    it('Should patch update to cat', () => {
        cy.request({
            method: "PATCH",
            url: "http://localhost:3000/animals/123",
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
                cy.log(response);
            })
    })

    it('Should delete cat', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/animals/123",
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
                cy.log(response);
            })
    })
})