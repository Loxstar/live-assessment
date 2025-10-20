const { faker } = require('@faker-js/faker');
import '../../fixtures/catData.json';
// import 'dotenv/config';


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
            },

        }).its('status')
            .should('equal', 201).then((response) => {
                cy.log(response.body);
            })
    })

    it('Get cat from DB', () => {
        cy.request({
            method: "GET",
            url: 'http://localhost:3000/cats/17',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Garfield",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
            },
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })

    it('Should patch update to cat', () => {
        cy.request({
            method: "PATCH",
            url: "http://localhost:3000/cats/17",
            headers: {
                contentType: "application/json",
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Oddie",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
            },
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })

    it('Should delete cat', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/cats/17",
            headers: {
                contentType: "application/json",
            },
            body: {
                cats: {
                    id: 17,
                    cat: "Oddie",
                    createdAt: "2025-01-24T01:17:31.676Z"
                },
            },
        }).its('status')
            .should('equal', 200).then((response) => {
                cy.log(response.body);
            })
    })
})
















// it('Should find cats from fixture file catData.json', () => {
//     cy.request('/cats').its('body.0').then(()=>{
//         cy.request({
//             method: "GET",
//             url: "http://localhost:3000/cats",
//             headers: {
//                 'accept': "application/json",
//             },
//         }).then((response) => {
//             expect(response.status).to.eq(200);
//             expect(response.body[0]).to.exist;
//         })
//     })
// })


//     it('Should add a cat from fixture file catData.json', () => {
//         cy.request('http://localhost:3000/cats').as('newCat').then(() => {
//             cy.wait('@newCat').then(() => {
//                 cy.request({
//                     method: "POST",
//                     url: "http://localhost:3000/cats",
//                     ailOnStatusCode: false,
//                     body: {
//                         id: faker.string.uuid(),
//                         cat: faker.animal.cat(),
//                         createdAt: faker.date.past(),
//                     },
//                 })

//             })
//         }).then((res) => {
//             expect(res.status).to.eq(201);
//             expect(res.body.id).not.to.be.null;
//         })
//     })
// })







//     it('Should delete a cat from fixture file catData.json', () => {
//         cy.request('/cats'). {

//         }
//         //button click or form sub would go here
//         cy.wait('@deleteCat');
//         cy.wait('@deleteCat').its('request.body').should('include', { id: '34428da0-3ecc-4c2a-ad1f-47cdbd2a1ab1' });
//         cy.wait('@deleteCat').its('response.statusCode').should('eq', 204);
//         cy.get(response.body).should.not('have.id', '34428da0-3ecc-4c2a-ad1f-47cdbd2a1ab1');
//     });
// });

// it.skip('Should pass token', () => {
//     cy.request('/').its('body').should.have.length.gt(0)
//     cy.request({
//         method: "GET",
//         url: "/cats",
//         headers: {
//             Authorization: process.env.PRIVATE_TOKEN,
//         },
//     }).then((response) => {
//         expect(response.status).to.eq(200);
//     });
// })
// })
