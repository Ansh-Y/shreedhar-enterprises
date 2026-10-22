import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WholesaleEnquiryForm } from './components/WholesaleEnquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export function App() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream-50 text-brand-brown">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Navbar onPartnerClick={scrollToEnquiry} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Trust & Business Highlights */}
        <TrustHighlights />

        {/* 5. About Shreedhar Enterprises */}
        <AboutSection />

        {/* 6. Product Showcase & Catalogue */}
        <ProductCatalogue />

        {/* 7. Why Choose Shreedhar */}
        <WhyChooseUs />

        {/* 8. Wholesale & Distribution Lead Generation */}
        <WholesaleEnquiryForm />

        {/* 9. Contact Desk & Office Location */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
