import { useContext } from 'react'
import { NewsContext } from '../../../../contexts/NewsContext'
import { dateFormat } from '../../../../utils/dateFormat'
import { HeaderContainer, DivContainer } from './styles'

export function Header() {
  const { news } = useContext(NewsContext)

  return (
    <HeaderContainer>
      <DivContainer>
        <h4>{news && news[0].categoria_titulo}</h4>
        <h1>{news && news[0].titulo}</h1>
        <p>
          <strong>Autor:</strong> {news && news[0].autor_name}
        </p>
        <p>
          <strong>Publicado em:</strong>{' '}
          {news && dateFormat(news[0].created_at)}
        </p>
      </DivContainer>
    </HeaderContainer>
  )
}
