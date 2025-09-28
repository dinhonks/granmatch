# GranMatch

### Conectando talentos a oportunidades.

GranMatch é uma plataforma inteligente que busca resolver um problema real: a desconexão entre estudantes e o mercado de trabalho. Nosso objetivo é facilitar o acesso a estágios, empregos e freelas para alunos, ao mesmo tempo que ajudamos empresas a encontrar talentos de forma eficiente, indo além dos currículos tradicionais.

---

### Funcionalidades do Protótipo

Este repositório contém o **protótipo funcional** do GranMatch, desenvolvido para validar a ideia e a experiência de usuário. Ele simula as principais funcionalidades do projeto completo, incluindo:

* **Fluxo de Autenticação:** Cadastro, login e logout simulados.
* **Navegação Fluida:** Navegação interna com rolagem suave (single-page) nos dashboards.
* **Conteúdo Dinâmico:** Listas de vagas e candidatos geradas a partir de dados pré-definidos.
* **Feedback Interativo:** Feedback visual em botões e links de navegação.
* **Responsividade:** Design adaptável para desktop e dispositivos móveis.

---

### Tecnologias Utilizadas

O protótipo foi construído com uma stack de front-end leve e moderna para garantir um desenvolvimento rápido.

* **HTML5:** Estrutura das páginas.
* **CSS3:** Estilização e layout responsivo.
* **JavaScript:** Lógica de navegação e simulação de dados (usando `localStorage`).

---

### Como Visualizar o Protótipo

Você pode acessar o projeto online ou rodá-lo localmente em seu computador.

#### 1. Visualizar Online
O protótipo está publicado e disponível no GitHub Pages:
**[Acesse o GranMatch aqui](https://dinhonks.github.io/granmatch/)**

#### 2. Rodar Localmente
1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.

---

### Estrutura do Projeto

```
/granmatch
|
├── index.html
├── register.html
├── dashboard-aluno.html
├── dashboard-empresa.html
├── vagas.html
├── perfil-aluno.html
├── candidaturas.html
├── style.css
└── app.js
└── README.md
```
### Próximos Passos (Plano de Evolução)

O projeto GranMatch tem um plano de evolução para se tornar uma aplicação completa:

1.  **Backend:** Implementação de um servidor com **Node.js + Express** para gerenciar a lógica de negócio.
2.  **Banco de Dados:** Utilização de **PostgreSQL** para o armazenamento seguro e persistente de dados.
3.  **Funcionalidades Avançadas:** Desenvolvimento de um algoritmo de matching mais robusto, notificação por e-mail e geração de relatórios.