import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  color: ${(props) => props.theme.gray7};

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: ${(props) => props.theme.gray4};
    border-radius: 6px;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    &:last-child {
      background: ${(props) => props.theme['green-dark']};
    }

    header {
      display: flex;
      justify-content: space-between;
    }
  }

  span {
    color: ${(props) => props.theme.gray6};
  }

  strong {
    font-size: 2rem;
    line-height: 1.4;
    font-weight: bold;
  }
`
