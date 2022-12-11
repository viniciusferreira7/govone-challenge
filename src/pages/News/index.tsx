import { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { NewsLoading } from './components/NewsLoading'
import { NewsContainer } from './styles'

export function News() {
  const { news } = useContext(NewsContext)
  const [loadingTime, setLoadingTime] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setLoadingTime(true)
    }, 1000)

    return function cleanup() {
      clearTimeout(time)
      setLoadingTime(false)
    }
  }, [])

  return (
    <NewsContainer>
      {loadingTime && news.length > 0 ? (
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
