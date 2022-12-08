import { useContext } from 'react'
import { MdEditCalendar } from 'react-icons/md'
import { NewsContext } from '../../../../contexts/NewsContext'
import { dateFormat } from '../../../../utils/dateFormat'

import { CardNewsContainer, DataIcon, SectionContainer } from './styles'

interface CardNewsProps {
  slug: string
  category: string
  title: string
  resume: string
  published: string
  image: string
  imgDescription: string
}

export function CardNews({
  slug,
  category,
  published,
  resume,
  title,
  image,
  imgDescription,
}: CardNewsProps) {
  const { fetchNews, setQueryClear } = useContext(NewsContext)

  async function setNewsPageInformation(slug: string): Promise<void> {
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
