import { useEffect, useState } from 'react'
import { SearchBar } from '../../components/SearchBar'
import { Summary } from '../../components/Summary'
import { TransactionTable } from '../../components/TransactionTable'

const URL = 'http://localhost:3000/transactions'

export interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getTransactions(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    getTransactions(URL).then((data) => setTransactions(data))
  }, [])

  return (
    <>
      <Summary transactions={transactions} />
      <SearchBar />
      <TransactionTable transactions={transactions} />
    </>
  )
}
