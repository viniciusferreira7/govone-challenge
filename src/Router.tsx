import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { News } from './pages/News'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Route>
    </Routes>
  )
}
