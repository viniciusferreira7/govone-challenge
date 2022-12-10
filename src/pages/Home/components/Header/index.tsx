import { HeaderContainer, DivContainer } from './styles'
import newspaper from '../../../../assets/newspaper.svg'

export function Header() {
  return (
    <HeaderContainer>
      <DivContainer>
        <div>
          <h1>Últimas notícias</h1>
          <h3>Confira as últimas notícias do estado.</h3>
        </div>
        <img src={newspaper} alt="ícone de notícias" />
      </DivContainer>
    </HeaderContainer>
  )
}
