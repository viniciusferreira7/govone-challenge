import { Header } from './components/Header'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { NewsContainer } from './styles'

export function News() {
  return (
    <NewsContainer>
      <Header />
      <Nav />
      <Main />
    </NewsContainer>
  )
}
