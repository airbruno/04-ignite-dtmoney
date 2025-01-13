import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function brasilianDateFormat(date: string) {
  return format(date, 'P', { locale: ptBR })
}
