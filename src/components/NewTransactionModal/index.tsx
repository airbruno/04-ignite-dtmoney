import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  RadioButton,
  TransactionType,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const ModalFormSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export type ModalFormData = z.infer<typeof ModalFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ModalFormData>({
    resolver: zodResolver(ModalFormSchema),
  })

  async function handleCreateTransaction({
    description,
    category,
    value,
    type,
  }: ModalFormData) {
    await createTransaction({
      description,
      category,
      value,
      type,
      createdAt: new Date().toDateString(),
    })
    reset()
  }

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

          <form onSubmit={handleSubmit(handleCreateTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              {...register('value', { valueAsNumber: true })}
            />
            <span>{errors.value?.message}</span>
            <input
              type="text"
              placeholder="Categoria"
              {...register('category')}
            />
            <Controller
              name="type"
              control={control}
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <RadioButton value="income" variant="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </RadioButton>

                    <RadioButton value="outcome" variant="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </RadioButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  )
}
