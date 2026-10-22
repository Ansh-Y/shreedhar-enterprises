import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Sparkles, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const addressQuery = encodeURIComponent(
    '2-10-6/2/1, Rukmini Enclave Road, near Sanjeeva Reddy Function Hall, Macha Bolaram, Secunderabad, Telangana 500010'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream-200 border border-brand-gold/50 text-brand-brown text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-saffron" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-brand-brown">Direct Trade Access</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown tracking-tight mb-4">
            Contact Shreedhar Enterprises
          </h2>
          <p className="text-base text-brand-brown/80 leading-relaxed">
            Reach out directly to our commercial team for product availability, bulk quotations, dispatch timelines, and distribution terms.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Cards: 3 Contact Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-brand-cream-50 border border-brand-gold/40 shadow-sm hover:shadow-card transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red">
                    Call Direct
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-brown mt-0.5">
                    Phone / Trade Desk
                  </h3>
                  <a
                    href="tel:+919910333806"
                    className="inline-block mt-2 text-xl font-bold text-brand-brown hover:text-brand-red transition-colors"
                  >
                    +91 9910333806
                  </a>
                  <p className="text-xs text-brand-brown/70 mt-1">
                    Direct line for orders &amp; wholesale inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-brand-cream-50 border border-brand-gold/40 shadow-sm hover:shadow-card transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                    Instant Messaging
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-brown mt-0.5">
                    Official WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/919910333806?text=Hello%20Shreedhar%20Enterprises%2C%20I%20am%20interested%20in%20your%20pooja%20essentials%20wholesale%20rates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-brand-green text-white text-xs font-semibold hover:bg-brand-green-hover transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-brand-brown/70 mt-2">
                    Quick product quotes &amp; carton availability
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-brand-cream-50 border border-brand-gold/40 shadow-sm hover:shadow-card transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-light flex items-center justify-center text-brand-gold-dark flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-dark">
                    Official Correspondence
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-brown mt-0.5">
                    Email Address
                  </h3>
                  <a
                    href="mailto:shreedharenterprises2020@gmail.com"
                    className="inline-block mt-2 text-sm sm:text-base font-semibold text-brand-brown hover:text-brand-red break-all transition-colors"
                  >
                    shreedharenterprises2020@gmail.com
                  </a>
                  <p className="text-xs text-brand-brown/70 mt-1">
                    Send formal purchase orders and company briefs
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Registered Office & Verified Address Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-cream-50 border-2 border-brand-gold/40 p-6 sm:p-8 shadow-card flex flex-col h-full">
              
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red">
                      Official Registered Office
                    </span>
                    <h3 className="font-serif text-xl font-bold text-brand-brown">
                      Shreedhar Enterprises
                    </h3>
                    <address className="not-italic text-sm text-brand-brown/85 leading-relaxed mt-1">
                      2-10-6/2/1, Rukmini Enclave Road, near Sanjeeva Reddy Function Hall,<br />
                      Macha Bolaram, Secunderabad, Medchal–Malkajgiri,<br />
                      Telangana – 500010, India.
                    </address>
                  </div>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-gold/40 text-xs font-semibold text-brand-brown hover:bg-brand-cream-100 hover:text-brand-red transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-brand-red" />
                  <span>Open Maps</span>
                </a>
              </div>

              {/* Embedded Interactive Map Frame */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-brand-gold/40 shadow-inner bg-brand-cream-100 relative">
                <iframe
                  title="Shreedhar Enterprises Location Map"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-brown/75">
                <span>Direct dispatch from Secunderabad warehouse</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-red hover:underline"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
