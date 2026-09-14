import './styles/global.css';
import { BrowserMockupFrame } from './components/BrowserMockupFrame';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      {/* Subtle Architectural Grid Lines Overlay */}
      <div className="grid-lines-bg" />

      {/* Atmospheric Vignette Backdrop */}
      <div className="vignette-overlay" />

      {/* Desktop Browser Wrapper Frame */}
      <BrowserMockupFrame>
        <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <Navbar />
          <main>
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </BrowserMockupFrame>
    </>
  );
}

export default App;
