import { useState } from 'react'
import { Carousel, Button, Container } from 'react-bootstrap'

/**
 * NewsCarousel
 * Carrossel de notícias e campanhas do topo da página.
 *
 * Recebe por props o array de notícias (id, titulo, descricao, imagem, link)
 * e controla o slide ativo por estado local (useState), o que permite
 * exibir um contador e reagir à troca de slides.
 *
 * @param {Array} noticias lista de notícias a exibir
 */
function NewsCarousel({ noticias }) {
  const [slideAtivo, setSlideAtivo] = useState(0)

  // Guarda de segurança: sem dados, nada é renderizado.
  if (!noticias || noticias.length === 0) {
    return null
  }

  return (
    <section id="noticias" className="my-4">
      <Container>
        <Carousel
          activeIndex={slideAtivo}
          onSelect={(indice) => setSlideAtivo(indice)}
          indicators
          controls
          fade
          interval={6000}
          className="rounded overflow-hidden shadow"
        >
          {noticias.map((noticia) => (
            <Carousel.Item key={noticia.id}>
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="d-block w-100 carousel-slide"
              />
              <Carousel.Caption className="text-start pb-5">
                <div className="carousel-caption-box">
                  <h2 className="h3 fw-bold">{noticia.titulo}</h2>
                  <p className="d-none d-md-block mb-3">{noticia.descricao}</p>
                  <Button variant="warning" href={noticia.link} className="fw-semibold">
                    {noticia.textoBotao}
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Contador alimentado pelo estado do carrossel */}
        <p className="text-center text-secondary small mt-2 mb-0">
          Destaque {slideAtivo + 1} de {noticias.length} — {noticias[slideAtivo].titulo}
        </p>
      </Container>
    </section>
  )
}

export default NewsCarousel
