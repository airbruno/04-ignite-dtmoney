import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './contexts/TransactionsContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
