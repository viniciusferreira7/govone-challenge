import { useContext } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import { CardNews } from './components/CardNews'
import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { HomeContainer } from './styles'

export function Home() {
  const { news } = useContext(NewsContext)

  return (
    <HomeContainer>
      <Header />
      <main>
        <Pagination />
      </main>
    </HomeContainer>
  )
}
