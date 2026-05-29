import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import LiveChatWidget from './components/LiveChatWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import RadiologyPage from './pages/RadiologyPage';
import VeterinaryPage from './pages/VeterinaryPage';
import ProDigiHealthPage from './pages/ProDigiHealthPage';
import GlobalPresencePage from './pages/GlobalPresencePage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ComparisonPage from './pages/ComparisonPage';
import Product3DViewerPage from './pages/Product3DViewerPage';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowCookieConsent(false);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-['Inter',sans-serif]">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#003366] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/radiology" element={<RadiologyPage />} />
            <Route path="/products/veterinary" element={<VeterinaryPage />} />
            <Route path="/products/prodigi-health" element={<ProDigiHealthPage />} />
            <Route path="/global-presence" element={<GlobalPresencePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/tools/compare" element={<ComparisonPage />} />
            <Route path="/tools/3d-viewer" element={<Product3DViewerPage />} />
          </Routes>
        </main>
        <Footer />
        {showCookieConsent && <CookieConsent onAccept={handleCookieAccept} />}
        <LiveChatWidget />
      </div>
    </Router>
  );
}

export default App;
