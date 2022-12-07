import { CardNewsContainer, DataIcon } from './styles'
import image2 from '../../../../../../assets/image2.svg'
import { MdEditCalendar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
export function CardNews() {
  return (
    <CardNewsContainer>
      <img src={image2} alt="image" />
      <div>
        <p>Agrícultura</p>
        <DataIcon>
          <MdEditCalendar />
          <span>09 de julho de 2022</span>
        </DataIcon>
      </div>
      <div>
        <h2>Projeção indica crescimento da soja e milho safra 22/23 no MS</h2>
        <NavLink to="/news" title="Notícia">
          continue lendo
        </NavLink>
      </div>
    </CardNewsContainer>
  )
}
