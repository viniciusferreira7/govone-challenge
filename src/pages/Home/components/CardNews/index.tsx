import { MdEditCalendar } from 'react-icons/md'

import { CardNewsContainer, DataIcon, SectionContainer } from './styles'

interface CardNewsProps {
  category: string
  title: string
  resume: string
  published: string
  image: string
  imgDescription: string
}

export function CardNews({
  category,
  published,
  resume,
  title,
  image,
  imgDescription,
}: CardNewsProps) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  const date = new Date(published).toLocaleDateString(undefined, options)

  return (
    <CardNewsContainer to="/news" title="Notícia">
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
            <strong>Publicado:</strong> {date}
          </span>
        </DataIcon>
      </SectionContainer>
    </CardNewsContainer>
  )
}
