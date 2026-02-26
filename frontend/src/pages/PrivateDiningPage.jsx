import { useState } from "react";
import { Users, ChefHat, CalendarDays, Mail, Phone } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function PrivateDiningPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", partySize: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!BACKEND_URL) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", date: "", partySize: "", message: "" });
        setSubmitting(false);
        return;
      }
      const res = await fetch(`${BACKEND_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "Private Dining" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", date: "", partySize: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <div
        className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1670261197440-9f54a791d9cd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-testid="private-dining-header"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 px-4">
          <p className="font-script text-[#C9A96E] text-3xl mb-2">Exclusive</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">Private Dining</h1>
          <div className="gold-divider" />
          <p className="text-[#F5F0E8]/70 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            Host your celebration in our exclusive private function room. Up to 30 guests with bespoke set menus.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Users, title: "Up to 30 Guests", desc: "Our private party room comfortably accommodates up to 30 guests for your celebration." },
            { icon: ChefHat, title: "Bespoke Set Menu", desc: "Our award-winning chef will craft a special set menu tailored to your every want and need." },
            { icon: CalendarDays, title: "Book in Advance", desc: "We're often very busy, especially at weekends. Please book well in advance to secure your date." },
          ].map((f, i) => (
            <div key={i} className="card-gold-border p-8 text-center" data-testid={`feature-${i}`}>
              <f.icon size={28} className="text-[#C9A96E] mx-auto mb-4" />
              <h3 className="font-playfair text-lg font-bold text-[#F5F0E8] uppercase tracking-wider mb-3">{f.title}</h3>
              <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-6">
              Function <span className="text-[#C9A96E]">Room</span>
            </h2>
            <div className="w-12 h-px bg-[#C9A96E]/40 mb-8" />
            <div className="space-y-5 text-[#F5F0E8]/70 text-base leading-relaxed">
              <p>
                Our restaurant and bar is large enough to cater for large groups and parties. However, please book well in advance as we're often very busy, especially during the weekend.
              </p>
              <p>
                Our private party room can hold up to a maximum of <strong className="text-[#C9A96E]">30 people</strong>. We are also able to provide a special set menu. Additionally, the Chef is able to accommodate to your every want and need.
              </p>
              <p>
                Let yourself indulge in this experience with our contemporary menu, alongside our familial like atmosphere. We aim to provide a relaxing, yet animated atmosphere.
              </p>
              <p>
                Come on down to the Charm Thai Restaurant, where the true flavours of the Orient are on offer every day of the week. You'll find classic dishes alongside contemporary and unique creations from our team of expert award-winning chefs.
              </p>
              <p>
                If you'd like to request a menu, or to leave us some feedback, please send us a message with your details.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#C9A96E] shrink-0" />
                <a href="mailto:charmthaiuk@gmail.com" className="text-[#F5F0E8]/70 text-sm hover:text-[#C9A96E] transition-colors" data-testid="private-email">
                  charmthaiuk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#C9A96E] shrink-0" />
                <a href="tel:01225481001" className="text-[#F5F0E8]/70 text-sm hover:text-[#C9A96E] transition-colors" data-testid="private-phone">
                  01225 481001
                </a>
              </div>
            </div>
            {/* Interior image */}
            <div className="mt-10">
              <img
                src="https://static.wixstatic.com/media/1d1e7c_8a19df23ae3540118a7ceda4b0808709~mv2_d_5350_3567_s_4_2.jpg"
                alt="Charm Thai Restaurant dining room"
                className="w-full h-72 object-cover border border-[#C9A96E]/10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <div className="card-gold-border p-8 md:p-10">
              <h3 className="font-playfair text-2xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-2">
                Enquire Now
              </h3>
              <p className="text-[#F5F0E8]/50 text-sm mb-8">Fill in your details and we'll get back to you shortly.</p>

              {status === "success" && (
                <div className="bg-green-900/30 border border-green-500/30 text-green-400 text-sm p-4 mb-6 tracking-wide" data-testid="form-success">
                  Thank you! Your enquiry has been received. We'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-900/30 border border-red-500/30 text-red-400 text-sm p-4 mb-6" data-testid="form-error">
                  Something went wrong. Please call us on 01225 481001 or email charmthaiuk@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="private-dining-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="Your name"
                      data-testid="pd-name-input"
                    />
                  </div>
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Email *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="your@email.com"
                      data-testid="pd-email-input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Phone</label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="Your phone number"
                      data-testid="pd-phone-input"
                    />
                  </div>
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Preferred Date</label>
                    <input
                      name="date" type="date" value={form.date} onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors"
                      data-testid="pd-date-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Number of Guests *</label>
                  <select
                    name="partySize" value={form.partySize} onChange={handleChange} required
                    className="w-full bg-[#1A1A1A] border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors"
                    data-testid="pd-party-select"
                  >
                    <option value="">Select party size</option>
                      <option value="10-15">10-15 guests</option>
                    <option value="16-20">16-20 guests</option>
                    <option value="21-25">21-25 guests</option>
                    <option value="26-30">26-30 guests</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Message / Special Requirements</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors resize-none placeholder-[#F5F0E8]/20"
                    placeholder="Tell us about your event, dietary requirements, special requests..."
                    data-testid="pd-message-input"
                  />
                </div>
                <button
                  type="submit" disabled={submitting}
                  className="btn-gold w-full py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="pd-submit-btn"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
