import { useContext } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { NewsLoading } from './components/NewsLoading'
import { NewsContainer } from './styles'

export function News() {
  const { news } = useContext(NewsContext)

  return (
    <NewsContainer>
      {news.length >= 1 ? (
        <>
          <Header />
          <Nav />
          <Main />
        </>
      ) : (
        <NewsLoading />
      )}
    </NewsContainer>
  )
}
