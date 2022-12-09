import { useContext } from 'react'
import { MdEditCalendar } from 'react-icons/md'
import { NewsContext } from '../../../../contexts/NewsContext'
import { dateFormat } from '../../../../utils/dateFormat'

import { CardNewsContainer, DataIcon, SectionContainer } from './styles'

interface CardNewsProps {
  slug: string
  category: string
  categorySlug: string
  title: string
  resume: string
  published: string
  image: string
  imgDescription: string
}

export function CardNews({
  slug,
  category,
  categorySlug,
  published,
  resume,
  title,
  image,
  imgDescription,
}: CardNewsProps) {
  const { news, fetchNews, setQueryClear } = useContext(NewsContext)

  function searchRelatedContent(slug: string, categorySlug: string) {
    const relatedContent = news.filter(
      (news) => news.categoria_slug === categorySlug && news.slug !== slug,
    )
    localStorage.setItem('relatedContent', JSON.stringify(relatedContent))
  }

  async function setNewsPageInformation(slug: string): Promise<void> {
    searchRelatedContent(slug, categorySlug)

    await fetchNews(undefined, slug)
    setQueryClear(false)
  }

  return (
    <CardNewsContainer
      to="/news"
      title="Notícia"
      onClick={() => setNewsPageInformation(slug)}
    >
      <div>
        <img src={image} alt={imgDescription} />
      </div>
      <SectionContainer>
        <h4>{category}</h4>
        <h2>{title}</h2>
        <p>{resume}</p>
        <DataIcon>
          <MdEditCalendar />
          <span>
            <strong>Publicado:</strong> {dateFormat(published)}
          </span>
        </DataIcon>
      </SectionContainer>
    </CardNewsContainer>
  )
}
