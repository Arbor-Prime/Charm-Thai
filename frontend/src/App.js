import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import PrivateDiningPage from "./pages/PrivateDiningPage";
import WhatsOnPage from "./pages/WhatsOnPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiePage from "./pages/CookiePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/private-dining" element={<PrivateDiningPage />} />
          <Route path="/whats-on" element={<WhatsOnPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePage />} />
        </Routes>
        <Footer />
        {/* Mobile Sticky Bottom Bar */}
        <div className="mobile-sticky-bar">
          <a
            href="tel:01225481001"
            className="flex-1 bg-charcoal text-gold-primary flex items-center justify-center gap-2 py-4 font-bold text-sm tracking-widest uppercase border-r border-border"
            data-testid="mobile-call-btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </a>
          <a
            href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=bd69fcc6-b338-4885-b7ed-a9392f1fe277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold-primary text-black flex items-center justify-center gap-2 py-4 font-bold text-sm tracking-widest uppercase"
            data-testid="mobile-order-btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
            </svg>
            Order Now
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
