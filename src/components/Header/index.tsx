import { HeaderContainer } from './styles'
import { ImNewspaper } from 'react-icons/im'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <div>
          <h1>Últimas notícias</h1>
          <h3>Confira as últimas notícias do estado.</h3>
        </div>
        <ImNewspaper />
      </nav>
    </HeaderContainer>
  )
}
