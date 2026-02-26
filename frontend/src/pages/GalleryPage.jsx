import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const WIXBASE = "https://static.wixstatic.com/media";

const GALLERY_IMAGES = [
  { src: `${WIXBASE}/1d1e7c_8a19df23ae3540118a7ceda4b0808709~mv2_d_5350_3567_s_4_2.jpg`, alt: "Charm Thai dining room interior", category: "Interior" },
  { src: `${WIXBASE}/1d1e7c_d01517ae269b4c8f8090d8791874e7a2~mv2_d_5874_3921_s_4_2.jpg`, alt: "Authentic Pad Thai", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_0cb3c665541048b792372c41d9511a83~mv2.jpeg`, alt: "Thai green curry", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_11767ad9d1d440da8f0a599a2a6db78b~mv2_d_3018_2184_s_2.jpg`, alt: "Roasted duck with Thai gravy", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_9a2daf3917ae4951a382dce1d814329f~mv2_d_3024_2508_s_4_2.jpg`, alt: "Crispy pork belly", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_5717435c55ef4dbf90259daaa00add4d~mv2_d_3024_2400_s_4_2.jpg`, alt: "Thai noodles", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_2f34616f114f4994bc43a3244d094541~mv2_d_3024_2880_s_4_2.jpg`, alt: "Fresh Thai ingredients", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_498b5f10c21d4cc4a105594edc6bc321~mv2_d_3024_2562_s_4_2.jpg`, alt: "Thai dish", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_6a6f67fcccf549239f2c7212e1779c4c~mv2.jpg`, alt: "Our chef", category: "Team" },
  { src: `${WIXBASE}/1d1e7c_55ef23096388404294452aa7eab6f092~mv2.jpg`, alt: "Promotional dishes", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_ecbe613e35964f23be5257ea0e5f733a~mv2.jpg`, alt: "Restaurant ambience", category: "Interior" },
  { src: `${WIXBASE}/1d1e7c_75e4bb55f0fd4438a20cc431c02eb3d6~mv2.jpg`, alt: "Dining experience", category: "Interior" },
  { src: `${WIXBASE}/1d1e7c_ea63ab750eb8451d803c285cd29db648~mv2.jpg`, alt: "Thai food preparation", category: "Food" },
  { src: `${WIXBASE}/1d1e7c_e3915a3e496f4fbcbb4ef968147676db~mv2.jpg`, alt: "Kitchen", category: "Team" },
  { src: `${WIXBASE}/1d1e7c_3231f131ad4e4d20808e6a94c3c36387~mv2.jpg`, alt: "Restaurant setting", category: "Interior" },
  { src: `${WIXBASE}/1d1e7c_03463749c4be401fa42528ff419053a1~mv2.jpg`, alt: "Table setting", category: "Interior" },
  // Supplement with Unsplash
  { src: "https://images.unsplash.com/photo-1718371985568-a0e2af01a253?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Restaurant ambience", category: "Interior" },
  { src: "https://images.pexels.com/photos/35886153/pexels-photo-35886153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Thai curry", category: "Food" },
  { src: "https://images.pexels.com/photos/31029754/pexels-photo-31029754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Green curry", category: "Food" },
];

const CATEGORIES = ["All", "Food", "Interior", "Team"];

function LightboxModal({ image, onClose, onPrev, onNext }) {
  if (!image) return null;
  return (
    <div className="fixed inset-0 bg-[#0A0A0A]/97 z-50 flex items-center justify-center p-4" onClick={onClose} data-testid="lightbox-modal">
      <button onClick={onClose} className="absolute top-4 right-4 text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors z-10" data-testid="close-lightbox">
        <X size={28} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors z-10 text-3xl" data-testid="prev-image">‹</button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors z-10 text-3xl" data-testid="next-image">›</button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={e => e.stopPropagation()}
        data-testid="lightbox-image"
      />
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#F5F0E8]/60 text-sm">{image.alt}</p>
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeFilter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIdx(i => (i + 1) % filtered.length);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Header */}
      <div
        className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/1d1e7c_8a19df23ae3540118a7ceda4b0808709~mv2_d_5350_3567_s_4_2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-testid="gallery-header"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 px-4">
          <p className="font-script text-[#C9A96E] text-3xl mb-2">A Visual</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">Gallery</h1>
          <div className="gold-divider" />
          <p className="text-[#F5F0E8]/60 text-sm mt-4">Our food, our restaurant, our team</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-[60px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex gap-6 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-testid={`gallery-filter-${cat.toLowerCase()}`}
              className={`text-xs font-bold tracking-widest uppercase pb-1 border-b-2 transition-all duration-200 ${
                activeFilter === cat
                  ? "text-[#C9A96E] border-[#C9A96E]"
                  : "text-[#F5F0E8]/50 border-transparent hover:text-[#F5F0E8]/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="break-inside-avoid relative group overflow-hidden cursor-pointer border border-[#C9A96E]/5 hover:border-[#C9A96E]/30 transition-all duration-300"
              onClick={() => openLightbox(i)}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#C9A96E] text-[#0A0A0A] text-[9px] font-bold px-2 py-0.5 tracking-widest uppercase">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <LightboxModal
          image={filtered[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
