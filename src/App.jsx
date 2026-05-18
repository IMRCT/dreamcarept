import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OurTeamPage from './pages/OurTeamPage'
import ServicesPage from './pages/ServicesPage'
import ConditionsPage from './pages/ConditionsPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import './App.css'

function ConditionAnchorRedirect() {
  const { slug } = useParams()
  return <Navigate replace to={`/conditions#${slug}`} />
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/conditions/:slug" element={<ConditionAnchorRedirect />} />

        {/* Legacy redirects to keep the old DreamCare URLs working */}
        <Route path="/back-pain" element={<Navigate replace to="/conditions#back-pain" />} />
        <Route path="/shoulder-pain" element={<Navigate replace to="/conditions#shoulder-pain" />} />
        <Route path="/knee-pain" element={<Navigate replace to="/conditions#knee-pain" />} />
        <Route path="/ankle-injuries" element={<Navigate replace to="/conditions#ankle-injuries" />} />
        <Route path="/vestibular-and-concussion-recovery" element={<Navigate replace to="/conditions#vestibular" />} />
        <Route path="/hip-pain" element={<Navigate replace to="/conditions#hip-pain" />} />
        <Route path="/book-a-visit" element={<Navigate replace to="/book" />} />
        <Route path="/request-staff" element={<Navigate replace to="/book" />} />
        <Route path="/request-home-pt" element={<Navigate replace to="/book" />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}
