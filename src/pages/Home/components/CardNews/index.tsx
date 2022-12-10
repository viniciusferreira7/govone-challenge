import { MdEditCalendar } from 'react-icons/md'
import { usePageInformation } from '../../../../hooks/UsePageInformation'
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
  const { setNewsPageInformation } = usePageInformation()

  return (
    <CardNewsContainer
      to="/news"
      title="Notícia"
      onClick={() => setNewsPageInformation(slug, categorySlug)}
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
