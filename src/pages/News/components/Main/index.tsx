import { useContext, useEffect, useState } from 'react'
import { Line, MainContainer, RelatedContent, SectionContainer } from './styles'
import { CardNews } from './components/CardNews'
import { News, NewsContext } from '../../../../contexts/NewsContext'

export function Main() {
  const { news, setQueryClear, loading } = useContext(NewsContext)
  const [relatedContent, setRelatedContent] = useState<News[]>()

  useEffect(() => {
    if (localStorage.getItem('relatedContent')) {
      setRelatedContent(JSON.parse(`${localStorage.getItem('relatedContent')}`))
    }

    return function cleanup() {
      setQueryClear(true)
    }
  }, [setQueryClear])

  return (
    <MainContainer>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
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
              {relatedContent &&
                relatedContent.map((news) => (
                  <CardNews
                    key={news.id}
                    image={news.imagem_destaque_url}
                    imgDescription={news.descricao_imagem}
                    published={news.publicado}
                    title={news.titulo}
                    category={news.categoria_titulo}
                    categorySlug={news.categoria_slug}
                    slug={news.slug}
                  />
                ))}
            </section>
          </RelatedContent>
        </>
      )}
    </MainContainer>
  )
}
