import { CardNewsContainer, DataIcon } from './styles'
import { MdEditCalendar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { dateFormat } from '../../../../../../utils/dateFormat'
import { usePageInformation } from '../../../../../../hooks/UsePageInformation'

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
  const { setNewsPageInformation } = usePageInformation(categorySlug)

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
