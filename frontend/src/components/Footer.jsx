import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#C9A96E]/10" data-testid="footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <h2 className="font-playfair text-[#C9A96E] text-2xl font-bold tracking-widest uppercase">Charm Thai</h2>
            <p className="text-[#E8D5A3] text-xs tracking-[0.3em] uppercase mt-1">Restaurant · Bath</p>
          </div>
          <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-6">
            Award-winning authentic Thai cuisine in the heart of historic Bath. Serving since 2013.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/charmthaiuk/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]/70 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
              data-testid="footer-instagram" aria-label="Instagram">
              <Instagram size={15} />
            </a>
            <a href="https://www.facebook.com/charmthaiuk/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]/70 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
              data-testid="footer-facebook" aria-label="Facebook">
              <Facebook size={15} />
            </a>
            <a href="https://www.tiktok.com/@charmthaiuk" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]/70 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
              data-testid="footer-tiktok" aria-label="TikTok">
              <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
              </svg>
            </a>
          </div>
          <div className="mt-6 flex gap-3 items-center">
            <img src="https://static.wixstatic.com/media/1d1e7c_16417592a3924b3aa12a13364d76d058~mv1.png" alt="Bath Good Food Award" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://static.wixstatic.com/media/1d1e7c_70cb36d91a414a2b8188f82cbdd02d9f~mv1.jpg" alt="TripAdvisor" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-playfair text-[#C9A96E] text-sm font-bold tracking-widest uppercase mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Menu", path: "/menu" },
              { label: "Private Dining", path: "/private-dining" },
              { label: "What's On", path: "/whats-on" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact & Reserve", path: "/contact" },
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms & Conditions", path: "/terms" },
              { label: "Cookie Policy", path: "/cookies" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-[#F5F0E8]/60 text-sm hover:text-[#C9A96E] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-playfair text-[#C9A96E] text-sm font-bold tracking-widest uppercase mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={15} className="text-[#C9A96E] mt-0.5 shrink-0" />
              <span className="text-[#F5F0E8]/70 text-sm leading-relaxed">2 George Street<br />Bath, BA1 2EH</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="text-[#C9A96E] mt-0.5 shrink-0" />
              <a href="tel:01225481001" className="text-[#F5F0E8]/70 text-sm hover:text-[#C9A96E] transition-colors" data-testid="footer-phone">
                01225 481001
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="text-[#C9A96E] mt-0.5 shrink-0" />
              <a href="mailto:charmthaiuk@gmail.com" className="text-[#F5F0E8]/70 text-sm hover:text-[#C9A96E] transition-colors" data-testid="footer-email">
                charmthaiuk@gmail.com
              </a>
            </li>
            <li className="mt-4">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-[11px] py-2.5 px-5" data-testid="footer-order-btn">
                Order Now
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-playfair text-[#C9A96E] text-sm font-bold tracking-widest uppercase mb-6">Opening Hours</h3>
          <div className="flex items-center gap-2 mb-4">
            <Clock size={14} className="text-[#C9A96E]" />
            <span className="text-[#E8D5A3] text-xs tracking-wider uppercase">Open Every Day</span>
          </div>
          <ul className="space-y-2.5">
            <li className="flex justify-between border-b border-[#262626] pb-2">
              <span className="text-[#F5F0E8]/60 text-sm">Mon – Thu</span>
              <span className="text-[#F5F0E8]/90 text-sm">12:00 – 21:00</span>
            </li>
            <li className="flex justify-between border-b border-[#262626] pb-2">
              <span className="text-[#F5F0E8]/60 text-sm">Friday</span>
              <span className="text-[#F5F0E8]/90 text-sm">12:00 – 22:00</span>
            </li>
            <li className="flex justify-between border-b border-[#262626] pb-2">
              <span className="text-[#F5F0E8]/60 text-sm">Saturday</span>
              <span className="text-[#F5F0E8]/90 text-sm">12:00 – 22:00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-[#F5F0E8]/60 text-sm">Sunday</span>
              <span className="text-[#F5F0E8]/90 text-sm">12:00 – 21:00</span>
            </li>
          </ul>
          <p className="text-[#C9A96E]/70 text-xs mt-4 leading-relaxed">
            Dine in · Takeaway · Delivery via Uber Eats
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A96E]/10 py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#F5F0E8]/40 text-xs tracking-wider">
            &copy; 2026 Charm Thai Restaurant, Bath. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[#F5F0E8]/40 text-xs hover:text-[#C9A96E] transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[#F5F0E8]/40 text-xs hover:text-[#C9A96E] transition-colors">Terms</Link>
            <Link to="/cookies" className="text-[#F5F0E8]/40 text-xs hover:text-[#C9A96E] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
