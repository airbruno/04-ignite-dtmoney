import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1.5rem;

  input {
    height: 54px;
    width: 100%;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.gray1};
    color: ${(props) => props.theme.gray6};

    padding: 1rem;

    &:focus {
      border: 1px solid ${(props) => props.theme['green-light']};
    }

    &::placeholder {
      color: ${(props) => props.theme.gray5};
      line-height: 1.4;
      font-size: 1rem;
    }
  }

  button {
    height: 54px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    border: 1px solid ${(props) => props.theme['green-light']};
    border-radius: 6px;
    background: ${(props) => props.theme.gray2};
    color: ${(props) => props.theme['green-light']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.green};
    }

    &:disabled {
      opacity: 0.7;
      cursor: wait;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.green};

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
