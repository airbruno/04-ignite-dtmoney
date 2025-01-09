import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.gray1};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: 0;
  border-radius: 6px;
  padding: 1.25rem 0.75rem;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme['green-dark']};
    transition: background-color 0.2s;
  }
`
