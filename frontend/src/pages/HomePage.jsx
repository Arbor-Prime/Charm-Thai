import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Phone, ChevronRight, Utensils, ShoppingBag, Truck } from "lucide-react";

const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";
const UBEREATS_URL = "https://www.ubereats.com/gb/store/charm-thai/oD4ILZtRQ8aa7e-WKP6emQ";

const WIXBASE = "https://static.wixstatic.com/media";
const IMAGES = {
  hero: `${WIXBASE}/1d1e7c_d01517ae269b4c8f8090d8791874e7a2~mv2_d_5874_3921_s_4_2.jpg`,
  interior: `${WIXBASE}/1d1e7c_8a19df23ae3540118a7ceda4b0808709~mv2_d_5350_3567_s_4_2.jpg`,
  greenCurry: `${WIXBASE}/1d1e7c_0cb3c665541048b792372c41d9511a83~mv2.jpeg`,
  roastedDuck: `${WIXBASE}/1d1e7c_11767ad9d1d440da8f0a599a2a6db78b~mv2_d_3018_2184_s_2.jpg`,
  bellyPork: `${WIXBASE}/1d1e7c_9a2daf3917ae4951a382dce1d814329f~mv2_d_3024_2508_s_4_2.jpg`,
  noodle: `${WIXBASE}/1d1e7c_5717435c55ef4dbf90259daaa00add4d~mv2_d_3024_2400_s_4_2.jpg`,
};

const SIGNATURE_DISHES = [
  { name: "Pad Thai", thai: "ผัดไทย", desc: "Classic tamarind noodles with prawns, beansprouts & ground peanuts.", price: "£15.50", img: IMAGES.hero, spice: 1 },
  { name: "Kang Keaw", thai: "แกงเขียวหวาน", desc: "Green curry with chicken, bamboo shoots, courgette & Thai basil.", price: "£15.95", img: IMAGES.greenCurry, spice: 2 },
  { name: "Khao Rad Ped", thai: "ข้าวราดเป็ด", desc: "Roasted duck with homemade gravy, cucumber & half-boiled egg.", price: "£17.95", img: IMAGES.roastedDuck, spice: 1 },
  { name: "Pad Kra Pow", thai: "กระเพาหมูกรอบ", desc: "Crispy pork belly with Kra Pow sauce, chilli, beans & basil.", price: "£16.50", img: IMAGES.bellyPork, spice: 3 },
];

