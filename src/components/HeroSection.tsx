import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Package, Sparkles } from 'lucide-react';
import camphorPackaging from '../assets/camphor-packaging.jpg';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-brand-cream-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-gold/20">
      {/* Decorative Traditional Background Glows & Motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-saffron/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      
      {/* Subtle traditional grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream-200/80 border border-brand-gold/50 text-brand-brown text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-ping" />
              <span className="font-medium text-brand-red uppercase tracking-wider">Authentic Indian Pooja Essentials</span>
              <span className="text-brand-brown/40">•</span>
              <span className="text-brand-brown/80 font-normal">B2B Wholesale &amp; Supply</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-brown leading-[1.15] mb-5">
              Pure Essentials.{' '}
              <span className="block mt-1 gold-gradient-text">
                Trusted Tradition.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-brown/85 font-normal leading-relaxed max-w-2xl mb-8">
              Bringing everyday pooja essentials closer to homes, retailers, and distribution partners through{' '}
              <strong className="font-semibold text-brand-red">Shreedhar Camphor</strong> and{' '}
              <strong className="font-semibold text-brand-brown">Cup Dhoop Batti</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollTo('products')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-red to-brand-saffron text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-gold-glow hover:brightness-105 transition-all transform active:scale-95"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('enquiry')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-cream border-2 border-brand-brown/20 text-brand-brown hover:border-brand-gold hover:bg-brand-cream-200 text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all transform active:scale-95"
              >
                <Package className="w-4 h-4 text-brand-red" />
                <span>Enquire for Wholesale</span>
              </button>
            </div>

            {/* Quick Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-gold/25 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider">100% Pure</h4>
                  <p className="text-[11px] text-brand-brown/70">Camphor &amp; Natural Aroma</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-brown flex-shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider">Carton Packed</h4>
                  <p className="text-[11px] text-brand-brown/70">Retail &amp; Bulk Supply</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider">Direct Wholesale</h4>
                  <p className="text-[11px] text-brand-brown/70">Transparent Pricing</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Official Product Packaging Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Decorative Halo & Traditional Border Frame */}
              <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-br from-brand-gold/40 via-brand-cream to-brand-saffron/20 shadow-elevated border border-brand-gold/40">
                
                {/* Inner Packaging Display Card */}
                <div className="relative rounded-2xl bg-brand-cream-50 p-3 sm:p-4 overflow-hidden border border-brand-gold/30">
                  
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-gold/20 text-xs">
                    <span className="font-semibold text-brand-brown uppercase tracking-wider text-[11px]">
                      Official Brand Packaging
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-brand-red bg-brand-red-light px-2 py-0.5 rounded-full text-[10px]">
                      50g Jar Pack • MRP ₹100
                    </span>
                  </div>

                  {/* Master Packaging Image */}
                  <div className="relative flex items-center justify-center rounded-xl overflow-hidden bg-white/70 py-2">
                    <img
                      src={camphorPackaging}
                      alt="Shreedhar Camphor 50g Authentic Packaging with Seal and Label"
                      className="w-full h-auto object-contain max-h-[380px] drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom Verification Strip */}
                  <div className="mt-3 pt-2.5 border-t border-brand-gold/20 flex items-center justify-between text-xs text-brand-brown/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green" />
                      <span className="font-medium text-[11px]">Naturally Pure • Safe &amp; Clean</span>
                    </div>
                    <a
                      href="https://wa.me/919910333806?text=Hello%20Shreedhar%20Enterprises%2C%20I%20saw%20your%20Shreedhar%20Camphor%20packaging%20and%20would%20like%20to%20place%20a%20trade%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-green hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Rates</span>
                    </a>
                  </div>

                </div>

                {/* Floating Highlight Tag */}
                <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-brand-brown text-brand-cream px-3.5 py-2 rounded-xl border border-brand-gold/60 shadow-lg flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-brown flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Secunderabad, Telangana</div>
                    <div className="text-[10px] text-brand-cream/80">Direct Supplier &amp; Wholesaler</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
