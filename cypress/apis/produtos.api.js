// cypress/apis/produtos.api.js

const baseUrl = "/produtos";

class ProdutosAPI {

  listar() {
    return cy.apiGet(baseUrl);
  }

  criar(body) {
    return cy.apiPost(baseUrl, body);
  }

  atualizar(id, body) {
    return cy.apiPut(`${baseUrl}/${id}`, body);
  }

  deletar(id) {
    return cy.apiDelete(`${baseUrl}/${id}`);
  }

}

export default new ProdutosAPI();
