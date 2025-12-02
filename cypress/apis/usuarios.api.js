import { usuariosBody } from "../support/utils/bodyBuilder";

const baseUrl = "/usuarios";

class UsuariosAPI {

  listar() {
    return cy.apiGet(baseUrl);
  }

  criar(bodyOverride = {}) {
    const body = usuariosBody.criarUsuario(bodyOverride);
    return cy.apiPost(baseUrl, body);
  }

  atualizar(id, bodyOverride = {}) {
  const body = usuariosBody.atualizarUsuario(bodyOverride);
  return cy.apiPut(`${baseUrl}/${id}`, body);
}

  deletar(id) {
    return cy.apiDelete(`${baseUrl}/${id}`);
  }

}

export default new UsuariosAPI();
