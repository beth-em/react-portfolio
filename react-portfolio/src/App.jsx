// Import react-router for navigation between pages, add header, footer, aboutme, portfolio, contact and resume
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';  // Import Bulma-based custom styles

// Add function to allow routes of the nav bar to direct users to the different pages e.g. aboutme, portfolio, contact and resume. these will appear in the header section of the page.
function App() {
  return (
    <>
      {/* Header is common across all pages */}
      <Header />

      <div className="container">
        {/* Setting up React Router to navigate between pages */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      {/* Footer is common across all pages */}
      <Footer />
    </>
  );
}

export default App;
