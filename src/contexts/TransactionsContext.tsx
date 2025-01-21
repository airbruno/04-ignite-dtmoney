import { createContext, ReactNode, useEffect, useState } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../utils/firebase'

export interface ITransaction {
  id: string
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

  async function createTransaction(data: TransactionData) {
    const transactionsRef = collection(db, 'transactions')
    try {
      const id = uuidv4()
      const newTransaction: ITransaction = {
        id,
        description: data.description,
        value: data.value,
        category: data.category,
        type: data.type,
        createdAt: new Date().toDateString(),
      }

      await setDoc(doc(transactionsRef, id), newTransaction)
      console.log('Document written with ID: ', id)
      setTransactions((state) => [...state, newTransaction])
    } catch (e) {
      console.error('Error adding document: ', e)
      alert('Error adding document: ' + e)
    }
  }

  async function getTransactions() {
    const querySnapshot = await getDocs(collection(db, 'transactions'))
    if (querySnapshot.empty) {
      return
    }

    const transactionsFromAPI = querySnapshot.docs.map(
      (item) => item.data() as ITransaction,
    )

    setTransactions(transactionsFromAPI)
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
