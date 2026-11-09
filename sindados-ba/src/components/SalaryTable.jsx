import { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap'
import SalaryDetailsModal from './SalaryDetailsModal.jsx'
import { formatCurrency, formatPercentage } from '../utils/formatters.js'

function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function SalaryTable({ salaries }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSalary, setSelectedSalary] = useState(null)
  const normalizedSearchTerm = normalizeSearchText(searchTerm.trim())
  const filteredSalaries = salaries.filter(
    (salary) =>
      normalizeSearchText(salary.title).includes(normalizedSearchTerm) ||
      normalizeSearchText(salary.level).includes(normalizedSearchTerm),
  )

  return (
    <section id="salaries" aria-labelledby="salary-heading" className="py-5 bg-white">
      <Container>
        <Row className="align-items-end g-3 mb-4">
          <Col lg={7}>
            <h2 id="salary-heading" className="h3 fw-bold text-primary mb-2">
              Pisos salariais da categoria (2026)
            </h2>
            <p className="text-secondary mb-0">
              Valores fictícios para a atividade acadêmica. Não representam uma convenção coletiva.
            </p>
          </Col>
          <Col lg={5}>
            <Form role="search" onSubmit={(event) => event.preventDefault()}>
              <Form.Label htmlFor="salary-search" className="fw-semibold small">
                Filtrar por cargo ou nível
              </Form.Label>
              <InputGroup>
                <Form.Control
                  id="salary-search"
                  type="search"
                  placeholder="Ex.: Desenvolvedor, Júnior, DevOps..."
                  maxLength={100}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <Button
                  type="button"
                  variant="outline-primary"
                  onClick={() => setSearchTerm('')}
                  disabled={searchTerm === ''}
                >
                  Limpar
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Table bordered hover responsive striped className="align-middle salary-table">
          <caption className="text-secondary small">
            <span role="status">
              {filteredSalaries.length} de {salaries.length} cargos exibidos.
            </span>
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
            {filteredSalaries.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-secondary py-4">
                  Nenhum cargo encontrado para <strong>{searchTerm}</strong>.
                </td>
              </tr>
            ) : (
              filteredSalaries.map((salary) => (
                <tr key={salary.id}>
                  <th scope="row" className="fw-semibold">
                    {salary.title}
                  </th>
                  <td className="d-none d-md-table-cell">{salary.level}</td>
                  <td className="text-nowrap">{formatCurrency(salary.minimumSalary)}</td>
                  <td className="d-none d-sm-table-cell">{formatPercentage(salary.increase)}</td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      size="sm"
                      aria-label={`Ver detalhes de ${salary.title}`}
                      onClick={() => setSelectedSalary(salary)}
                    >
                      Ver detalhes
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
      <SalaryDetailsModal salary={selectedSalary} onClose={() => setSelectedSalary(null)} />
    </section>
  )
}

export default SalaryTable
