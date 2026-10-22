import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-brand-brown-deep text-brand-cream border-b border-brand-gold/30 text-xs sm:text-sm py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 animate-pulse" />
          <span className="font-medium tracking-wide">
            Wholesale &amp; Distribution Enquiries Welcome • Supplying Retailers &amp; Pooja Stores Across India
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href="tel:+919910333806"
            className="flex items-center gap-1.5 text-brand-cream/90 hover:text-brand-gold transition-colors"
            title="Call Shreedhar Enterprises"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>+91 9910333806</span>
          </a>
          <span className="text-brand-gold/40">|</span>
          <a
            href="mailto:shreedharenterprises2020@gmail.com"
            className="flex items-center gap-1.5 text-brand-cream/90 hover:text-brand-gold transition-colors hidden md:flex"
            title="Email Shreedhar Enterprises"
          >
            <Mail className="w-3.5 h-3.5 text-brand-gold" />
            <span>shreedharenterprises2020@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
