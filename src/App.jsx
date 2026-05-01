import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Twitch from './components/Twitch';
import CV from './components/CV';
import NotFound from './components/NotFound';
import './App.scss';

function App() {
  return (
    <>
      <Header />
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
        <Route path="/gaming" element={<Twitch />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;