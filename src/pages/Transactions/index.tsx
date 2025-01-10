import { SearchBar } from '../../components/SearchBar'
import { Summary } from '../../components/Summary'
import { TransactionTable } from '../../components/TransactionTable'

export function Transactions() {
  return (
    <>
      <Summary />
      <SearchBar />
      <TransactionTable />
    </>
  )
}
