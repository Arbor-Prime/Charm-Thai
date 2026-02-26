import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Private Dining", path: "/private-dining" },
    { label: "What's On", path: "/whats-on" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        data-testid="navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#0A0A0A] border-b border-[#C9A96E]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" data-testid="nav-logo">
            <span className="font-playfair text-[#C9A96E] text-xl font-bold tracking-widest uppercase">Charm Thai</span>
            <span className="text-[#E8D5A3] text-[9px] tracking-[0.3em] uppercase">Restaurant · Bath</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-").replace("'", "")}`}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#C9A96E]"
                    : "text-[#F5F0E8]/70 hover:text-[#C9A96E]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-outline-gold text-[11px] py-2.5 px-5"
              data-testid="nav-book-btn"
            >
              Book a Table
            </Link>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[11px] py-2.5 px-5"
              data-testid="nav-order-btn"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            data-testid="nav-hamburger"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          data-testid="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-playfair text-2xl tracking-widest uppercase transition-colors ${
                isActive(link.path) ? "text-[#C9A96E]" : "text-[#F5F0E8] hover:text-[#C9A96E]"
              }`}
              data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 w-48">
            <Link to="/contact" className="btn-outline-gold text-center text-xs py-3" data-testid="mobile-book-btn">Book a Table</Link>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-center text-xs py-3" data-testid="mobile-order-btn-nav">Order Now</a>
          </div>
        </div>
      )}
    </>
  );
}
