import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'
import { HomePage } from './pages/HomePage'
import { TourPage } from './pages/TourPage'
import { VideosPage } from './pages/VideosPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ThemeSwitcher />
    </BrowserRouter>
  )
}
