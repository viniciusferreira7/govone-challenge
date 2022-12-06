import { CardNews } from './components/CardNews'
import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <CardNews />
        <CardNews />
        <Pagination />
      </main>
    </HomeContainer>
  )
}
