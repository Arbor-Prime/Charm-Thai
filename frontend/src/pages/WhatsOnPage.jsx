import { useState, useRef } from "react";
import { Play, X, ExternalLink } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Charm Thai in Bath Spa City",
    duration: "0:16",
    thumbnail: "https://static.wixstatic.com/media/1d1e7c_7331e4263f754d65b4306b16d58ba121f001.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg",
    src: "https://video.wixstatic.com/video/1d1e7c_7331e4263f754d65b4306b16d58ba121/1080p/mp4/file.mp4",
    desc: "A tour of Charm Thai Restaurant in the beautiful city of Bath."
  },
  {
    id: 2,
    title: "Downstairs Section",
    duration: "0:34",
    thumbnail: "https://static.wixstatic.com/media/1d1e7c_1af51ae45e6d4703ad2d7e5ceb8f11b6f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg",
    src: "https://video.wixstatic.com/video/1d1e7c_1af51ae45e6d4703ad2d7e5ceb8f11b6f/1080p/mp4/file.mp4",
    desc: "Explore the intimate downstairs dining section of our restaurant."
  },
  {
    id: 3,
    title: "Restaurant Tour",
    duration: "1:00",
    thumbnail: "https://static.wixstatic.com/media/1d1e7c_c378232bd3ac4e2c8d6f7dde7dbcf5a4f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg",
    src: "https://video.wixstatic.com/video/1d1e7c_c378232bd3ac4e2c8d6f7dde7dbcf5a4/1080p/mp4/file.mp4",
    desc: "A full tour of Charm Thai Restaurant — from the kitchen to the dining room."
  },
];

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);
  if (!video) return null;
  return (
    <div
      className="fixed inset-0 bg-[#0A0A0A]/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="video-modal"
    >
      <div
        className="relative w-full max-w-4xl bg-[#111111] border border-[#C9A96E]/20"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors z-10"
          data-testid="close-video-modal"
        >
          <X size={24} />
        </button>
        <div className="p-4 border-b border-[#262626]">
          <h3 className="font-playfair text-lg font-bold text-[#F5F0E8]">{video.title}</h3>
        </div>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <video
            ref={videoRef}
            src={video.src}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full bg-black"
            data-testid="video-player"
          >
            <p className="text-white p-4">Your browser does not support HTML5 video.</p>
          </video>
        </div>
      </div>
    </div>
  );
}

export default function WhatsOnPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Header */}
      <div
        className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/1d1e7c_0cb3c665541048b792372c41d9511a83~mv2.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-testid="whats-on-header"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 px-4">
          <p className="font-script text-[#C9A96E] text-3xl mb-2">See What's</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">Happening</h1>
          <div className="gold-divider" />
          <p className="text-[#F5F0E8]/60 text-sm mt-4 max-w-lg mx-auto">Watch our videos and follow us on social media for the latest from Charm Thai Restaurant</p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">
          Our <span className="text-[#C9A96E]">Videos</span>
        </h2>
        <div className="w-12 h-px bg-[#C9A96E]/40 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group card-gold-border overflow-hidden cursor-pointer hover:border-[#C9A96E]/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() => setActiveVideo(video)}
              data-testid={`video-card-${video.id}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#C9A96E]/90 flex items-center justify-center group-hover:bg-[#C9A96E] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play size={20} className="text-[#0A0A0A] ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration */}
                <span className="absolute bottom-3 right-3 bg-[#0A0A0A]/80 text-[#F5F0E8] text-xs px-2 py-1 font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-base font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors mb-2">{video.title}</h3>
                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{video.desc}</p>
                <p className="text-[#C9A96E] text-xs mt-3 tracking-widest uppercase font-bold">Click to Play</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Section */}
      <div className="bg-[#111111] border-t border-[#C9A96E]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">
            Follow <span className="text-[#C9A96E]">Us</span>
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-[#F5F0E8]/60 text-sm max-w-md mx-auto mb-12 leading-relaxed">
            Stay updated with our latest dishes, events and behind-the-scenes content. Follow us on social media for daily updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {[
              { name: "TikTok", url: "https://www.tiktok.com/@charmthaiuk", handle: "@charmthaiuk", color: "from-pink-600 to-red-500" },
              { name: "Instagram", url: "https://www.instagram.com/charmthaiuk/", handle: "@charmthaiuk", color: "from-purple-600 to-pink-500" },
              { name: "Facebook", url: "https://www.facebook.com/charmthaiuk/", handle: "Charm Thai UK", color: "from-blue-700 to-blue-500" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 card-gold-border px-8 py-4 hover:border-[#C9A96E]/50 transition-all duration-200 group w-full sm:w-auto"
                data-testid={`social-${social.name.toLowerCase()}`}
              >
                <div className="text-[#C9A96E] group-hover:scale-110 transition-transform">
                  <ExternalLink size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[#F5F0E8] font-bold text-sm group-hover:text-[#C9A96E] transition-colors">{social.name}</p>
                  <p className="text-[#F5F0E8]/40 text-xs">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  );
}
