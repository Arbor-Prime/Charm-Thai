export default function CookiePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="relative pt-32 pb-16 text-center bg-[#111111] border-b border-[#C9A96E]/10" data-testid="cookie-header">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-3">Cookie Policy</h1>
        <div className="gold-divider" />
        <p className="text-[#F5F0E8]/50 text-sm mt-4">Last updated: January 2026</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16" data-testid="cookie-content">
        <div className="space-y-8 text-[#F5F0E8]/70 text-base leading-relaxed">
          {[
            { title: "1. What Are Cookies?", content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site." },
            { title: "2. How We Use Cookies", content: "Our website uses cookies to: remember your preferences and settings; understand how you use our website so we can improve it; provide a better, more personalised experience; and analyse website traffic and performance." },
            { title: "3. Types of Cookies We Use", content: "Essential Cookies: These are necessary for the website to function properly. They enable core functionality such as security and network management. These cannot be disabled.\n\nAnalytics Cookies: These help us understand how visitors interact with our website by collecting information anonymously.\n\nPreference Cookies: These enable the website to remember information that changes the way the website behaves or looks, like your preferred language or region." },
            { title: "4. Third-Party Cookies", content: "Our website may include content and functionality from third-party services such as Google Maps. These third parties may set their own cookies. We have no control over these cookies and recommend you check the relevant third-party websites for more information about their cookies." },
            { title: "5. Managing Cookies", content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit our site." },
            { title: "6. How to Disable Cookies", content: "Most web browsers allow you to control cookies through their settings. You can typically find these settings in the 'Options' or 'Preferences' menu of your browser. For more information, please visit the help pages of your browser." },
            { title: "7. Changes to This Policy", content: "We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date." },
            { title: "8. Contact Us", content: "If you have any questions about our use of cookies, please contact us at: charmthaiuk@gmail.com or 2 George Street, Bath BA1 2EH." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-playfair text-xl font-bold text-[#C9A96E] uppercase tracking-widest mb-3">{section.title}</h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
