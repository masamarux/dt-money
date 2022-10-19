import { ThemeProvider } from 'styled-components'
import { SizesProvider } from './contexts/SizesContext'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <SizesProvider>
          <Transactions />
        </SizesProvider>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
