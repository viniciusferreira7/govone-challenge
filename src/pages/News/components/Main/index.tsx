import { useContext, useEffect } from 'react'
import { Line, MainContainer, RelatedContent, SectionContainer } from './styles'
import { CardNews } from './components/CardNews'
import { NewsContext } from '../../../../contexts/NewsContext'

export function Main() {
  const { news, setQueryClear } = useContext(NewsContext)

  useEffect(() => {
    return function cleanup() {
      setQueryClear(true)
    }
  }, [setQueryClear])

  return (
    <MainContainer>
      <img
        src={news && news[0].imagem_destaque_url}
        alt={news && news[0].descricao_imagem}
      />
      <p>Foto: {news && news[0].autor_imagem}</p>
      <SectionContainer>
        <p
          dangerouslySetInnerHTML={{
            __html: news ? news[0].conteudo : '',
          }}
        />
        <span>Categorias: </span>
        <span>{news && news[0].categoria_titulo}</span>
      </SectionContainer>
      <Line />
      <RelatedContent>
        <h2>Conteúdo relacionado</h2>
        <p>Confira as últimas notícias do estado.</p>
        <section>
          <CardNews />
          <CardNews />
          <CardNews />
        </section>
      </RelatedContent>
    </MainContainer>
  )
}
