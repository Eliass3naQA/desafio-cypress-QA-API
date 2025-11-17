# Autor: Elias sena silva
# Contato: 11970160720 - elias.sena.elg@gmail.com


# Desafio Cypress QA – Automação de API (Serverest)

Bem-vindo ao meu projeto de automação de testes de API utilizando **Cypress**, seguindo padrões de **clean code**, **PageObject**, **Commands personalizados** e uma arquitetura simples e escalável.

Este projeto foi construído com o objetivo de demonstrar conhecimento técnico em automação de API, organização de pastas, criação de cenários e boas práticas para equipes de QA.

---

# Tecnologias Utilizadas

### **Cypress**

### **cypress-plugin-api**

Utilizado para facilitar requisições API no Cypress (quando configurado).

### **JavaScript**

Padrão limpo e organizado com classes e imports.

### **Serverest.dev API**

API utilizada nos testes: [https://serverest.dev/](https://serverest.dev/)

---

# Estrutura do Projeto

```
INDT_DESAFIO_API/
 ├── cypress/
 │   ├── apis/
 │   │   ├── produtos.api.js
 │   │   └── usuarios.api.js
 │   ├── e2e/
 │   │   ├── produtos.cy.js
 │   │   └── usuarios.cy.js
 │   └── support/
 │       ├── commands.js
 │       └── e2e.js
 ├── cypress.config.js
 └── README.md
```

###  **apis/**

Contém classes com métodos (PageObject da API). Cada arquivo representa um recurso:

* produtos.api.js
* usuarios.api.js

### **e2e/**

Arquivos de testes consumindo os métodos do PageObject.

###  **support/**

Onde ficam os comandos customizados:

* **apiGet**, **apiPost**, **apiPut**, **apiDelete**
* **apiLogin** (gera token automaticamente antes dos testes)

---

# Como Criar Novos Cenários

Criar cenários é simples.

### Escolha o recurso (usuários, produtos...) e abra o arquivo em **apis/**.

Exemplo:

```js
produtos.criar(body)
usuarios.listar()
```

### No arquivo dentro de **e2e/** crie um novo teste:

```js
it("Deve atualizar um produto", () => {
  produtos.atualizar(id, {
    nome: "Novo Produto",
    preco: 99,
  }).then(res => {
    expect(res.status).to.eq(200);
  });
});
```

### O Cypress já injeta automaticamente o token via `apiLogin()` quando necessário.

Isso permite testes limpos, simples e sem repetição de código.

---

# Como Clonar Este Projeto

Abra o terminal e execute:

git clone https://github.com/Eliass3naQA/desafio-cypress-QA-API.git

Entre no diretório:

cd desafio-cypress-QA-API

Instale as dependências:

npm install

npx cypress open

#  Como Criar o Token Automaticamente

O token é gerado pelo comando customizado:


Cypress.Commands.add('apiLogin', () => {
  return cy.request({
    method: "POST",
    url: "/login",
    body: {
      email: "elias_admin_teste@example.com",
      password: "123"
    }
  }).then((res) => {
    Cypress.env("token", res.body.authorization);
  });
});

Ele roda automaticamente no `before()` dos testes de produtos.

#  resumo final

O objetivo deste projeto é demonstrar minha capacidade de estruturar testes de API de forma profissional, utilizando boas práticas e mantendo o código limpo e escalável.

Ele é totalmente modular, fácil de expandir e pronto para ser executado em qualquer máquina.

Caso queira acrescentar novos recursos, basta seguir o mesmo padrão da estrutura atual.

---

TKS. Elias Sena Silva
