import produtos from "../apis/produtos.api.js";

describe("Produtos API", () => {

  before(() => {
    cy.apiLogin(); 
  });

  it("Criar produto", () => {
    produtos.criar({
      nome: "Produto Teste Elias",
      preco: 120,
      descricao: "Produto criado com token automático",
      quantidade: 10
    }).then(res => {
      expect(res.status).to.eq(201);
    });
  });

});
