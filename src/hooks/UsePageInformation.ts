import { useContext } from 'react'
import { NewsContext } from '../contexts/NewsContext'

export function usePageInformation() {
  const { news, fetchNews, setQueryClear } = useContext(NewsContext)

  function searchRelatedContentAndStore(
    slug: string,
    categorySlug: string | undefined,
  ) {
    if (categorySlug) {
      const relatedContent = news.filter(
        (news) => news.categoria_slug === categorySlug && news.slug !== slug,
      )
      localStorage.setItem('relatedContent', JSON.stringify(relatedContent))
    }
  }

  async function setNewsPageInformation(
    slug: string,
    categorySlug?: string,
  ): Promise<void> {
    searchRelatedContentAndStore(slug, categorySlug)
    await fetchNews(undefined, slug)
    setQueryClear(false)
  }

  async function filterByCategory(categorySlug: string): Promise<void> {
    if (categorySlug === 'sem filtro') {
      setQueryClear(true)
    } else {
      await fetchNews(undefined, undefined, categorySlug)
      setQueryClear(false)
      console.log(news)
    }
  }

  return { setNewsPageInformation, filterByCategory }
}
