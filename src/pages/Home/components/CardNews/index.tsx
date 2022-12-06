import { MdEditCalendar } from 'react-icons/md'

import { CardNewsContainer, DataIcon, SectionContainer } from './styles'
import plantation from '../../../../assets/plantation.svg'

export function CardNews() {
  return (
    <CardNewsContainer to="/" title="Notícia">
      <div>
        <img src={plantation} alt="foto relacionado a notícias" />
      </div>
      <SectionContainer>
        <h4>agricultura</h4>
        <h2>Produção de grãos da safra 2020/21 deve alcançar...</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sit
          eleifend nibh vestibulum. Sed nunc sit odio ultrices enim mollis a.{' '}
        </p>
        <DataIcon>
          <MdEditCalendar />
          <span>
            <strong>Publicado:</strong> 09 de julho de 2022
          </span>
        </DataIcon>
      </SectionContainer>
    </CardNewsContainer>
  )
}
