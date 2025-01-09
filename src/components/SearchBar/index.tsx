import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarContainer, SearchButton, SearchInput } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Busque uma transação" />
      <SearchButton>
        <MagnifyingGlass size={20} color="#00B37E" />
        Buscar
      </SearchButton>
    </SearchBarContainer>
  )
}
