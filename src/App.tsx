import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProjectCaseStudy from './pages/ProjectCaseStudy';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Education />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
