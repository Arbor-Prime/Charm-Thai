export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="relative pt-32 pb-16 text-center bg-[#111111] border-b border-[#C9A96E]/10" data-testid="terms-header">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">Terms & Conditions</h1>
        <div className="gold-divider" />
        <p className="text-[#F5F0E8]/50 text-sm mt-4">Last updated: January 2026</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16" data-testid="terms-content">
        <div className="space-y-8 text-[#F5F0E8]/70 text-base leading-relaxed">
          {[
            { title: "1. Introduction", content: "Welcome to the Charm Thai Restaurant website. By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. These terms apply to all visitors, users and others who access or use the website and our services." },
            { title: "2. Reservations & Bookings", content: "Reservations are subject to availability. We request that you notify us as soon as possible if you need to cancel or modify your reservation. Cancellations with less than 24 hours notice may result in a cancellation charge for large group bookings. For private dining enquiries, specific terms will be agreed upon confirmation." },
            { title: "3. Private Dining", content: "Private room bookings require advance booking. A deposit may be required for large groups. The private dining room accommodates a maximum of 30 guests. Any agreed set menu must be finalised at least 48 hours before the event." },
            { title: "4. Ordering & Payments", content: "Online orders are processed through our third-party ordering platform. All prices are inclusive of VAT at the current rate. We reserve the right to change menu items and prices without notice. Payment must be made in full at the time of ordering for online orders." },
            { title: "5. Allergies & Dietary Requirements", content: "We take allergen information seriously and provide this in good faith. However, all our food is prepared in a kitchen where allergens are present. Customers with severe allergies should contact us directly before visiting or ordering. We cannot guarantee a completely allergen-free environment." },
            { title: "6. Website Use", content: "You may use our website for lawful purposes only. You must not use our website in any way that causes or may cause damage to the website, or impairment of the availability or accessibility of the website." },
            { title: "7. Intellectual Property", content: "The content of this website, including text, images, graphics and logos, is owned by Charm Thai Restaurant and is protected by copyright law. You may not reproduce or redistribute any content without our prior written consent." },
            { title: "8. Limitation of Liability", content: "To the fullest extent permitted by law, Charm Thai Restaurant shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services or website." },
            { title: "9. Changes to Terms", content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes acceptance of the new terms." },
            { title: "10. Governing Law", content: "These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales." },
            { title: "11. Contact", content: "If you have questions about these Terms and Conditions, please contact us at charmthaiuk@gmail.com or 01225 481001." },
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
