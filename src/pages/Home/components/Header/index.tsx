import { HeaderContainer, NavContainer } from './styles'
import { ImNewspaper } from 'react-icons/im'

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <div>
          <h1>Últimas notícias</h1>
          <h3>Confira as últimas notícias do estado.</h3>
        </div>
        <ImNewspaper />
      </NavContainer>
    </HeaderContainer>
  )
}