const REVIEWS = [
  { text: "I am Thai and this is the best authentic Thai restaurant in Bath. The food tastes like home.", author: "Natchaya P.", platform: "Google" },
  { text: "The Massaman curry was exceptional, perfectly balanced. We've been coming here for 8 years.", author: "Sarah M.", platform: "Google" },
  { text: "The interior is stunning — gold leaf, carved panels, an atmosphere of great calm. Food to match.", author: "James W.", platform: "TripAdvisor" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SpiceLevel({ level }) {
  if (!level) return <span className="text-[#F5F0E8]/30 text-[10px]">Mild</span>;
  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3].map(i => (
        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= level ? "bg-red-500" : "bg-[#333]"}`} />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A]">

      {/* ===== HERO — 75svh mobile, content anchored bottom ===== */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "75svh" }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/20" />

        <div className="relative z-10 px-5 pb-8 pt-28 md:px-8 md:pb-16 max-w-5xl mx-auto w-full">
          <p className="font-script text-[#E8D5A3] text-2xl md:text-3xl mb-2 animate-fade-in">Authentic Thai</p>
          <h1 className="font-playfair text-[2rem] leading-[1.1] sm:text-4xl lg:text-6xl font-bold text-[#F5F0E8] uppercase tracking-wider mb-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            The Heart of <span className="text-[#C9A96E]">Bath</span>
          </h1>
          <p className="text-[#F5F0E8]/70 text-sm md:text-base tracking-wide mb-6 max-w-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Award-winning Thai flavours since 2013 · 2 George Street
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-center text-sm py-4 sm:py-3 sm:px-8 flex-1 sm:flex-none" data-testid="hero-order-btn">
              Order Now
            </a>
            <Link to="/contact" className="btn-outline-gold text-center text-sm py-4 sm:py-3 sm:px-8 flex-1 sm:flex-none" data-testid="hero-book-btn">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[#111] border-y border-[#C9A96E]/10 py-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 min-w-max mx-auto text-xs md:text-sm">
          <div className="flex items-center gap-1.5">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={11} className="fill-[#C9A96E] text-[#C9A96E]" />)}</div>
            <span className="text-[#F5F0E8]/80 font-medium">4.5</span>
            <span className="text-[#F5F0E8]/40">Google</span>
          </div>
          <div className="w-px h-4 bg-[#C9A96E]/20" />
          <span className="text-[#C9A96E] font-medium tracking-wide">Bath Good Food Award</span>
          <div className="w-px h-4 bg-[#C9A96E]/20" />
          <span className="text-[#F5F0E8]/50 tracking-wide">Travellers' Choice</span>
        </div>
      </section>

      {/* ===== ACTION TILES — 3 columns, thumb-friendly ===== */}
      <section className="px-4 md:px-8 py-8 md:py-12 bg-[#0A0A0A]" data-testid="action-tiles">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 md:gap-5">
          {[
            { icon: Utensils, label: "Dine In", sub: "Book a table", href: "/contact", isLink: true, accent: true },
            { icon: ShoppingBag, label: "Collection", sub: "Order direct", href: ORDER_URL, isLink: false },
            { icon: Truck, label: "Delivery", sub: "Uber Eats", href: UBEREATS_URL, isLink: false },
          ].map((tile) => {
            const inner = (
              <div className={`flex flex-col items-center text-center p-4 md:p-8 border transition-all duration-300 h-full ${tile.accent ? "border-[#C9A96E]/30 bg-[#C9A96E]/5 hover:bg-[#C9A96E]/10" : "border-[#262626] bg-[#111] hover:border-[#C9A96E]/20"}`}>
                <tile.icon size={24} className="text-[#C9A96E] mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="text-[#F5F0E8] text-xs md:text-base font-bold tracking-wide uppercase">{tile.label}</span>
                <span className="text-[#F5F0E8]/40 text-[10px] md:text-xs mt-1">{tile.sub}</span>
              </div>
            );
            return tile.isLink ? (
              <Link key={tile.label} to={tile.href}>{inner}</Link>
            ) : (
              <a key={tile.label} href={tile.href} target="_blank" rel="noopener noreferrer">{inner}</a>
            );
          })}
        </div>
      </section>

      {/* ===== SIGNATURE DISHES — horizontal scroll mobile, grid desktop ===== */}
      <section className="py-10 md:py-20 bg-[#0A0A0A]" data-testid="signature-dishes-section">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-6 md:mb-10 px-5 md:px-8">
              <div>
                <p className="font-script text-[#C9A96E] text-xl md:text-2xl mb-1">Our Favourites</p>
                <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-wider">Signature Dishes</h2>
              </div>
              <Link to="/menu" className="hidden md:flex items-center gap-1 text-[#C9A96E] text-xs tracking-widest uppercase hover:text-[#E8D5A3] transition-colors">
                Full Menu <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory pl-5 pr-5 md:px-8 scrollbar-hide">
            {SIGNATURE_DISHES.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 80}>
                <div className="min-w-[70vw] sm:min-w-[44vw] md:min-w-0 snap-start group overflow-hidden bg-[#111] border border-[#262626] hover:border-[#C9A96E]/20 transition-colors" data-testid={`dish-card-${i}`}>
                  <div className="relative h-44 md:h-40 overflow-hidden">
                    <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3"><SpiceLevel level={dish.spice} /></div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-playfair text-base font-bold text-[#F5F0E8] leading-tight">{dish.name}</h3>
                      <span className="text-[#C9A96E] font-bold text-sm ml-2 shrink-0">{dish.price}</span>
                    </div>
                    <p className="text-[#C9A96E]/50 text-xs mb-2 font-script">{dish.thai}</p>
                    <p className="text-[#F5F0E8]/50 text-xs leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden mt-6 text-center">
            <Link to="/menu" className="btn-outline-gold text-xs py-3 px-10 inline-block">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT — brief + interior photo ===== */}
      <section className="py-12 md:py-24 bg-[#111] border-y border-[#C9A96E]/10" data-testid="about-section">
        <div className="px-5 md:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-script text-[#C9A96E] text-xl mb-1">Since 2013</p>
                <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-wider mb-5">
                  Charm Thai <span className="text-[#C9A96E]">Restaurant</span>
                </h2>
                <p className="text-[#F5F0E8]/60 text-sm md:text-base leading-relaxed mb-4">
                  Located in the heart of Bath, we serve the finest authentic aromatic Thai cuisine. Our award-winning kitchen crafts dishes using fresh herbs, roots and toasted spices.
                </p>
                <p className="text-[#F5F0E8]/60 text-sm md:text-base leading-relaxed mb-6">
                  From classic Pad Thai to our signature crispy pork, every dish is prepared with passion by our expert chefs.
                </p>
                <div className="flex gap-8 mb-6">
                  {[{ num: "15+", label: "Years" }, { num: "650+", label: "Reviews" }, { num: "4.5★", label: "Google" }].map(s => (
                    <div key={s.label} className="text-center">
                      <div className="font-playfair text-xl md:text-2xl font-bold text-[#C9A96E]">{s.num}</div>
                      <div className="text-[#F5F0E8]/40 text-[10px] tracking-wider uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/menu" className="btn-gold text-xs py-3 px-8">Explore Our Menu</Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <img src={IMAGES.interior} alt="Charm Thai Restaurant interior" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-12 md:py-20 bg-[#0A0A0A]" data-testid="reviews-section">
        <div className="px-5 md:px-8 max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-6 md:mb-10">
              <div>
                <p className="font-script text-[#C9A96E] text-xl mb-1">Guest Reviews</p>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#F5F0E8] uppercase tracking-wider">What People Say</h2>
              </div>
              <div className="flex items-center gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />)}</div>
            </div>
          </Reveal>
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border border-[#262626] bg-[#111] p-5 md:p-6">
                  <p className="text-[#F5F0E8]/70 text-sm leading-relaxed italic mb-4">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A96E] text-xs font-bold">{r.author}</span>
                    <span className="text-[#F5F0E8]/30 text-[10px] uppercase tracking-widest">{r.platform}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIVATE DINING ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundImage: `url(${IMAGES.interior})`, backgroundSize: "cover", backgroundPosition: "center" }} data-testid="private-dining-section">
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="relative z-10 px-5 md:px-8 max-w-lg mx-auto text-center">
          <Reveal>
            <p className="font-script text-[#C9A96E] text-xl mb-2">Exclusive</p>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-wider mb-4">Private Dining</h2>
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-6">
              Host up to 30 guests in our private function room with a bespoke set menu crafted by our award-winning chef.
            </p>
            <Link to="/private-dining" className="btn-gold text-xs py-3 px-8">Enquire Now</Link>
          </Reveal>
        </div>
      </section>

      {/* ===== FIND US ===== */}
      <section className="py-12 md:py-20 bg-[#111] border-t border-[#C9A96E]/10" data-testid="find-us-section">
        <div className="px-5 md:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#F5F0E8] uppercase tracking-wider mb-6">
                  Find <span className="text-[#C9A96E]">Us</span>
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-center">
                    <MapPin size={16} className="text-[#C9A96E] shrink-0" />
                    <p className="text-[#F5F0E8]/80 text-sm">2 George Street, Bath, BA1 2EH</p>
                  </div>
                  <a href="tel:01225481001" className="flex gap-3 items-center group">
                    <Phone size={16} className="text-[#C9A96E] shrink-0" />
                    <span className="text-[#F5F0E8]/80 text-sm group-hover:text-[#C9A96E] transition-colors">01225 481001</span>
                  </a>
                </div>
                <div className="border-t border-[#262626] pt-5">
                  <p className="text-[#C9A96E] text-xs font-bold tracking-widest uppercase mb-3">Opening Hours</p>
                  <div className="space-y-1.5 text-sm">
                    {[["Mon – Thu", "12:00 – 21:00"], ["Fri – Sat", "12:00 – 22:00"], ["Sunday", "12:00 – 21:00"]].map(([d, t]) => (
                      <div key={d} className="flex justify-between">
                        <span className="text-[#F5F0E8]/50">{d}</span>
                        <span className="text-[#F5F0E8]/80">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Link to="/contact" className="btn-gold text-xs py-3 px-6">Reserve a Table</Link>
                  <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-xs py-3 px-6">Order Online</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="w-full h-64 md:h-80 overflow-hidden border border-[#C9A96E]/10">
                <iframe title="Charm Thai location" src="https://maps.google.com/maps?q=2+George+Street+Bath+BA1+2EH+UK&output=embed" className="w-full h-full" allowFullScreen="" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== UPGRADED STICKY BOTTOM BAR — 3 buttons, frosted glass ===== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[100] md:hidden transition-all duration-300 ${stickyVisible ? "translate-y-0" : "translate-y-full"}`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex backdrop-blur-lg bg-[#0A0A0A]/90 border-t border-[#C9A96E]/15">
          <a href="tel:01225481001" className="flex-[1] flex flex-col items-center justify-center py-3 text-[#C9A96E] active:bg-[#C9A96E]/10 transition-colors">
            <Phone size={18} strokeWidth={1.5} />
            <span className="text-[10px] font-bold tracking-widest uppercase mt-1">Call</span>
          </a>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="flex-[2] flex items-center justify-center gap-2 py-3 bg-[#C9A96E] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase active:bg-[#E8D5A3] transition-colors">
            <ShoppingBag size={18} strokeWidth={2} />
            Order Now
          </a>
          <Link to="/contact" className="flex-[1] flex flex-col items-center justify-center py-3 text-[#C9A96E] active:bg-[#C9A96E]/10 transition-colors">
            <Utensils size={18} strokeWidth={1.5} />
            <span className="text-[10px] font-bold tracking-widest uppercase mt-1">Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
