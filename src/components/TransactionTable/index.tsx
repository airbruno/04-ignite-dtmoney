import { CaretLeft, CaretRight } from 'phosphor-react'
import { Pager, TableContainer, TableRow } from './styles'

export function TransactionTable() {
  return (
    <>
      <TableContainer>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="outcome">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
        <TableRow variant="income">
          <p>Desenvolvimento de site</p>
          <span>R$ 12.000,00</span>
          <p>Venda</p>
          <p>13/04/2023</p>
        </TableRow>
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
