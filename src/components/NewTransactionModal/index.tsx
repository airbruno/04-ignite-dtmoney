import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  RadioButton,
  TransactionType,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <div>
            <Dialog.Title>Nova transação</Dialog.Title>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </div>

          <form action="">
            <input type="text" name="Descrição" placeholder="Descrição" />
            <input type="number" name="Preço" placeholder="Preço" />
            <input type="text" name="Categoria" placeholder="Categoria" />

            <TransactionType>
              <RadioButton value="income" variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </RadioButton>

              <RadioButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </RadioButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  )
}
