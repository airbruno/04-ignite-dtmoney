import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b373" />
        </header>
        <strong>R$ 20.000,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 10.000,00</strong>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 10.000,00</strong>
      </div>
    </SummaryContainer>
  )
}
