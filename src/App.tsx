import './styles/global.css';
import { BrowserMockupFrame } from './components/BrowserMockupFrame';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      {/* Custom Inertia Crosshair Cursor */}
      <CustomCursor />

      {/* Atmospheric Vignette Backdrop */}
      <div className="vignette-overlay" />

      {/* 12-Column Grid Lines Overlay */}
      <GridOverlay />

      {/* Desktop Browser Screenshot Mockup Frame Wrapper */}
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
