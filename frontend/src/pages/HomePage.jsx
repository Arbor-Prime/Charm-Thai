import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Phone, ChevronDown, Award } from "lucide-react";

const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";
const UBEREATS_URL = "https://www.ubereats.com/gb/store/charm-thai/oD4ILZtRQ8aa7e-WKP6emQ";

// Food images from Wix CDN
const WIXBASE = "https://static.wixstatic.com/media";
const IMAGES = {
  hero: `${WIXBASE}/1d1e7c_d01517ae269b4c8f8090d8791874e7a2~mv2_d_5874_3921_s_4_2.jpg`,
  interior: `${WIXBASE}/1d1e7c_8a19df23ae3540118a7ceda4b0808709~mv2_d_5350_3567_s_4_2.jpg`,
  greenCurry: `${WIXBASE}/1d1e7c_0cb3c665541048b792372c41d9511a83~mv2.jpeg`,
  roastedDuck: `${WIXBASE}/1d1e7c_11767ad9d1d440da8f0a599a2a6db78b~mv2_d_3018_2184_s_2.jpg`,
  bellyPork: `${WIXBASE}/1d1e7c_9a2daf3917ae4951a382dce1d814329f~mv2_d_3024_2508_s_4_2.jpg`,
  noodle: `${WIXBASE}/1d1e7c_5717435c55ef4dbf90259daaa00add4d~mv2_d_3024_2400_s_4_2.jpg`,
  chef: `${WIXBASE}/1d1e7c_6a6f67fcccf549239f2c7212e1779c4c~mv2.jpg`,
  gallery1: `${WIXBASE}/1d1e7c_ecbe613e35964f23be5257ea0e5f733a~mv2.jpg`,
  gallery2: `${WIXBASE}/1d1e7c_75e4bb55f0fd4438a20cc431c02eb3d6~mv2.jpg`,
  gallery3: `${WIXBASE}/1d1e7c_ea63ab750eb8451d803c285cd29db648~mv2.jpg`,
};

const SIGNATURE_DISHES = [
  { name: "Pad Thai", thai: "ผัดไทย", desc: "Classic tamarind noodles with prawns or chicken, beansprouts, spring onion, served with lime and ground peanuts.", price: "£15.50", img: IMAGES.hero, spice: 1 },
  { name: "Khao Soi", thai: "ข้าวซอย", desc: "Chiang Mai coconut curry noodle soup with egg noodles, fried shallot, lime and Thai pickles. A Northern Thai classic.", price: "£17.50", img: "https://images.pexels.com/photos/31029754/pexels-photo-31029754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", spice: 2 },
  { name: "Kang Keaw", thai: "แกงเขียวหวาน", desc: "Traditional Thai green curry with chicken in coconut milk, bamboo shoots, courgette, fresh chilli and basil.", price: "£15.95", img: IMAGES.greenCurry, spice: 2 },
  { name: "Pad Kra Pow Moo Grob", thai: "กระเพาหมูกรอบ", desc: "Triple-cooked crispy pork belly stir-fried with Kra Pow sauce, fresh chilli, green beans and basil.", price: "£16.50", img: IMAGES.bellyPork, spice: 3 },
  { name: "Khao Rad Ped", thai: "ข้าวราดเป็ด", desc: "Roasted duck topped with traditional Thai homemade gravy and bean paste, with cucumber, coriander and half-boiled egg.", price: "£17.95", img: IMAGES.roastedDuck, spice: 1 },
  { name: "Kanoom Jeep", thai: "ขนมจีบ", desc: "Steamed pork dumplings with water chestnut, mushroom and sesame oil, served with garlic and dark sweet soya sauce.", price: "£6.95", img: IMAGES.noodle, spice: 0 },
];

