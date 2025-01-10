import { CaretLeft, CaretRight } from 'phosphor-react'
import { Pager, TableContainer, TableRow } from './styles'
import { ITransaction } from '../../pages/Transactions'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ITransactionTableProps {
  transactions: ITransaction[]
}

export function TransactionTable({ transactions }: ITransactionTableProps) {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <>
      <TableContainer>
        {transactions.map((item: ITransaction) => {
          return (
            <TableRow key={item.id} variant={item.type}>
              <p>{item.description}</p>
              <span>{formatCurrency(item.value)}</span>
              <p>{item.category}</p>
              <p>{format(item.createdAt, 'P', { locale: ptBR })}</p>
            </TableRow>
          )
        })}
      </TableContainer>
      <Pager>
        <CaretLeft size={24} color="#323238" />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <CaretRight size={24} color="#00875f" />
      </Pager>
    </>
  )
}
