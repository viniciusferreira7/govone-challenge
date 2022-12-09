import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { api } from '../lib/axios'

export interface News {
  id: number
  slug: string
  titulo: string
  resumo: string
  conteudo: string
  autor_name: string
  editor_name: string
  publicado: string
  imagem_destaque_url: string
  autor_imagem: string
  descricao_imagem: string
  youtube_videoId: null
  descricao_video: null
  categoria_slug: string
  categoria_icone: string
  categoria_titulo: string
  subtopico_slug: string
  subtopico_icone: string
  subtopico_titulo: string
  orgao_slug: null
  orgao_nome: null
  orgao_sigla: null
  tags_noticia: string
  destaque: true
  created_at: string
  updated_at: string
}
interface AllNews {
  count: number
  next: number | number
  previous: null | number
  current: number
  query_param: string
  page_size_query: string
  page_size: number
  total_pages: number
  results: News[]
}

interface NewsContextType {
  news: News[]
  fetchNews: (
    page?: number | null,
    slug?: string,
    categorySlug?: string,
  ) => Promise<void>
  pageNumbers: AllNews | undefined
  setQueryClear: Dispatch<SetStateAction<boolean>>
  loading: boolean
}

export const NewsContext = createContext({} as NewsContextType)

interface NewsProviderProps {
  children: ReactNode
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<News[]>([])
  const [pageNumbers, setPageNumbers] = useState<AllNews>()
  const [loading, setLoading] = useState(false)
  const [clearQuery, setQueryClear] = useState(true)

  async function fetchNews(
    page?: number | null,
    slug?: string,
    categorySlug?: string,
  ) {
    setLoading(true)

    const response = await api.get('/', {
      params: {
        page,
        slug,
        category_slug: categorySlug,
      },
    })

    setLoading(false)

    setNews(response.data.results)
    setPageNumbers(response.data)
  }

  useEffect(() => {
    if (clearQuery) {
      fetchNews()
    }
  }, [clearQuery])

  return (
    <NewsContext.Provider
      value={{ news, fetchNews, pageNumbers, setQueryClear, loading }}
    >
      {children}
    </NewsContext.Provider>
  )
}
