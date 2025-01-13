import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background: ${(props) => props.theme.gray2};

  div {
    display: flex;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  input {
    height: 54px;
    width: 100%;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.gray1};
    color: ${(props) => props.theme.gray6};
    line-height: 1.4;
    font-size: 1rem;

    padding: 1rem;

    &:focus {
      border: 1px solid ${(props) => props.theme['green-light']};
    }

    &::placeholder {
      color: ${(props) => props.theme.gray5};
      line-height: 1.4;
      font-size: 1rem;
    }

    &:first-child {
      margin-top: 2rem;
    }
  }

  button[type='submit'] {
    background: ${(props) => props.theme.green};
    color: ${(props) => props.theme.white};
    height: 58px;
    border: 0;
    border-radius: 6px;
    padding: 1.25rem 0.75rem;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.6;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
      background: ${(props) => props.theme['green-light']};
      transition: background-color 0.2s;
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)``

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  margin-right: -1.5rem;
  margin-top: -1.5rem;

  svg {
    color: ${(props) => props.theme.gray5};
  }
  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }

  &:not(:disabled):hover,
  &:focus {
    svg {
      color: ${(props) => props.theme.gray6};
    }
  }
`

interface IRadioButtonProps {
  variant: 'income' | 'outcome'
}

export const RadioButton = styled(RadioGroup.Item)<IRadioButtonProps>`
  height: 58px;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  line-height: 1.6;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.25rem;

  background: ${(props) => props.theme.gray3};
  color: ${(props) => props.theme.gray6};

  svg {
    color: ${(props) =>
      props.variant === 'income' ? props.theme.green : props.theme.red};
  }

  &:not([data-state='checked']):hover,
  &:not([data-state='checked']):focus {
    background: ${(props) => props.theme.gray4};
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-dark']
        : props.theme['red-dark']};
    color: ${(props) => props.theme.white};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
