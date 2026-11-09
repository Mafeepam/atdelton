import { useState } from 'react'
import { Container } from 'react-bootstrap'
import HeaderNavbar from './components/HeaderNavbar.jsx'
import NewsCarousel from './components/NewsCarousel.jsx'
import SalaryTable from './components/SalaryTable.jsx'
import { demoUserProfile, news, salaries } from './data/portalData.js'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState(null)

  function handleLogin() {
    setUserProfile(demoUserProfile)
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setUserProfile(null)
    setIsLoggedIn(false)
  }

  return (
    <>
      <a className="visually-hidden-focusable skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <HeaderNavbar
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main id="main-content" tabIndex={-1}>
        <Container className="pt-4">
          <h1 className="h3 text-primary">Portal do trabalhador de TI</h1>
          <p className="text-secondary mb-0">
            Atividade acadêmica: notícias, salários e perfil fictícios. O login é uma demonstração.
          </p>
        </Container>

        <NewsCarousel news={news} />
        <SalaryTable salaries={salaries} />

        <section id="membership" className="py-5 border-top" aria-labelledby="membership-title">
          <Container>
            <h2 id="membership-title" className="h4 text-primary">
              Seja sócio
            </h2>
            <p>
              A filiação reúne serviços como orientação trabalhista, convênios de educação e
              benefícios para a categoria de TI.
            </p>
            <p className="text-secondary mb-0">
              Neste exercício, use o botão Login para visualizar o perfil de exemplo e Sair para
              encerrar a simulação. Nenhum cadastro é realizado.
            </p>
          </Container>
        </section>
      </main>

      <footer className="bg-dark text-white py-3">
        <Container>
          <p className="small mb-0">SINDADOS-BA · Atividade acadêmica · UCSal, 2026</p>
        </Container>
      </footer>
    </>
  )
}
