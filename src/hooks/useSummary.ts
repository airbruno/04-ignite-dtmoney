import { useContext } from 'react'
import {
  ITransaction,
  TransactionsContext,
} from '../contexts/TransactionsContext'
import { formatCurrency } from '../utils/Formatter'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  function calculateIncome(transactions: ITransaction[]) {
    return transactions.reduce(
      (sum, item) => (item.type === 'income' ? sum + item.value : sum),
      0,
    )
  }

  function calculateOutcome(transactions: ITransaction[]) {
    return transactions.reduce(
      (sum, item) => (item.type === 'outcome' ? sum + item.value : sum),
      0,
    )
  }

  const unformattedIncome = calculateIncome(transactions)
  const unformattedOutcome = calculateOutcome(transactions)
  const unformattedTotal = unformattedIncome - unformattedOutcome

  const income = formatCurrency(unformattedIncome)
  const outcome = formatCurrency(unformattedOutcome)
  const total = formatCurrency(unformattedTotal)

  const summary = {
    income,
    outcome,
    total,
  }

  return summary
}
