import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface ITransaction {
  id?: number
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}

interface TransactionData {
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}

interface ITransactionsContext {
  transactions: ITransaction[]
  getTransactions: (query: string) => Promise<void>
  createTransaction: (data: TransactionData) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContext)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getTransactions(query?: string) {
    try {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function createTransaction(data: TransactionData) {
    const req = {
      description: data.description,
      value: data.value,
      category: data.category,
      type: data.type,
      createdAt: new Date().toDateString(),
    }
    const res = await api.post('transactions', req)
    setTransactions((state) => [data, ...state])
    console.log(res.status)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
