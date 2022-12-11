import { useContext } from 'react'
import { NewsContext } from '../../contexts/NewsContext'
import { HomeLoading } from './components/HomeLoading'
import { CardNews } from './components/CardNews'
import { CategorySelection } from './components/CategorySelection'
import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { HomeContainer } from './styles'

export function Home() {
  const { news, loading } = useContext(NewsContext)

  return (
    <HomeContainer>
      <Header />
      <CategorySelection />
      <main>
        {loading ? (
          <HomeLoading />
        ) : (
          news.map((news) => (
            <CardNews
              key={news.id}
              slug={news.slug}
              category={news.categoria_titulo}
              categorySlug={news.categoria_slug}
              title={news.titulo}
              resume={news.resumo}
              published={news.publicado}
              image={news.imagem_destaque_url}
              imgDescription={news.descricao_imagem}
            />
          ))
        )}
        <Pagination />
      </main>
    </HomeContainer>
  )
}