const REVIEWS = [
  { text: "I am Thai and this is the best authentic Thai restaurant in Bath. The food tastes like home.", author: "Natchaya P.", rating: 5, platform: "Google" },
  { text: "The interior is stunning — gold leaf, carved panels, an atmosphere of great calm. Food to match.", author: "James W.", rating: 5, platform: "TripAdvisor" },
  { text: "The Massaman curry was exceptional, perfectly balanced. We've been coming here for 8 years.", author: "Sarah M.", rating: 5, platform: "Google" },
  { text: "Best Thai food outside of Thailand. The Khao Soi is absolutely divine. Highly recommended.", author: "David K.", rating: 5, platform: "Uber Eats" },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "", delay = 0 }) {
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

export default function HomePage() {
  const scrollRef = useRef(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        data-testid="hero-section"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/55 to-[#0A0A0A]/90" />

        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto" style={{ paddingTop: "80px" }}>
          <p className="font-script text-[#E8D5A3] text-3xl md:text-4xl mb-4 animate-fade-in">Authentic Thai</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The Heart of <span className="text-[#C9A96E]">Bath</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-[#F5F0E8]/80 text-base md:text-lg tracking-wider mb-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Award-winning flavours since 2013 · 2 George Street
          </p>
          <p className="text-[#C9A96E]/90 text-sm tracking-widest uppercase mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Bath Good Food Award · TripAdvisor Travellers' Choice
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-sm py-4 px-10" data-testid="hero-order-btn">
              Order Now
            </a>
            <Link to="/contact" className="btn-outline-gold text-sm py-4 px-10" data-testid="hero-book-btn">
              Book a Table
            </Link>
          </div>
          <div className="mt-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Link to="/menu" className="text-[#F5F0E8]/50 text-xs tracking-widest uppercase hover:text-[#C9A96E] transition-colors underline underline-offset-4" data-testid="hero-menu-btn">
              View Full Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ===== ABOUT / WELCOME ===== */}
      <section ref={scrollRef} className="py-24 md:py-32 bg-[#0A0A0A]" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <p className="font-script text-[#C9A96E] text-3xl mb-3">Welcome to</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-6 leading-tight">
                Charm Thai <br /><span className="text-[#C9A96E]">Restaurant</span>
              </h2>
              <div className="gold-divider ml-0 mb-8" />
              <p className="text-[#F5F0E8]/70 text-base leading-relaxed mb-5">
                Here at Charm Thai restaurant, located at the heart of Bath, we serve the finest and most authentic aromatic Thai cuisine. Our award-winning kitchen crafts dishes that take you on a whistle-stop tour of the East, from Bangkok.
              </p>
              <p className="text-[#F5F0E8]/70 text-base leading-relaxed mb-8">
                Our food takes the best of eastern cooking with traditional seasonings based on fresh herbs, roots and dried toasted spices. Come on down where the true flavours of the Orient are on offer every day of the week.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: "15+", label: "Years Serving" },
                  { num: "650+", label: "Google Reviews" },
                  { num: "4.5★", label: "Google Rating" },
                  { num: "Award", label: "Good Food Award" },
                ].map((s) => (
                  <div key={s.label} className="border border-[#C9A96E]/20 p-4 text-center">
                    <div className="font-playfair text-2xl font-bold text-[#C9A96E]">{s.num}</div>
                    <div className="text-[#F5F0E8]/50 text-xs tracking-wider uppercase mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link to="/menu" className="btn-gold text-xs py-3" data-testid="about-menu-btn">See Menu</Link>
                <Link to="/contact" className="btn-outline-gold text-xs py-3" data-testid="about-book-btn">Reserve a Table</Link>
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="relative">
                <img
                  src={IMAGES.interior}
                  alt="Charm Thai Restaurant interior"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#C9A96E]/30" />
                <div className="absolute -top-4 -right-4 w-32 h-32 border border-[#C9A96E]/30" />
                {/* Award badges */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <img src="https://static.wixstatic.com/media/1d1e7c_16417592a3924b3aa12a13364d76d058~mv1.png" alt="Bath Good Food Award" className="h-14 bg-white/10 p-1" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== OPEN HOURS / TEXT FEATURE ===== */}
      <section className="py-20 md:py-28 bg-[#111111] border-y border-[#C9A96E]/10" data-testid="text-feature-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="space-y-6">
                <p className="font-playfair text-[#C9A96E] text-4xl md:text-5xl tracking-[0.2em] font-bold uppercase">
                  T h a i &nbsp; R e s t a u r a n t
                </p>
                <p className="font-playfair text-[#E8D5A3] text-xl tracking-[0.15em] uppercase italic">
                  T a s t e &nbsp; o f &nbsp; t h e &nbsp; E a s t
                </p>
                <div className="w-16 h-px bg-[#C9A96E] my-6" />
                <blockquote className="text-[#F5F0E8]/80 text-base md:text-lg leading-relaxed italic border-l-2 border-[#C9A96E] pl-6">
                  "At Charm, we believe in delicious, authentic Thai food, served in a comfortable and warm environment in the heart of Bath"
                </blockquote>
                <div className="mt-8 space-y-2">
                  <p className="text-[#C9A96E] font-bold tracking-[0.25em] uppercase text-sm">WE ARE OPEN EVERY DAY ALL DAY</p>
                  <p className="text-[#F5F0E8]/70 tracking-[0.2em] uppercase text-sm">MONDAY — SUNDAY</p>
                  <p className="text-[#F5F0E8]/60 text-sm mt-3">Sun–Thu: 12:00pm – 9:00pm &nbsp;|&nbsp; Fri–Sat: 12:00pm – 10:00pm</p>
                </div>
                <p className="text-[#F5F0E8]/70 text-sm leading-relaxed mt-4">
                  Welcome to all customers. We serve authentic Thai taste and real Thai spicy. We are looking forward to serving you soon.
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="tel:01225481001" className="flex items-center gap-2 text-[#C9A96E] text-sm hover:text-[#E8D5A3] transition-colors" data-testid="feature-phone">
                    <Phone size={14} />
                    01225 481001
                  </a>
                  <span className="text-[#F5F0E8]/30">|</span>
                  <span className="flex items-center gap-2 text-[#F5F0E8]/60 text-sm">
                    <MapPin size={14} className="text-[#C9A96E]" />
                    2 George Street, Bath
                  </span>
                </div>
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="relative overflow-hidden">
                <img
                  src={IMAGES.greenCurry}
                  alt="Authentic Thai green curry"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE DISHES ===== */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] overflow-hidden" data-testid="signature-dishes-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-14">
            <p className="font-script text-[#C9A96E] text-3xl mb-2">Our Favourites</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest">
              Signature <span className="text-[#C9A96E]">Dishes</span>
            </h2>
            <div className="gold-divider mt-6" />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_DISHES.map((dish, i) => (
              <RevealSection key={dish.name} delay={i * 100}>
                <div className="group card-gold-border overflow-hidden hover:-translate-y-1 transition-transform duration-300" data-testid={`dish-card-${i}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={dish.img}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="text-[#C9A96E] text-xs">
                        {"🌶".repeat(dish.spice) || "Mild"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-playfair text-lg font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors leading-tight">{dish.name}</h3>
                      <span className="text-[#C9A96E] font-bold text-base ml-2 shrink-0">{dish.price}</span>
                    </div>
                    <p className="text-[#C9A96E]/60 text-xs mb-3 font-script">{dish.thai}</p>
                    <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-12">
            <Link to="/menu" className="btn-outline-gold text-xs py-3.5 px-12" data-testid="view-full-menu-btn">
              View Full Menu
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-24 bg-[#111111]" data-testid="gallery-preview-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-12">
            <p className="font-script text-[#C9A96E] text-3xl mb-2">The Experience</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest">
              See Our <span className="text-[#C9A96E]">Restaurant</span>
            </h2>
            <div className="gold-divider mt-6" />
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: IMAGES.gallery1, alt: "Restaurant interior" },
              { src: IMAGES.gallery2, alt: "Dining area" },
              { src: IMAGES.gallery3, alt: "Food preparation" },
              { src: IMAGES.chef, alt: "Our chef" },
              { src: IMAGES.roastedDuck, alt: "Roasted duck dish" },
              { src: IMAGES.bellyPork, alt: "Crispy pork belly" },
            ].map((img, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="relative h-48 md:h-56 overflow-hidden group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-colors duration-300" />
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-gold text-xs py-3.5 px-10" data-testid="view-gallery-btn">
              View Full Gallery
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-14">
            <p className="font-script text-[#C9A96E] text-3xl mb-2">What Our Guests Say</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest">
              Guest <span className="text-[#C9A96E]">Reviews</span>
            </h2>
            <div className="gold-divider mt-6" />
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="flex gap-1 justify-center mb-1">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />)}</div>
                <div className="text-[#F5F0E8]/80 text-sm font-bold">4.5 Google</div>
                <div className="text-[#F5F0E8]/40 text-xs">626 reviews</div>
              </div>
              <div className="w-px bg-[#262626]" />
              <div className="text-center">
                <div className="flex gap-1 justify-center mb-1">{[1,2,3,4].map(s => <Star key={s} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />)}</div>
                <div className="text-[#F5F0E8]/80 text-sm font-bold">4.2 TripAdvisor</div>
                <div className="text-[#F5F0E8]/40 text-xs">667 reviews</div>
              </div>
              <div className="w-px bg-[#262626]" />
              <div className="text-center">
                <div className="flex gap-1 justify-center mb-1">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />)}</div>
                <div className="text-[#F5F0E8]/80 text-sm font-bold">4.7 Uber Eats</div>
                <div className="text-[#F5F0E8]/40 text-xs">Verified</div>
              </div>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="card-gold-border p-8 relative" data-testid={`review-card-${i}`}>
                  <span className="font-playfair text-6xl text-[#C9A96E]/15 absolute top-4 left-6 leading-none select-none">"</span>
                  <div className="flex gap-1 mb-4 mt-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-[#C9A96E] text-[#C9A96E]" />)}
                  </div>
                  <p className="text-[#F5F0E8]/80 text-base leading-relaxed italic mb-5">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#C9A96E] text-sm font-bold">{r.author}</p>
                      <p className="text-[#F5F0E8]/40 text-xs">{r.platform}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-[#C9A96E]/40 text-[#C9A96E]/40" />)}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIVATE DINING ===== */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1670261197440-9f54a791d9cd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="private-dining-section"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-8">
          <RevealSection>
            <Award size={32} className="text-[#C9A96E] mx-auto mb-6" />
            <p className="font-script text-[#C9A96E] text-3xl mb-3">Exclusive</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-6">
              Private Dining
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#F5F0E8]/80 text-base leading-relaxed mb-4">
              Host your celebration in our exclusive private dining room. Our private party room can accommodate up to 30 guests with a bespoke Thai set menu crafted by our award-winning chef.
            </p>
            <p className="text-[#F5F0E8]/60 text-sm mb-10">
              Perfect for birthdays, corporate dinners, anniversaries and group celebrations.
            </p>
            <Link to="/private-dining" className="btn-gold text-sm py-4 px-12" data-testid="private-dining-cta">
              Enquire About Private Dining
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ===== ORDER STRIP ===== */}
      <section className="py-20 bg-[#111111] border-y border-[#C9A96E]/15" data-testid="order-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <RevealSection>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">
              Order for Delivery or <span className="text-[#C9A96E]">Collection</span>
            </h2>
            <p className="text-[#F5F0E8]/50 text-sm mb-12 tracking-wider">Free delivery within 2 miles · Available within 3 miles (£20 minimum)</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-gold-border p-8 text-center hover:border-[#C9A96E]/40 transition-colors group">
                <div className="text-[#C9A96E] text-4xl mb-4 group-hover:scale-110 transition-transform">🍜</div>
                <h3 className="font-playfair text-lg font-bold text-[#F5F0E8] uppercase tracking-wider mb-3">Order Direct</h3>
                <p className="text-[#F5F0E8]/50 text-sm mb-6">Order directly from us for collection or delivery</p>
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-3 w-full block text-center" data-testid="order-direct-btn">
                  Order Now
                </a>
              </div>
              <div className="card-gold-border p-8 text-center hover:border-[#C9A96E]/40 transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#000"/>
                    <text x="3" y="17" fontSize="11" fill="#06C167" fontWeight="bold" fontFamily="Arial">Uber</text>
                    <text x="3" y="22" fontSize="7" fill="#06C167" fontFamily="Arial">Eats</text>
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#F5F0E8] uppercase tracking-wider mb-3">Uber Eats</h3>
                <p className="text-[#F5F0E8]/50 text-sm mb-6">Order via Uber Eats for fast home delivery</p>
                <a href={UBEREATS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-xs py-3 w-full block text-center" data-testid="order-ubereats-btn">
                  Open Uber Eats
                </a>
              </div>
              <div className="card-gold-border p-8 text-center hover:border-[#C9A96E]/40 transition-colors group">
                <div className="text-[#C9A96E] text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h3 className="font-playfair text-lg font-bold text-[#F5F0E8] uppercase tracking-wider mb-3">Call to Order</h3>
                <p className="text-[#F5F0E8]/50 text-sm mb-6">Call us to place your order or reservation</p>
                <a href="tel:01225481001" className="btn-outline-gold text-xs py-3 w-full block text-center" data-testid="order-call-btn">
                  01225 481001
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== FIND US ===== */}
      <section className="py-24 bg-[#0A0A0A]" data-testid="find-us-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest">
              Find <span className="text-[#C9A96E]">Us</span>
            </h2>
            <div className="gold-divider mt-6" />
          </RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealSection>
              <div className="w-full h-80 overflow-hidden border border-[#C9A96E]/15">
                <iframe
                  title="Charm Thai Restaurant location"
                  src="https://maps.google.com/maps?q=2+George+Street+Bath+BA1+2EH+UK&output=embed"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  data-testid="google-map"
                />
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-bold text-[#C9A96E] uppercase tracking-widest">Visit Us</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <MapPin size={18} className="text-[#C9A96E] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#F5F0E8]/90 text-sm font-medium">Address</p>
                      <p className="text-[#F5F0E8]/60 text-sm">2 George Street, Bath, Somerset, BA1 2EH</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={18} className="text-[#C9A96E] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#F5F0E8]/90 text-sm font-medium">Phone</p>
                      <a href="tel:01225481001" className="text-[#F5F0E8]/60 text-sm hover:text-[#C9A96E] transition-colors">01225 481001</a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#262626] pt-6">
                  <p className="font-playfair text-[#C9A96E] text-sm font-bold tracking-widest uppercase mb-4">Opening Hours</p>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Monday – Thursday", "12:00 – 21:00"],
                      ["Friday – Saturday", "12:00 – 22:00"],
                      ["Sunday", "12:00 – 21:00"],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-[#F5F0E8]/60">{day}</span>
                        <span className="text-[#F5F0E8]/90">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Link to="/contact" className="btn-gold text-xs py-3 px-6" data-testid="find-us-reserve-btn">
                    Reserve a Table
                  </Link>
                  <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-xs py-3 px-6" data-testid="find-us-order-btn">
                    Order Online
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
