import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'
import { ITransaction } from '../../pages/Transactions'

interface ISummaryProps {
  transactions: ITransaction[]
}

export function Summary({ transactions }: ISummaryProps) {
  function calculateTotalIncome(transactions: ITransaction[]) {
    return transactions.reduce(
      (sum, item) => (item.type === 'income' ? sum + item.value : sum),
      0,
    )
  }

  function calculateTotalOutcome(transactions: ITransaction[]) {
    return transactions.reduce(
      (sum, item) => (item.type === 'outcome' ? sum + item.value : sum),
      0,
    )
  }

  const totalIncome = calculateTotalIncome(transactions)
  const totalOutcome = calculateTotalOutcome(transactions)
  const result = totalIncome - totalOutcome

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b373" />
        </header>
        <strong>{formatCurrency(totalIncome)}</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{formatCurrency(totalOutcome)}</strong>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{formatCurrency(result)}</strong>
      </div>
    </SummaryContainer>
  )
}
