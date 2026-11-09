# Portal SINDADOS-BA — React + Bootstrap

Atividade III — Integração React.js com React-Bootstrap
Universidade Católica do Salvador · Escola de Tecnologias · Engenharia de Software
Professor Elton Figueiredo da Silva

## Como executar (GitHub Codespaces)

1. Suba este projeto para um repositório no GitHub.
2. No repositório, clique em **Code → Codespaces → Create codespace on main**.
3. No terminal do Codespace:

```bash
npm install
npm run dev
```

4. O Codespace abre automaticamente um aviso de porta encaminhada (5173) — clique em
   **Open in Browser**. Se o preview não abrir, use a aba **PORTS** e torne a porta 5173 pública.

> O `vite.config.js` já está com `host: true`, necessário para o preview funcionar no Codespaces.

## Estrutura

```
src/
├── App.jsx                       # Orquestrador: estado de login e distribuição de props
├── main.jsx                      # Entrada da aplicação + import do Bootstrap CSS
├── index.css                     # Paleta institucional e ajustes finos
├── data/
│   └── dados.js                  # Arrays de notícias, pisos salariais e perfil do sócio
└── components/
    ├── HeaderNavbar.jsx          # Navbar colapsável + renderização condicional de login
    ├── NewsCarousel.jsx          # Carousel com indicadores, controles e slide ativo em estado
    └── SalaryTable.jsx           # Tabela responsiva + filtro em tempo real + Modal de detalhes
```

## Como cada requisito foi atendido

### 1. Header & Navbar dinâmica
- `<Navbar expand="lg">` com `Navbar.Toggle` e `Navbar.Collapse` — o menu vira hambúrguer abaixo de 992px.
- Os estados `isLoggedIn` e `userProfile` vivem em `App.jsx` (`useState`) e descem por props.
- Renderização condicional: logado → saudação com nome, badge de categoria e botão **Sair**;
  deslogado → botões **Login** (claro sobre `bg-primary`) e **Seja Sócio** (`btn-success`).

### 2. Carrossel de notícias
- `<Carousel indicators controls fade>` do React-Bootstrap.
- Consome o array `noticias` (campos `id`, `titulo`, `descricao`, `imagem`, `link`) recebido por props.
- 4 slides com transição suave e botão de ação em cada um; o slide ativo é controlado
  por `useState` e alimenta o contador abaixo do carrossel.

### 3. Tabela de pisos salariais
- `<Table bordered hover responsive striped>` — rola na horizontal no celular e esconde
  colunas secundárias com `d-none d-md-table-cell`.
- `<Form.Control type="search">` controlado por `useState` filtra cargo e nível em tempo real,
  ignorando acentuação e caixa.
- Cada linha tem o botão **Ver Detalhes**, que guarda o cargo no estado `cargoSelecionado`
  e abre o `<Modal>` com piso, carga horária, CBO, atribuições, requisitos e benefícios.

### Estilização
Paleta institucional em tons de azul (`bg-primary` sobrescrito para `#0b3d6b`, `bg-dark`,
`text-white`) e espaçamentos do Bootstrap (`py-5`, `my-4`, `g-3`).

## Dependências

- react / react-dom
- bootstrap
- react-bootstrap
- vite (build tool)

## Build de produção

```bash
npm run build
npm run preview
```
