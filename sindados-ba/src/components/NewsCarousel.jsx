import { useState } from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'

export default function NewsCarousel({ news }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="news" className="my-4" aria-labelledby="news-title">
      <Container>
        <h2 id="news-title" className="h4 mb-3">
          Notícias e campanhas
        </h2>
        <Carousel
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          interval={null}
          indicators
          controls
          prevLabel="Notícia anterior"
          nextLabel="Próxima notícia"
          indicatorLabels={news.map((item) => `Mostrar ${item.title}`)}
          className="news-carousel bg-primary text-white"
        >
          {news.map((item, index) => (
            <Carousel.Item
              key={item.id}
              aria-hidden={activeIndex !== index}
              inert={activeIndex !== index}
            >
              <div className="news-slide row align-items-center g-3">
                <div className="col-md-6">
                  <img
                    src={item.image}
                    alt=""
                    className="d-block w-100 rounded"
                    width="1200"
                    height="800"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="h4">{item.title}</h3>
                  <p>{item.description}</p>
                  <Button variant="light" href={item.link}>
                    {item.actionLabel}
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <p className="text-secondary small mt-2 mb-0" role="status">
          Destaque {activeIndex + 1} de {news.length}
        </p>
      </Container>
    </section>
  )
}
