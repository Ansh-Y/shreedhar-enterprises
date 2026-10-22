import React from 'react';
import { Target, Box, MessageSquareShare, UserCheck, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Focused Product Range',
      description: 'Specializing in essential camphor (kapoor) and cup dhoop batti to ensure consistent product attention and dedicated supply.',
      icon: Target,
      tag: 'Specialized Supply',
    },
    {
      title: 'Trade-Friendly Formats',
      description: 'Defined pack sizes (25g, 50g, 100g jars and 12-piece sets) and standard master carton quantities (50 & 100 units) suited for retail shelving and inventory.',
      icon: Box,
      tag: 'Standard Logistics',
    },
    {
      title: 'Wholesale Enquiries',
      description: 'Direct, clear communication on availability, wholesale rates, carton counts, and required dispatch dates without intermediate layers.',
      icon: MessageSquareShare,
      tag: 'Transparent Terms',
    },
    {
      title: 'Personal Business Support',
      description: 'Connect directly with our team by phone or WhatsApp to discuss order volumes, product details, and store requirements.',
      icon: UserCheck,
      tag: 'Direct Access',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-brand-cream-50 border-b border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream-200 border border-brand-gold/50 text-brand-brown text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-brand-brown">Wholesale Advantages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown tracking-tight mb-4">
            A Reliable Partner for Everyday Pooja Essentials
          </h2>
          <p className="text-base text-brand-brown/80 leading-relaxed">
            Our approach is simple: pure products, standard packaging formats, and prompt trade communication for retailers, wholesalers, and pooja item stockists.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white border border-brand-gold/40 hover:border-brand-gold shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cream-100 border border-brand-gold/30 flex items-center justify-center text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-dark bg-brand-gold-light px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brand-brown mb-2 group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-brand-gold/20 flex items-center gap-1.5 text-[11px] font-semibold text-brand-brown/60 group-hover:text-brand-brown">
                  <span>Pooja Trade Supply</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
