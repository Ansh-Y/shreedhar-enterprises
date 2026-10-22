import React from 'react';
import { Flame, Layers, Store, MessageCircle } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Pooja Essentials',
      description: 'Specializing in everyday pooja essentials, focusing on pure camphor (kapoor) and aromatic cup dhoop batti.',
      icon: Flame,
      color: 'text-brand-red',
      bg: 'bg-brand-red-light',
    },
    {
      title: 'Multiple Pack Sizes',
      description: 'Defined pack formats including 25g, 50g, and 100g camphor jars, alongside 12-piece cup dhoop sets.',
      icon: Layers,
      color: 'text-brand-saffron',
      bg: 'bg-brand-saffron-light',
    },
    {
      title: 'Retail & Wholesale',
      description: 'Structured carton packing designed for retailers, wholesalers, and pooja stores seeking straightforward trade margins.',
      icon: Store,
      color: 'text-brand-gold-dark',
      bg: 'bg-brand-gold-light',
    },
    {
      title: 'Business Enquiries Welcome',
      description: 'Direct trade communication via phone and WhatsApp for transparent pricing, carton quantities, and order placement.',
      icon: MessageCircle,
      color: 'text-brand-green',
      bg: 'bg-brand-green-light',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 bg-brand-cream-50 border border-brand-gold/30 hover:border-brand-gold hover:shadow-card transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-brand-brown mb-2 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-brown/75 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative bottom corner border */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-br-2xl">
                  <div className="w-4 h-4 bg-brand-gold/20 transform rotate-45 translate-x-2 translate-y-2 group-hover:bg-brand-gold/50 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
