import usuarios from "../apis/usuarios.api"

describe("API - Usuários", () => {

  beforeEach(() => {
    cy.apiLogin();
  });

  it("GET - Deve listar usuários com sucesso", () => {
    usuarios.listar().then(res => {
      expect(res.status).to.eq(200);
    });
  });

  it("POST - Deve criar usuário com sucesso", () => {
    usuarios.criar().then(res => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("message", "Cadastro realizado com sucesso");
    });
  });

  it("PUT - Deve atualizar usuário", () => {
    usuarios.criar().then(res => {
      const id = res.body._id;

      usuarios.atualizar(id, { nome: "Elias Atualizado" }).then(updateRes => {
        expect(updateRes.status).to.eq(200);
      });
    });
  });

  it("DELETE - Deve deletar usuário", () => {
    usuarios.criar().then(res => {
      const id = res.body._id;

      usuarios.deletar(id).then(deleteRes => {
        expect(deleteRes.status).to.eq(200);
      });
    });
  });

});
