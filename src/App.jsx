import { Navigate, Route, Routes } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import TestimonialsPage from './pages/TestimonialsPage'
import PatientStoriesPage from './pages/PatientStoriesPage'
import FAQPage from './pages/FAQPage'
import ConditionRouter from './pages/ConditionRouter'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/patient-stories" element={<PatientStoriesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/conditions/:slug" element={<ConditionRouter />} />

        {/* Legacy redirects to keep the old DreamCare URLs working */}
        <Route path="/back-pain" element={<Navigate replace to="/conditions/back-pain" />} />
        <Route path="/shoulder-pain" element={<Navigate replace to="/conditions/shoulder-pain" />} />
        <Route path="/knee-pain" element={<Navigate replace to="/conditions/knee-pain" />} />
        <Route path="/ankle-injuries" element={<Navigate replace to="/conditions/ankle-injuries" />} />
        <Route path="/vestibular-and-concussion-recovery" element={<Navigate replace to="/conditions/vestibular" />} />
        <Route path="/hip-pain" element={<Navigate replace to="/conditions/hip-pain" />} />
        <Route path="/book-a-visit" element={<Navigate replace to="/book" />} />
        <Route path="/request-staff" element={<Navigate replace to="/book" />} />
        <Route path="/request-home-pt" element={<Navigate replace to="/book" />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}
