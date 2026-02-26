export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="relative pt-32 pb-16 text-center bg-[#111111] border-b border-[#C9A96E]/10" data-testid="privacy-header">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">Privacy Policy</h1>
        <div className="gold-divider" />
        <p className="text-[#F5F0E8]/50 text-sm mt-4">Last updated: January 2026</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-invert" data-testid="privacy-content">
        <div className="space-y-8 text-[#F5F0E8]/70 text-base leading-relaxed">
          {[
            { title: "1. Who We Are", content: "Charm Thai Restaurant is located at 2 George Street, Bath BA1 2EH. We are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information, how we use it and how we keep it secure." },
            { title: "2. What Information We Collect", content: "We collect information you provide directly to us when you make a reservation or enquiry, including your name, email address, phone number, preferred date and party size. We also collect information automatically when you use our website, such as IP addresses and browser type through cookies and similar technologies." },
            { title: "3. How We Use Your Information", content: "We use your personal information to: process your reservation or enquiry; contact you regarding your booking; improve our website and services; send you marketing communications where you have given consent; and comply with our legal obligations." },
            { title: "4. Legal Basis for Processing", content: "We process your personal information on the following legal bases: performance of a contract (to provide our services); legitimate interests (to improve our services and operate our business); and consent (for marketing communications)." },
            { title: "5. Sharing Your Information", content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services (for example, with our booking platform provider)." },
            { title: "6. Data Retention", content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Reservation data is typically retained for 3 years. You can request deletion of your data at any time." },
            { title: "7. Your Rights", content: "Under GDPR, you have the right to: access your personal data; rectify inaccurate data; erase your data; restrict processing; data portability; and object to processing. To exercise any of these rights, please contact us at charmthaiuk@gmail.com." },
            { title: "8. Cookies", content: "Our website uses cookies to improve your experience. Please see our Cookie Policy for more information." },
            { title: "9. Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction." },
            { title: "10. Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at: charmthaiuk@gmail.com or by post at 2 George Street, Bath BA1 2EH." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-playfair text-xl font-bold text-[#C9A96E] uppercase tracking-widest mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
