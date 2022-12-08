import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { NewsProvider } from './contexts/NewsContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <NewsProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </NewsProvider>
  )
}
