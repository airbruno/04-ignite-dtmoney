import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const SearchFormSchema = z.object({
  search: z.string(),
})

type SearchFormData = z.infer<typeof SearchFormSchema>

export function SearchBar() {
  const { getTransactions } = useContext(TransactionsContext)

  const {
    register,

    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function onSubmit(query: SearchFormData) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const queryString = query.search
    await getTransactions(queryString)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('search')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchBarContainer>
  )
}
