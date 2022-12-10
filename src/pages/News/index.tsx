import { useContext } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { NewsContainer } from './styles'

export function News() {
  const { news } = useContext(NewsContext)

  return (
    <NewsContainer>
      {news.length > 0 ? (
        <>
          <Header />
          <Nav />
          <Main />
        </>
      ) : (
        <p>carregando...</p>
      )}
    </NewsContainer>
  )
}
