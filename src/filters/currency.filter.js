export default function currencyFilter(value, currency = 'RUB') {
  return new Intl.NumberFormat('rru-RU', {
    style: 'currency',
    currency
  }).format(value)
}
