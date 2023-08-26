import { Routes, Route } from 'react-router-dom';
import './App.css';
import TitlePage from '../TitlePage/TitlePage';
import NavBar from '../../components/NavBar';

export default function App() {
  return (
    <div className="App">
      <body className='App-body'>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          {/* <Route path="/about" element={<TitlePage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} /> */}
        </Routes>
      </body>
      <NavBar />
    </div>
  );
}