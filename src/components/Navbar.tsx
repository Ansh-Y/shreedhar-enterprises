import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onPartnerClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Why Shreedhar', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-card border-b border-brand-gold/30 py-2.5'
          : 'bg-brand-cream/90 backdrop-blur-sm border-b border-brand-gold/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
          >
            <div className="relative w-11 h-14 sm:w-12 sm:h-16 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={logoImg}
                alt="Shreedhar Camphor Official Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-brand-red uppercase leading-tight group-hover:text-brand-saffron transition-colors">
                Shreedhar
              </span>
              <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest text-brand-brown">
                ENTERPRISES
              </span>
              <span className="text-[10px] text-brand-brown/70 font-medium tracking-wide uppercase">
                Pooja Essentials • B2B Wholesaler
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-medium text-sm text-brand-brown hover:text-brand-red transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919910333806?text=Hello%20Shreedhar%20Enterprises%2C%20I%20am%20interested%20in%20becoming%20a%20business%20partner.%20Please%20share%20wholesale%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-green hover:bg-brand-green-light rounded-full border border-brand-green/30 transition-colors"
              title="Quick WhatsApp Enquiry"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                if (onPartnerClick) {
                  onPartnerClick();
                } else {
                  handleNavClick('#enquiry');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-red to-brand-saffron text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-gold-glow hover:brightness-105 transition-all transform active:scale-95"
            >
              <span>Become a Business Partner</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+919910333806"
              className="p-2 text-brand-brown hover:text-brand-red rounded-lg"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-brown hover:text-brand-red hover:bg-brand-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-red" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-brand-cream border-t border-brand-gold/30 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-brand-brown font-medium hover:bg-brand-cream-200 hover:text-brand-red transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-brand-gold" />
              </a>
            ))}
            <div className="pt-3 border-t border-brand-gold/20 flex flex-col gap-2.5">
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#enquiry');
                }}
                className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-brand-red to-brand-saffron text-white font-semibold text-sm shadow-md"
              >
                Become a Business Partner
              </a>
              <a
                href="https://wa.me/919910333806?text=Hello%20Shreedhar%20Enterprises%2C%20I%20am%20contacting%20you%20from%20your%20website%20for%20wholesale%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-brand-green text-brand-green font-medium text-sm hover:bg-brand-green-light"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (9910333806)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
