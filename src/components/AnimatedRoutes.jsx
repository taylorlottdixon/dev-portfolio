import { Routes, Route } from 'react-router-dom';
import TitlePage from '../pages/TitlePage/TitlePage';
import SummaryPage from '../pages/SummaryPage/SummaryPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import SkillsPage from '../pages/SkillsPage/SkillsPage';
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage';
import ContactPage from '../pages/ContactPage/ContactPage';
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<TitlePage />} />
          <Route path="/about" element={<SummaryPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}