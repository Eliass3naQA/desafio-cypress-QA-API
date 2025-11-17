// cypress/support/commands.js

// ------------------------
// LOGIN (gera token global)
// ------------------------
Cypress.Commands.add('apiLogin', () => {
  return cy.request({
    method: "POST",
    url: "/login",
    body: {
      email: "fulano@qa.com",   // usuário REAL da Serverest
      password: "teste"
    },
    failOnStatusCode: false
  }).then((res) => {
    const token = res.body.authorization;
    Cypress.env("token", token); 
    return token;
  });
});

// ------------------------
// GET
// ------------------------
Cypress.Commands.add('apiGet', (endpoint) => {
  return cy.request({
    method: 'GET',
    url: endpoint,
    headers: { Authorization: Cypress.env("token") || "" },
    failOnStatusCode: false
  });
});

// POST
Cypress.Commands.add('apiPost', (endpoint, body) => {
  return cy.request({
    method: 'POST',
    url: endpoint,
    body,
    headers: { Authorization: Cypress.env("token") || "" },
    failOnStatusCode: false
  });
});

// PUT
Cypress.Commands.add('apiPut', (endpoint, body) => {
  return cy.request({
    method: 'PUT',
    url: endpoint,
    body,
    headers: { Authorization: Cypress.env("token") || "" },
    failOnStatusCode: false
  });
});

// DELETE
Cypress.Commands.add('apiDelete', (endpoint) => {
  return cy.request({
    method: 'DELETE',
    url: endpoint,
    headers: { Authorization: Cypress.env("token") || "" },
    failOnStatusCode: false
  });
});
