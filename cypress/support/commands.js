// import 'dotenv/config'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('apiLogin', (username, password, domain) => {
//     cy.session(username, () => {
//         cy.request("POST", domain, {
//             username,
//             password,
//         })
//     }).then((response) => {
//         expect(response.status).to.eq(200)
//     });
// });


// Cypress.Commands.add('webLogin', (username, password, domain, userInput, pwInput, submit, subDom) => {
//     cy.session(
//         [username, password],
//         () => {
//             cy.visit(domain)
//             cy.get(userInput).type(username)
//             cy.get(pwInput).type(password)
//             cy.get(submit).click()
//         },
//         {
//             validate() {
//                 cy.request(subDom).its('status').should('eq', 200);
//             },
//         }
//     );
// });
