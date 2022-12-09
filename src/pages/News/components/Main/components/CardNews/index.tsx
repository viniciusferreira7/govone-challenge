import { CardNewsContainer, DataIcon } from './styles'
import { MdEditCalendar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { dateFormat } from '../../../../../../utils/dateFormat'
import { NewsContext } from '../../../../../../contexts/NewsContext'
import { useContext } from 'react'

interface CardNewsProps {
  image: string
  imgDescription: string
  category: string
  published: string
  title: string
  slug: string
  categorySlug: string
}

export function CardNews({
  image,
  imgDescription,
  category,
  published,
  title,
  slug,
  categorySlug,
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
    <CardNewsContainer>
      <img src={image} alt={imgDescription} />
      <div>
        <p>{category}</p>
        <DataIcon>
          <MdEditCalendar />
          <span>{dateFormat(published)}</span>
        </DataIcon>
      </div>
      <div>
        <h2>{title}</h2>
        <NavLink
          to="/news"
          title="Notícia"
          onClick={() => setNewsPageInformation(slug)}
        >
          continue lendo
        </NavLink>
      </div>
    </CardNewsContainer>
  )
}
