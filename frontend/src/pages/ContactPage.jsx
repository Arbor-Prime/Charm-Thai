import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";

export default function ContactPage() {
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
        body: JSON.stringify({ ...form, type: "General Enquiry / Reservation" }),
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
      {/* Header */}
      <div className="relative pt-32 pb-20 text-center bg-[#111111] border-b border-[#C9A96E]/10" data-testid="contact-header">
        <p className="font-script text-[#C9A96E] text-3xl mb-2">Get in Touch</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">Contact Us</h1>
        <div className="gold-divider" />
        <p className="text-[#F5F0E8]/60 text-sm mt-4 max-w-lg mx-auto">
          Reserve a table, enquire about private dining, or simply say hello.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info + Map */}
          <div>
            {/* Map */}
            <div className="w-full h-72 overflow-hidden border border-[#C9A96E]/15 mb-10">
              <iframe
                title="Charm Thai location"
                src="https://maps.google.com/maps?q=2+George+Street+Bath+BA1+2EH+UK&output=embed"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                data-testid="contact-map"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="card-gold-border p-5">
                <MapPin size={18} className="text-[#C9A96E] mb-3" />
                <h3 className="text-[#F5F0E8] font-bold text-sm uppercase tracking-widest mb-2">Address</h3>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">2 George Street<br />Bath, Somerset<br />BA1 2EH</p>
              </div>
              <div className="card-gold-border p-5">
                <Phone size={18} className="text-[#C9A96E] mb-3" />
                <h3 className="text-[#F5F0E8] font-bold text-sm uppercase tracking-widest mb-2">Phone</h3>
                <a href="tel:01225481001" className="text-[#F5F0E8]/60 text-sm hover:text-[#C9A96E] transition-colors" data-testid="contact-phone">
                  01225 481001
                </a>
              </div>
              <div className="card-gold-border p-5">
                <Mail size={18} className="text-[#C9A96E] mb-3" />
                <h3 className="text-[#F5F0E8] font-bold text-sm uppercase tracking-widest mb-2">Email</h3>
                <a href="mailto:charmthaiuk@gmail.com" className="text-[#F5F0E8]/60 text-sm hover:text-[#C9A96E] transition-colors break-all" data-testid="contact-email">
                  charmthaiuk@gmail.com
                </a>
              </div>
              <div className="card-gold-border p-5">
                <Clock size={18} className="text-[#C9A96E] mb-3" />
                <h3 className="text-[#F5F0E8] font-bold text-sm uppercase tracking-widest mb-2">Opening Hours</h3>
                <p className="text-[#F5F0E8]/60 text-xs leading-relaxed">
                  Mon–Thu &amp; Sun: 12:00 – 21:00<br />
                  Fri–Sat: 12:00 – 22:00
                </p>
              </div>
            </div>

            {/* Order Online */}
            <div className="card-gold-border p-6 text-center">
              <p className="text-[#F5F0E8]/70 text-sm mb-4">Want to order for collection or delivery?</p>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-3 px-10" data-testid="contact-order-btn">
                Order Online Now
              </a>
            </div>
          </div>

          {/* Reservation Form */}
          <div>
            <div className="card-gold-border p-8 md:p-10">
              <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-2">
                Make a <span className="text-[#C9A96E]">Reservation</span>
              </h2>
              <p className="text-[#F5F0E8]/50 text-sm mb-8">Fill in your details and we'll confirm your booking.</p>

              {status === "success" && (
                <div className="bg-green-900/30 border border-green-500/30 text-green-400 text-sm p-4 mb-6" data-testid="contact-success">
                  Thank you! We've received your message. We'll be in touch within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-900/30 border border-red-500/30 text-red-400 text-sm p-4 mb-6" data-testid="contact-error">
                  Something went wrong. Please call 01225 481001 directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="Your name" data-testid="contact-name"
                    />
                  </div>
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Email *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="your@email.com" data-testid="contact-email-input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Phone</label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors placeholder-[#F5F0E8]/20"
                      placeholder="Phone number" data-testid="contact-phone-input"
                    />
                  </div>
                  <div>
                    <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Date</label>
                    <input
                      name="date" type="date" value={form.date} onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors"
                      data-testid="contact-date"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Party Size</label>
                  <select
                    name="partySize" value={form.partySize} onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors"
                    data-testid="contact-party-size"
                  >
                    <option value="">Select party size</option>
                    {["1", "2", "3-4", "5-6", "7-8", "9-10", "10+"].map(s => <option key={s} value={s}>{s} {s === "1" ? "person" : "people"}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[#F5F0E8]/60 text-xs tracking-widest uppercase block mb-2">Message / Special Requirements</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full bg-transparent border-b border-[#262626] focus:border-[#C9A96E] outline-none text-[#F5F0E8] text-sm py-2 transition-colors resize-none placeholder-[#F5F0E8]/20"
                    placeholder="Dietary requirements, special occasions, questions..."
                    data-testid="contact-message"
                  />
                </div>
                <button
                  type="submit" disabled={submitting}
                  className="btn-gold w-full py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="contact-submit"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <p className="text-[#F5F0E8]/30 text-xs text-center">
                  Or call us directly: <a href="tel:01225481001" className="text-[#C9A96E] hover:underline">01225 481001</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
