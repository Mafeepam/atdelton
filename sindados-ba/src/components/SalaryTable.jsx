import { useState } from 'react'
import { Table, Form, Modal, Button, Container, Badge, InputGroup, Row, Col } from 'react-bootstrap'

/**
 * SalaryTable
 * Painel de consulta aos pisos salariais da categoria de TI (2026).
 *
 * Dois estados controlam o componente:
 *  - busca: texto do filtro em tempo real
 *  - cargoSelecionado: cargo exibido no Modal (null = modal fechado)
 *
 * @param {Array} pisos lista de cargos com piso, reajuste e detalhes
 */
function SalaryTable({ pisos }) {
  const [busca, setBusca] = useState('')
  const [cargoSelecionado, setCargoSelecionado] = useState(null)

  // Formata valores em reais no padrão brasileiro.
  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  // Filtro em tempo real: compara cargo e nível, ignorando caixa e acentos.
  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')

  const pisosFiltrados = pisos.filter((item) => {
    const termo = normalizar(busca.trim())
    if (termo === '') return true
    return normalizar(item.cargo).includes(termo) || normalizar(item.nivel).includes(termo)
  })

  const abrirDetalhes = (cargo) => setCargoSelecionado(cargo)
  const fecharDetalhes = () => setCargoSelecionado(null)

  return (
    <section id="pisos" className="py-5 bg-white">
      <Container>
        <Row className="align-items-end g-3 mb-4">
          <Col lg={7}>
            <h2 className="h3 fw-bold text-primary mb-1">Pisos Salariais da Categoria — 2026</h2>
            <p className="text-secondary mb-0">
              Valores mínimos homologados na convenção coletiva dos trabalhadores de TI da Bahia.
            </p>
          </Col>

          {/* Campo de busca controlado por useState */}
          <Col lg={5}>
            <Form onSubmit={(evento) => evento.preventDefault()}>
              <Form.Label htmlFor="campo-busca" className="fw-semibold small">
                Filtrar por cargo
              </Form.Label>
              <InputGroup>
                <Form.Control
                  id="campo-busca"
                  type="search"
                  placeholder="Ex.: Desenvolvedor, DBA, DevOps..."
                  value={busca}
                  onChange={(evento) => setBusca(evento.target.value)}
                  aria-label="Filtrar cargos pelo nome"
                />
                <Button
                  variant="outline-primary"
                  onClick={() => setBusca('')}
                  disabled={busca === ''}
                >
                  Limpar
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Table bordered hover responsive striped className="align-middle table-sindados">
          <caption className="text-secondary small">
            {pisosFiltrados.length} de {pisos.length} cargos exibidos. Role a tabela na horizontal em
            telas pequenas.
          </caption>
          <thead>
            <tr>
              <th scope="col">Cargo</th>
              <th scope="col" className="d-none d-md-table-cell">
                Nível
              </th>
              <th scope="col">Piso mensal</th>
              <th scope="col" className="d-none d-sm-table-cell">
                Reajuste
              </th>
              <th scope="col" className="text-center">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody>
            {pisosFiltrados.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-secondary py-4">
                  Nenhum cargo encontrado para <strong>{busca}</strong>.
                </td>
              </tr>
            ) : (
              pisosFiltrados.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold">{item.cargo}</td>
                  <td className="d-none d-md-table-cell">
                    <Badge bg="secondary">{item.nivel}</Badge>
                  </td>
                  <td>{formatarMoeda(item.piso)}</td>
                  <td className="d-none d-sm-table-cell text-success fw-semibold">
                    +{item.reajuste.toFixed(1).replace('.', ',')}%
                  </td>
                  <td className="text-center">
                    <Button variant="primary" size="sm" onClick={() => abrirDetalhes(item)}>
                      Ver Detalhes
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>

      {/* Modal de detalhes: aberto quando há um cargo selecionado no estado */}
      <Modal show={cargoSelecionado !== null} onHide={fecharDetalhes} centered size="lg">
        {cargoSelecionado && (
          <>
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title className="h5">{cargoSelecionado.cargo}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row className="g-3 mb-3">
                <Col sm={6}>
                  <div className="border rounded p-3 h-100">
                    <small className="text-secondary d-block">Piso salarial</small>
                    <strong className="h5 text-primary">{formatarMoeda(cargoSelecionado.piso)}</strong>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="border rounded p-3 h-100">
                    <small className="text-secondary d-block">Carga horária</small>
                    <strong className="h6">{cargoSelecionado.cargaHoraria}</strong>
                  </div>
                </Col>
              </Row>

              <dl className="row mb-0">
                <dt className="col-sm-4">Nível</dt>
                <dd className="col-sm-8">{cargoSelecionado.nivel}</dd>

                <dt className="col-sm-4">Código CBO</dt>
                <dd className="col-sm-8">{cargoSelecionado.cbo}</dd>

                <dt className="col-sm-4">Reajuste 2026</dt>
                <dd className="col-sm-8 text-success fw-semibold">
                  +{cargoSelecionado.reajuste.toFixed(1).replace('.', ',')}%
                </dd>

                <dt className="col-sm-4">Atribuições</dt>
                <dd className="col-sm-8">{cargoSelecionado.descricao}</dd>

                <dt className="col-sm-4">Requisitos</dt>
                <dd className="col-sm-8">{cargoSelecionado.requisitos}</dd>

                <dt className="col-sm-4">Benefícios</dt>
                <dd className="col-sm-8">{cargoSelecionado.beneficios}</dd>
              </dl>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={fecharDetalhes}>
                Fechar
              </Button>
              <Button variant="primary" href="#cct">
                Ver cláusula na convenção
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  )
}

export default SalaryTable
