import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface NewsResults {
  id: number
  slug: string
  titulo: string
  resumo: string
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
interface NewsType {
  count: number
  next: number
  previous: null
  current: number
  query_param: string
  page_size_query: string
  page_size: number
  total_pages: number
  results: NewsResults[]
}

interface NewsContextType {
  news: NewsResults[]
}

export const NewsContext = createContext({} as NewsContextType)

interface NewsProviderProps {
  children: ReactNode
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsResults[]>([])

  async function fetchNews() {
    const response = await api.get('/')

    setNews(response.data.results)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  )
}
