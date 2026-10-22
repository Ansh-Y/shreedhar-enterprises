import React, { useState } from 'react';
import { Sparkles, MessageCircle, FileText, CheckCircle2, Shield, Info, ArrowRight } from 'lucide-react';
import camphorPackaging from '../assets/camphor-packaging.jpg';
import cupDhoopImg from '../assets/cup-dhoop.png';

interface CamphorSizeOption {
  size: '25 g' | '50 g' | '100 g';
  mrp: number;
  wholesale: number;
  carton: number;
  popular?: boolean;
  notes?: string;
}

export const ProductCatalogue: React.FC = () => {
  const [selectedCamphorSize, setSelectedCamphorSize] = useState<'25 g' | '50 g' | '100 g'>('50 g');

  const camphorSizes: CamphorSizeOption[] = [
    {
      size: '25 g',
      mrp: 50,
      wholesale: 45,
      carton: 100,
      notes: 'Entry-level retail jar format',
    },
    {
      size: '50 g',
      mrp: 100,
      wholesale: 80,
      carton: 100,
      popular: true,
      notes: 'Matches supplied master packaging',
    },
    {
      size: '100 g',
      mrp: 200,
      wholesale: 150,
      carton: 50,
      notes: 'High-volume pooja household pack',
    },
  ];

  const currentCamphor = camphorSizes.find((item) => item.size === selectedCamphorSize)!;

  // Prefilled WhatsApp URLs
  const camphorWhatsAppMessage = encodeURIComponent(
    `Hello Shreedhar Enterprises, I am interested in your Shreedhar Camphor (${currentCamphor.size} pack). Please share the current wholesale prices, carton availability, minimum order quantity, and delivery details.`
  );
  const camphorWhatsAppUrl = `https://wa.me/919910333806?text=${camphorWhatsAppMessage}`;

  const cupDhoopWhatsAppMessage = encodeURIComponent(
    `Hello Shreedhar Enterprises, I am interested in your Cup Dhoop Batti 12-piece set (Pure Fragrance & Divine Vibes). Please share current wholesale pricing, carton quantities, availability, and delivery details.`
  );
  const cupDhoopWhatsAppUrl = `https://wa.me/919910333806?text=${cupDhoopWhatsAppMessage}`;

  const scrollToEnquiry = (productName: string, sizeName: string) => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to preselect in enquiry form if desired
      window.dispatchEvent(
        new CustomEvent('prefill-enquiry', {
          detail: { product: productName, size: sizeName },
        })
      );
    }
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-b border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream-200 border border-brand-gold/50 text-brand-brown text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-saffron" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-brand-brown">Wholesale Product Catalogue</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown tracking-tight mb-4">
            Curated Pooja Essentials for Retail &amp; Trade
          </h2>
          <p className="text-base text-brand-brown/80 leading-relaxed">
            Supplying genuine, high-quality camphor jars and aromatic cup dhoop batti in confirmed pack sizes with clear carton packing for business buyers across India.
          </p>
        </div>

        {/* Indicative Pricing Notice Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 rounded-xl bg-brand-cream border border-brand-gold/40 flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-saffron flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-brand-brown/85 leading-relaxed">
            <strong className="font-semibold text-brand-brown">Trade Notice:</strong> Listed wholesale prices are indicative commercial rates provided in the official company portfolio. Final trade rates, transport logistics, and volume discounts should be confirmed directly with our sales team prior to purchase order placement.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ========================================================= */}
          {/* PRODUCT 1: SHREEDHAR CAMPHOR (KAPOOR) */}
          {/* ========================================================= */}
          <div className="rounded-3xl bg-brand-cream-50 border-2 border-brand-gold/40 p-6 sm:p-8 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold tracking-wider uppercase">
                100% Pure Camphor
              </span>
              <span className="text-xs text-brand-brown/70 font-medium">
                Pooja &amp; Religious Grade
              </span>
            </div>

            {/* Product Image Area */}
            <div className="relative rounded-2xl bg-white border border-brand-gold/30 p-4 mb-6 flex flex-col items-center justify-center overflow-hidden group">
              <div className="w-full flex items-center justify-center py-2">
                <img
                  src={camphorPackaging}
                  alt="Shreedhar Camphor Official 50g Packaging with Seal and Label"
                  className="max-h-64 sm:max-h-72 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-3 left-3 bg-brand-cream-100/90 backdrop-blur-sm border border-brand-gold/50 px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-brown uppercase">
                Jar Packaging
              </div>
              <div className="absolute bottom-3 right-3 bg-brand-red text-white px-2.5 py-0.5 rounded text-[11px] font-bold shadow-sm">
                Matches 50g Master Artwork
              </div>
            </div>

            {/* Title & Details */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Shreedhar Camphor
                </h3>
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                  శ్రీధర్ కర్పూర్ • Kapoor
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-brown/75 mb-4">
                High-purity round camphor tablets for sacred rituals and everyday aarti. Formulated to burn cleanly with minimal smoke and zero ash, emitting a divine, purifying fragrance.
              </p>

              {/* Quality Badges from packaging */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Naturally Pure
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Fresh Fragrance
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Safe &amp; Clean
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <Shield className="w-3 h-3 text-brand-saffron" /> 100% Pure Guarantee
                </span>
              </div>

              {/* Functional Size Selector Chips */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {camphorSizes.map((opt) => {
                    const isSelected = selectedCamphorSize === opt.size;
                    return (
                      <button
                        key={opt.size}
                        type="button"
                        onClick={() => setSelectedCamphorSize(opt.size)}
                        className={`relative py-2.5 px-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-brand-brown text-white border-brand-gold shadow-md'
                            : 'bg-white text-brand-brown border-brand-gold/40 hover:border-brand-gold hover:bg-brand-cream-100'
                        }`}
                      >
                        {opt.popular && (
                          <span className="absolute -top-2.5 bg-brand-red text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                            Featured
                          </span>
                        )}
                        <span className="text-sm font-bold">{opt.size}</span>
                        <span className={`text-[10px] ${isSelected ? 'text-brand-gold' : 'text-brand-brown/70'}`}>
                          MRP ₹{opt.mrp}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Commercial Details Box */}
              <div className="p-4 rounded-xl bg-white border border-brand-gold/40 mb-6">
                <div className="grid grid-cols-3 gap-3 text-center divide-x divide-brand-gold/20">
                  <div>
                    <span className="text-[10px] text-brand-brown/70 uppercase font-semibold block">Retail MRP</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-brown">₹{currentCamphor.mrp}</span>
                    <span className="text-[10px] text-brand-brown/60 block">per jar</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-red uppercase font-bold block">Wholesale Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-red">₹{currentCamphor.wholesale}</span>
                    <span className="text-[10px] text-brand-brown/60 block">indicative</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-brown/70 uppercase font-semibold block">Carton Packing</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-brown">{currentCamphor.carton}</span>
                    <span className="text-[10px] text-brand-brown/60 block">units / carton</span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-brand-gold/20 flex items-center justify-between text-[11px] text-brand-brown/80">
                  <span>Selected format: <strong>{currentCamphor.size} Jar</strong></span>
                  <span className="text-brand-green font-semibold">Retail Margin: ₹{currentCamphor.mrp - currentCamphor.wholesale}/unit</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-gold/30">
              <a
                href={camphorWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToEnquiry('Shreedhar Camphor', currentCamphor.size)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-cream border border-brand-gold/60 hover:bg-brand-cream-200 text-brand-brown font-semibold text-xs sm:text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-brand-red" />
                <span>Request Wholesale Rates</span>
              </button>
            </div>

          </div>

          {/* ========================================================= */}
          {/* PRODUCT 2: SHREEDHAR CUP DHOOP BATTI */}
          {/* ========================================================= */}
          <div className="rounded-3xl bg-brand-cream-50 border-2 border-brand-gold/40 p-6 sm:p-8 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-brown text-brand-gold text-[11px] font-bold tracking-wider uppercase border border-brand-gold/40">
                12-Piece Set
              </span>
              <span className="text-xs text-brand-brown/70 font-medium">
                Fragrant Agarbatti Dhoop
              </span>
            </div>

            {/* Product Image Area */}
            <div className="relative rounded-2xl bg-white border border-brand-gold/30 p-4 mb-6 flex flex-col items-center justify-center overflow-hidden group">
              <div className="w-full flex items-center justify-center py-2">
                <img
                  src={cupDhoopImg}
                  alt="Shreedhar Dhoop Cup Agarbatti Circular Artwork"
                  className="max-h-64 sm:max-h-72 w-auto object-contain rounded-full shadow-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-3 left-3 bg-brand-cream-100/90 backdrop-blur-sm border border-brand-gold/50 px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-brown uppercase">
                Official Label Artwork
              </div>
              <div className="absolute bottom-3 right-3 bg-brand-brown text-brand-cream px-2.5 py-0.5 rounded text-[11px] font-bold shadow-sm">
                Pure Fragrance &amp; Divine Vibes
              </div>
            </div>

            {/* Title & Details */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Shreedhar Cup Dhoop Batti
                </h3>
                <span className="text-xs font-semibold text-brand-saffron uppercase tracking-wider">
                  Dhoop Cup Agarbatti
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-brown/75 mb-4">
                Traditional cup dhoop infused with natural herbs, resins, and pure fragrant oils. Designed to provide steady, aromatic smoke for temples, daily pooja rituals, meditation, and spiritual gatherings.
              </p>

              {/* Quality Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Natural Ingredients
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Long Lasting Fragrance
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-gold/30 text-[11px] font-medium text-brand-brown">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" /> Perfect for Puja &amp; Meditation
                </span>
              </div>

              {/* Pack Formats & Variants Box */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
                  Pack Format &amp; Fragrance Variants:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border-2 border-brand-gold/60 text-center">
                    <span className="text-[10px] text-brand-brown/70 uppercase block font-semibold">Standard Pack</span>
                    <span className="text-sm font-bold text-brand-brown">12-Piece Cup Set</span>
                    <span className="text-[10px] text-brand-red block font-medium">Ready Retail Format</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border-2 border-brand-gold/40 text-center">
                    <span className="text-[10px] text-brand-brown/70 uppercase block font-semibold">Fragrance Options</span>
                    <span className="text-sm font-bold text-brand-brown">Pure &amp; Divine</span>
                    <span className="text-[10px] text-brand-brown/70 block">Dual Variant Blend</span>
                  </div>
                </div>
              </div>

              {/* Commercial Details Box */}
              <div className="p-4 rounded-xl bg-white border border-brand-gold/40 mb-6">
                <div className="grid grid-cols-3 gap-3 text-center divide-x divide-brand-gold/20">
                  <div>
                    <span className="text-[10px] text-brand-brown/70 uppercase font-semibold block">Retail MRP</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-brown">₹60</span>
                    <span className="text-[10px] text-brand-brown/60 block">per 12-pc set</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-red uppercase font-bold block">Wholesale Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-red">₹45</span>
                    <span className="text-[10px] text-brand-brown/60 block">indicative</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-brown/70 uppercase font-semibold block">Carton Packing</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-brown">50</span>
                    <span className="text-[10px] text-brand-brown/60 block">units / carton</span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-brand-gold/20 flex items-center justify-between text-[11px] text-brand-brown/80">
                  <span>Carton specification: <strong>50 Sets per Master Carton</strong></span>
                  <span className="text-brand-green font-semibold">Retail Margin: ₹15/set</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-gold/30">
              <a
                href={cupDhoopWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire About Cup Dhoop Batti</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToEnquiry('Cup Dhoop Batti', '12-Piece Set')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-cream border border-brand-gold/60 hover:bg-brand-cream-200 text-brand-brown font-semibold text-xs sm:text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-brand-red" />
                <span>Wholesale Details</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Trade Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-cream-100 border border-brand-gold/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-brand-brown">
              Need custom carton combinations or bulk distribution terms?
            </h4>
            <p className="text-xs sm:text-sm text-brand-brown/75">
              We cater to bulk retail orders, regional distributors, and religious stores.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToEnquiry('Both Camphor & Cup Dhoop', 'Bulk Mix')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-semibold shadow-md transition-all whitespace-nowrap"
          >
            <span>Discuss Bulk Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
