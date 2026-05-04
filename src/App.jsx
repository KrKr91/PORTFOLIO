import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import UniversPerso from './components/UniversPerso';
import CV from './components/CV';
import NotFound from './components/NotFound';
import useScrollToHash from './hooks/useScrollToHash';
import MentionsLegales from './components/MentionsLegales';

function App() {
  useScrollToHash();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <div className="page">
              <Intro />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
          } />
          <Route path="/projet/:id" element={<ProjectDetail />} />
          <Route path="/univers-perso" element={<UniversPerso />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;