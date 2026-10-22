import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-brown-deep text-brand-cream border-t border-brand-gold/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-gold/20">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-16 flex-shrink-0 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Shreedhar Official Seal"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-brand-gold uppercase block leading-tight">
                  Shreedhar
                </span>
                <span className="font-cinzel text-xs font-semibold tracking-widest text-brand-cream/90 block">
                  ENTERPRISES
                </span>
                <span className="text-[10px] text-brand-cream/60 tracking-wider uppercase">
                  Supplier &amp; Wholesaler
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-cream/80 leading-relaxed max-w-sm">
              Supplier and wholesaler of selected pooja essentials, including pure camphor (kapoor) and aromatic cup dhoop batti. Dedicated to serving retailers, pooja stores, and regional distribution partners with defined product formats.
            </p>

            <div className="pt-2 text-xs font-serif italic text-brand-gold">
              "Shreedhar Enterprises — Pooja Essentials for Everyday Devotion."
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('hero')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('why-us')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  Why Shreedhar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('enquiry')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  Wholesale Enquiry
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors"
                >
                  Contact Details
                </button>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1.5">
              Pooja Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors text-left"
                >
                  Shreedhar Camphor (25g Jar)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors text-left"
                >
                  Shreedhar Camphor (50g Jar)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors text-left"
                >
                  Shreedhar Camphor (100g Jar)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('products')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors text-left"
                >
                  Cup Dhoop Batti (12-Piece Set)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('enquiry')}
                  className="text-brand-cream/75 hover:text-brand-gold transition-colors text-left font-medium text-brand-gold"
                >
                  Bulk Master Cartons
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1.5">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs text-brand-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  2-10-6/2/1, Rukmini Enclave Road, near Sanjeeva Reddy Function Hall, Macha Bolaram, Secunderabad, Medchal–Malkajgiri, Telangana – 500010.
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+919910333806"
                  className="hover:text-brand-gold transition-colors font-medium"
                >
                  +91 9910333806
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a
                  href="https://wa.me/919910333806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors font-medium text-brand-green"
                >
                  WhatsApp: 9910333806
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href="mailto:shreedharenterprises2020@gmail.com"
                  className="hover:text-brand-gold transition-colors break-all"
                >
                  shreedharenterprises2020@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/60">
          <div>
            &copy; {currentYear} Shreedhar Enterprises. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Wholesale &amp; Distribution Portal</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brown-light text-brand-gold hover:text-white transition-all border border-brand-gold/30"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
