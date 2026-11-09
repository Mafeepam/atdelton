import { Navbar, Nav, Container, Button, Badge, NavDropdown } from 'react-bootstrap'

/**
 * HeaderNavbar
 * Barra de navegação responsiva do portal SINDADOS-BA.
 *
 * O estado de autenticação (isLoggedIn / userProfile) é gerenciado no App.jsx
 * e chega aqui por props, junto das funções de login e logout.
 *
 * @param {boolean}  isLoggedIn  indica se o sócio está autenticado
 * @param {object}   userProfile dados do sócio logado (nome, matrícula, categoria)
 * @param {function} onLogin     dispara o login simulado
 * @param {function} onLogout    encerra a sessão
 */
function HeaderNavbar({ isLoggedIn, userProfile, onLogin, onLogout }) {
  return (
    <header>
      <Navbar expand="lg" bg="primary" variant="dark" sticky="top" className="shadow-sm py-3">
        <Container>
          {/* Marca do sindicato */}
          <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
            <span
              className="bg-white text-primary rounded d-inline-flex align-items-center justify-content-center fw-bold"
              style={{ width: 38, height: 38 }}
            >
              SB
            </span>
            <span>
              SINDADOS-BA
              <small className="d-block fw-normal text-white-50" style={{ fontSize: '0.7rem' }}>
                Trabalhadores de TI da Bahia
              </small>
            </span>
          </Navbar.Brand>

          {/* Menu colapsável para telas pequenas */}
          <Navbar.Toggle aria-controls="menu-principal" />

          <Navbar.Collapse id="menu-principal">
            <Nav className="me-auto mt-3 mt-lg-0">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#noticias">Notícias</Nav.Link>
              <Nav.Link href="#pisos">Pisos Salariais</Nav.Link>
              <NavDropdown title="Serviços" id="menu-servicos" menuVariant="light">
                <NavDropdown.Item href="#juridico">Assistência jurídica</NavDropdown.Item>
                <NavDropdown.Item href="#convenios">Convênios</NavDropdown.Item>
                <NavDropdown.Item href="#cursos">Cursos e certificações</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#cct">Convenção coletiva 2026</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>

            {/* Renderização condicional conforme o estado de login */}
            {isLoggedIn ? (
              <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 mt-3 mt-lg-0">
                <span className="text-white small">
                  Olá, <strong>{userProfile.nome}</strong>{' '}
                  <Badge bg="light" text="dark" className="ms-1">
                    {userProfile.categoria}
                  </Badge>
                  <small className="d-block text-white-50">Matrícula {userProfile.matricula}</small>
                </span>
                <Button variant="outline-light" size="sm" onClick={onLogout}>
                  Sair
                </Button>
              </div>
            ) : (
              <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
                <Button variant="light" className="text-primary fw-semibold" onClick={onLogin}>
                  Login
                </Button>
                <Button variant="success" href="#filiacao">
                  Seja Sócio
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Faixa dourada de destaque institucional */}
      <div className="faixa-destaque" />
    </header>
  )
}

export default HeaderNavbar
