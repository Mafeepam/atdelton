const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const percentageFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  signDisplay: 'exceptZero',
})

export function formatCurrency(value) {
  return currencyFormatter.format(value)
}

export function formatPercentage(value) {
  return percentageFormatter.format(value / 100)
}
