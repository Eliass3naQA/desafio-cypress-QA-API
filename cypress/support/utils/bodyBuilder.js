export const usuariosBody = {
  criarUsuario(bodyOverride = {}) {
    return {
      nome: "Elias QA",
      email: `elias_${Date.now()}@gmail.com`,
      password: "123",
      administrador: "true",
      ...bodyOverride
    };
  },

  atualizarUsuario(bodyOverride = {}) {
    return {
      nome: "Elias Atualizado",
      email: `update_${Date.now()}@gmail.com`,
      password: "123",
      administrador: "true",
      ...bodyOverride
    };
  }
};

