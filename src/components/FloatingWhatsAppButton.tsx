import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Shreedhar Enterprises, I am contacting you from your website regarding wholesale supply of camphor and cup dhoop batti. Please share pricing and carton details.'
  );
  const whatsappUrl = `https://wa.me/919910333806?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-2 mr-1 hidden sm:flex items-center gap-2 bg-white text-brand-brown px-3 py-2 rounded-xl shadow-card border border-brand-gold/40 text-xs font-semibold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span>Wholesale Desk Online • Chat Now</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-brand-brown/40 hover:text-brand-brown p-0.5 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:bg-[#1EBE5D] transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-green/40"
        aria-label="Chat with Shreedhar Enterprises on WhatsApp"
        title="Chat with Shreedhar Enterprises on WhatsApp (+91 9910333806)"
      >
        {/* Radar pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 group-hover:opacity-0" />

        <MessageSquare className="w-7 h-7 fill-white stroke-none" />

        {/* Small verified badge on button */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-red border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
};
