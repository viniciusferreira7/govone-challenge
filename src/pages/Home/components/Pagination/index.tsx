import { useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { NewsContext } from '../../../../contexts/NewsContext'

import { PageIndicator, PaginationContainer } from './styles'

export function Pagination() {
  const { pageNumbers, fetchNews, setQueryClear } = useContext(NewsContext)

  async function setTheCurrentPageNumber(page: number | null): Promise<void> {
    await fetchNews(page, undefined)
    setQueryClear(false)
  }

  return (
    <PaginationContainer>
      {pageNumbers && (
        <>
          <PageIndicator
            value="Voltar"
            aria-label="Voltar"
            onClick={() => setTheCurrentPageNumber(pageNumbers.current - 1)}
          >
            <IoIosArrowBack />
          </PageIndicator>
          <PageIndicator
            value={`${pageNumbers.previous}`}
            aria-label={`${pageNumbers.previous}`}
            onClick={() => setTheCurrentPageNumber(pageNumbers.previous)}
          >
            <p>{pageNumbers.previous}</p>
          </PageIndicator>
          <PageIndicator
            value={`${pageNumbers.current}`}
            aria-label={`${pageNumbers.current}`}
            onClick={() => setTheCurrentPageNumber(pageNumbers.current)}
          >
            <p>{pageNumbers.current}</p>
          </PageIndicator>
          <PageIndicator
            value={`${pageNumbers.next}`}
            aria-label={`${pageNumbers.next}`}
            onClick={() => setTheCurrentPageNumber(pageNumbers.next)}
          >
            <p>{pageNumbers.next}</p>
          </PageIndicator>
          <PageIndicator
            value="Próximo"
            aria-label="Próximo"
            onClick={() => setTheCurrentPageNumber(pageNumbers.current + 1)}
          >
            <IoIosArrowForward />
          </PageIndicator>
        </>
      )}
    </PaginationContainer>
  )
}
