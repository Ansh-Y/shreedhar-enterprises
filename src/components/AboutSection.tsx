import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import cupDhoopImg from '../assets/cup-dhoop.png';
import logoImg from '../assets/logo.png';

export const AboutSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-cream-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Cup Dhoop circular artwork */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white to-brand-cream-100 border border-brand-gold/40 shadow-card text-center">
                
                {/* Traditional lotus icon badge */}
                <div className="w-16 h-16 mx-auto mb-4 p-2 bg-brand-cream rounded-full border border-brand-gold shadow-sm flex items-center justify-center">
                  <img
                    src={logoImg}
                    alt="Shreedhar Seal"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-brand-red/30 via-brand-gold to-brand-saffron/40 shadow-elevated">
                  <div className="w-full h-full rounded-full overflow-hidden bg-brand-brown-deep border-2 border-brand-gold/50 flex items-center justify-center">
                    <img
                      src={cupDhoopImg}
                      alt="Shreedhar Dhoop Cup Agarbatti Authentic Artwork"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h4 className="font-serif text-lg font-bold text-brand-brown">
                    Cup Dhoop Batti &amp; Camphor
                  </h4>
                  <p className="text-xs text-brand-brown/70 mt-1">
                    Pure Fragrance • Divine Vibes • 100% Pooja Grade
                  </p>
                </div>

                {/* Floating Location Badge */}
                <div className="mt-5 pt-4 border-t border-brand-gold/20 flex items-center justify-center gap-2 text-xs font-semibold text-brand-brown/80">
                  <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>Secunderabad, Medchal–Malkajgiri, Telangana</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-brown text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-saffron" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-brand-brown">About Shreedhar Enterprises</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown tracking-tight mb-6">
              Tradition in Every Offering
            </h2>

            {/* Verbatim Core Description */}
            <p className="text-base sm:text-lg text-brand-brown/90 leading-relaxed mb-6 font-medium">
              Shreedhar Enterprises is a supplier and wholesaler of selected pooja essentials, including camphor and cup dhoop batti. We offer defined product formats for retailers, wholesalers, and distribution partners, with a focus on making product and trade enquiries straightforward.
            </p>

            <p className="text-sm sm:text-base text-brand-brown/75 leading-relaxed mb-8">
              Pooja rituals require purity and devotion. Whether it is our 100% pure camphor that burns cleanly without leaving black residue, or our cup dhoop batti formulated with natural fragrant ingredients for long-lasting aroma, our products are curated to meet the expectations of devotees and the business needs of retailers.
            </p>

            {/* Key Business Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-gold/20">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-brown font-medium">
                  Defined carton sizes (50 &amp; 100 units)
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-gold/20">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-brown font-medium">
                  Verified commercial wholesale pricing
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-gold/20">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-brown font-medium">
                  Reliable packaging with printed retail MRP
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-gold/20">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-brown font-medium">
                  Direct phone &amp; WhatsApp communication
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-brown text-brand-cream hover:bg-brand-brown-deep border border-brand-gold/40 text-sm sm:text-base font-semibold shadow-md hover:shadow-card transition-all transform active:scale-95"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
