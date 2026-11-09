import { Button, Modal } from 'react-bootstrap'
import { formatCurrency, formatPercentage } from '../utils/formatters.js'

function SalaryDetailsModal({ salary, onClose }) {
  return (
    <Modal
      show={salary !== null}
      onHide={onClose}
      aria-labelledby="salary-details-title"
      centered
      size="lg"
    >
      {salary && (
        <>
          <Modal.Header closeButton closeLabel="Fechar">
            <Modal.Title as="h2" id="salary-details-title" className="h5">
              {salary.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <dl className="row mb-0">
              <dt className="col-sm-4">Piso salarial</dt>
              <dd className="col-sm-8">{formatCurrency(salary.minimumSalary)}</dd>
              <dt className="col-sm-4">Carga horária</dt>
              <dd className="col-sm-8">{salary.weeklyHours}</dd>
              <dt className="col-sm-4">Nível</dt>
              <dd className="col-sm-8">{salary.level}</dd>
              <dt className="col-sm-4">Código CBO</dt>
              <dd className="col-sm-8">{salary.occupationCode}</dd>
              <dt className="col-sm-4">Reajuste 2026</dt>
              <dd className="col-sm-8">{formatPercentage(salary.increase)}</dd>
              <dt className="col-sm-4">Atribuições</dt>
              <dd className="col-sm-8">{salary.description}</dd>
              <dt className="col-sm-4">Requisitos</dt>
              <dd className="col-sm-8">{salary.requirements}</dd>
              <dt className="col-sm-4">Benefícios</dt>
              <dd className="col-sm-8">{salary.benefits}</dd>
            </dl>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default SalaryDetailsModal
