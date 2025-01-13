import { CaretLeft, CaretRight } from 'phosphor-react'
import { Pager, TableContainer, TableRow } from './styles'

import { useContext } from 'react'
import {
  ITransaction,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import { formatCurrency, brasilianDateFormat } from '../../utils/Formatter'

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <TableContainer>
        {transactions.map((item: ITransaction) => {
          return (
            <TableRow key={item.id} variant={item.type}>
              <p>{item.description}</p>
              <span>{formatCurrency(item.value)}</span>
              <p>{item.category}</p>
              <p>{brasilianDateFormat(item.createdAt)}</p>
            </TableRow>
          )
        })}
      </TableContainer>
      <Pager>
        <CaretLeft size={24} color="#323238" />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <CaretRight size={24} color="#00875f" />
      </Pager>
    </>
  )
}
