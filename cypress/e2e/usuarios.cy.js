import usuarios from "../apis/usuarios.api.js";

describe("API - Usuários", () => {

  it("GET - Listar usuários", () => {
    usuarios.listar().then(res => {
      expect(res.status).to.eq(200);
    });
  });

  it("POST - Criar usuário", () => {
    const body = {
      nome: "Elias QA",
      email: `elias_${Date.now()}@gmail.com`,
      password: "123",
      administrador: "true",
    };

    usuarios.criar(body).then(res => {
      expect(res.status).to.eq(201);
    });
  });

});
