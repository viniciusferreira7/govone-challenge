import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { NewsContainer } from './styles'

export function News() {
  return (
    <NewsContainer>
      <Header />
      <Nav />
      News
    </NewsContainer>
  )
}
