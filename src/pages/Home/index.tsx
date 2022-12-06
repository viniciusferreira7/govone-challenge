import { CardNews } from './components/CardNews'
import { Pagination } from './components/Pagination'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardNews />
      <CardNews />
      <Pagination />
    </HomeContainer>
  )
}
