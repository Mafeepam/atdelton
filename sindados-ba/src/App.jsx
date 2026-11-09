import { useState } from 'react'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'

import HeaderNavbar from './components/HeaderNavbar'
import NewsCarousel from './components/NewsCarousel'
import SalaryTable from './components/SalaryTable'

import { noticias, pisosSalariais, perfilSocio } from './data/dados'

/**
 * App
 * Componente orquestrador do portal SINDADOS-BA.
 *
 * Centraliza o estado de autenticação e distribui os dados
 * aos três componentes filhos por meio de props.
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState(null)

  // Login simulado — em produção viria de uma chamada autenticada à API.
  const handleLogin = () => {
    setUserProfile(perfilSocio)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserProfile(null)
  }

  return (
    <>
      <HeaderNavbar
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main id="home">
        {/* Aviso exclusivo para sócios autenticados */}
        {isLoggedIn && (
          <Container className="pt-4">
            <Alert variant="success" className="mb-0" dismissible>
              <Alert.Heading className="h6 mb-1">Área do sócio liberada</Alert.Heading>
              Sua contribuição sindical está em dia. O cartão do Clube de Benefícios já pode ser
              baixado na aba Serviços.
            </Alert>
          </Container>
        )}

        {/* 2. Carrossel de notícias e campanhas */}
        <NewsCarousel noticias={noticias} />

        {/* Chamadas rápidas de serviços */}
        <section className="py-5">
          <Container>
            <h2 className="h3 fw-bold text-primary mb-4">Serviços ao filiado</h2>
            <Row className="g-3">
              {[
                {
                  titulo: 'Assistência jurídica',
                  texto: 'Orientação trabalhista e acompanhamento de processos sem custo para sócios.',
                  acao: 'Agendar atendimento',
                  destino: '#juridico',
                },
                {
                  titulo: 'Convenção coletiva 2026',
                  texto: 'Texto completo das cláusulas de piso, jornada, home office e banco de horas.',
                  acao: 'Baixar documento',
                  destino: '#cct',
                },
                {
                  titulo: 'Cursos e certificações',
                  texto: 'Trilhas de nuvem, dados e segurança com desconto na rede de conveniados.',
                  acao: 'Ver trilhas',
                  destino: '#cursos',
                },
              ].map((servico) => (
                <Col md={6} lg={4} key={servico.titulo}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h5 text-primary">{servico.titulo}</Card.Title>
                      <Card.Text className="text-secondary flex-grow-1">{servico.texto}</Card.Text>
                      <Button variant="outline-primary" href={servico.destino}>
                        {servico.acao}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* 3. Tabela de pisos salariais com filtro e modal */}
        <SalaryTable pisos={pisosSalariais} />

        {/* Chamada de filiação para quem ainda não entrou */}
        {!isLoggedIn && (
          <section id="filiacao" className="bg-dark text-white py-5">
            <Container>
              <Row className="align-items-center g-4">
                <Col lg={8}>
                  <h2 className="h3 fw-bold mb-2">Ainda não é sócio do SINDADOS-BA?</h2>
                  <p className="mb-0 text-white-50">
                    A filiação garante assistência jurídica, acesso ao Clube de Benefícios e voz nas
                    assembleias que definem o piso da sua carreira.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end">
                  <Button variant="success" size="lg" onClick={handleLogin}>
                    Quero me filiar
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </main>

      <footer id="contato" className="bg-primary text-white py-4">
        <Container>
          <Row className="g-3">
            <Col md={6}>
              <h3 className="h6 fw-bold">SINDADOS-BA</h3>
              <p className="small text-white-50 mb-0">
                Sindicato dos Trabalhadores em Tecnologia da Informação do Estado da Bahia.
                <br />
                Av. Tancredo Neves, Salvador — BA · contato@sindados-ba.org.br
              </p>
            </Col>
            <Col md={6} className="text-md-end small text-white-50">
              Portal desenvolvido com React.js e React-Bootstrap.
              <br />
              Atividade acadêmica — Universidade Católica do Salvador, 2026.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default App
