import { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

export default function HeaderNavbar({ isLoggedIn, userProfile, onLogin, onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false)

  function handleLogin() {
    onLogin()
    setIsExpanded(false)
  }

  function handleLogout() {
    onLogout()
    setIsExpanded(false)
  }

  return (
    <header>
      <Navbar
        expand="lg"
        bg="primary"
        data-bs-theme="dark"
        className="py-3"
        expanded={isExpanded}
        onToggle={setIsExpanded}
        onSelect={() => setIsExpanded(false)}
        aria-label="Navegação principal"
      >
        <Container>
          <Navbar.Brand href="#main-content" onClick={() => setIsExpanded(false)}>
            SINDADOS-BA
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="main-navigation"
            aria-expanded={isExpanded}
            label="Alternar navegação"
          />
          <Navbar.Collapse id="main-navigation">
            <Nav className="me-auto my-3 my-lg-0">
              <Nav.Link href="#main-content">Início</Nav.Link>
              <Nav.Link href="#news">Notícias</Nav.Link>
              <Nav.Link href="#salaries">Pisos salariais</Nav.Link>
            </Nav>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className="text-white small" role="status">
                {isLoggedIn && (
                  <>
                    Olá, <strong>{userProfile.name}</strong>
                  </>
                )}
              </span>
              {isLoggedIn ? (
                <Button variant="outline-light" onClick={handleLogout}>
                  Sair
                </Button>
              ) : (
                <>
                  <Button variant="light" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button variant="success" href="#membership" onClick={() => setIsExpanded(false)}>
                    Seja Sócio
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
