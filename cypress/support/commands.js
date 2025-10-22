

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

Cypress.Commands.add('apiLogin', (username, password, url) => {
    cy.request({
        method: "POST",
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            user: username,
            password: password
        }
    }).then((response) => {
        const authToken = response.body.token;
        cy.window().then((win) => {
            win.localStorage.setItem('authToken', authToken);
        });
    })
})