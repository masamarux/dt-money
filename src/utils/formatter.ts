export const dateFormatter = new Intl.DateTimeFormat('pt-Br')

export const shortDateFormatter = new Intl.DateTimeFormat('pt-Br', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
})

export const longDateFormatter = new Intl.DateTimeFormat('pt-Br', {
  day: '2-digit',
  month: 'long',
})

export const priceFormatter = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
})
