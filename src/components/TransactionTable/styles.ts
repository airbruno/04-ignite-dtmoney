import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
`
interface IPriceProps {
  variant: 'income' | 'outcome'
}

export const TableRow = styled.div<IPriceProps>`
  border-radius: 6px;
  background: ${(props) => props.theme.gray3};
  color: ${(props) => props.theme.gray6};
  padding: 1.25rem 2rem;
  display: grid;
  grid-template-columns: 50% 15% 20% 25%;
  gap: 0.5rem;
  span {
    color: ${(props) =>
      props.variant === 'income' ? props.theme.green : props.theme.red};
  }
`

export const Pager = styled.nav`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2.5rem auto 2.5rem auto;

  button {
    background: ${(props) => props.theme.gray4};
    color: ${(props) => props.theme.gray7};
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    line-height: 1.4;
    font-size: 1rem;
    font-weight: bold;

    &:nth-child(2) {
      background: ${(props) => props.theme['green-dark']};
      color: ${(props) => props.theme.white};
    }
  }
`
