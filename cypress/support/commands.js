Cypress.Commands.add('apiLogin', () => {
  return cy.request({
    method: "POST",
    url: "/login",
    body: {
      email: "fulano@qa.com",
      password: "teste"
    },
    failOnStatusCode: false
  }).then((res) => {
    const token = res.body.authorization;
    Cypress.env("token", token);
    return token;
  });
});

Cypress.Commands.add('apiGet', (endpoint) => {
  return cy.request({
    method: 'GET',
    url: endpoint,
    headers: {
      Authorization: Cypress.env("token") || ""
    },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('apiPost', (endpoint, body) => {
  return cy.request({
    method: 'POST',
    url: endpoint,
    body,
    headers: {
      Authorization: Cypress.env("token") || ""
    },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('apiPut', (endpoint, body) => {
  return cy.request({
    method: 'PUT',
    url: endpoint,
    body,
    headers: {
      Authorization: Cypress.env("token") || ""
    },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('apiDelete', (endpoint) => {
  return cy.request({
    method: 'DELETE',
    url: endpoint,
    headers: {
      Authorization: Cypress.env("token") || ""
    },
    failOnStatusCode: false
  });
});