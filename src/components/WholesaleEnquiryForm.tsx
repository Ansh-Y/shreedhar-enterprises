import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle, Copy, AlertCircle, Sparkles } from 'lucide-react';

export const WholesaleEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    product: 'Shreedhar Camphor (Kapoor)',
    packSize: '50 g Jar Pack',
    quantity: '5 Cartons (500 units)',
    cityPin: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Listen for prefill events from product catalogue
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ product?: string; size?: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          product: customEvent.detail.product || prev.product,
          packSize: customEvent.detail.size || prev.packSize,
        }));
      }
    };
    window.addEventListener('prefill-enquiry', handlePrefill);
    return () => window.removeEventListener('prefill-enquiry', handlePrefill);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business or Store Name is required';
    
    // Indian Phone format validation: 10 digits
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.cityPin.trim()) {
      newErrors.cityPin = 'Delivery City or PIN Code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructFormattedMessage = () => {
    return (
      `*New Wholesale Trade Enquiry - Shreedhar Enterprises*\n` +
      `-----------------------------------------\n` +
      `👤 *Buyer Name:* ${formData.fullName.trim()}\n` +
      `🏪 *Business/Store:* ${formData.businessName.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      (formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}\n` : '') +
      `📦 *Interested Product:* ${formData.product}\n` +
      `⚖️ *Pack Size:* ${formData.packSize}\n` +
      `🔢 *Est. Quantity:* ${formData.quantity || 'To be discussed'}\n` +
      `📍 *Delivery City / PIN:* ${formData.cityPin.trim()}\n` +
      (formData.message.trim() ? `💬 *Remarks:* ${formData.message.trim()}\n` : '') +
      `-----------------------------------------\n` +
      `Please provide availability, wholesale pricing, carton logistics, and dispatch schedule.`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageText = constructFormattedMessage();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919910333806?text=${encodedMessage}`;

    setSubmittedMessage(messageText);

    // Open WhatsApp in a new tab explicitly on user action
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = () => {
    if (!validate()) return;
    const messageText = constructFormattedMessage();
    navigator.clipboard.writeText(messageText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-brand-brown-deep text-brand-cream relative overflow-hidden">
      {/* Background Decorative Gold Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown/80 border border-brand-gold/40 text-brand-gold text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-bold">Wholesale &amp; Distribution Desk</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Build a Business Relationship
          </h2>

          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed">
            Are you a retailer, wholesaler, distributor, or business buyer? Contact Shreedhar Enterprises to discuss product availability, wholesale pricing, pack formats, and order quantities.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-brand-brown rounded-3xl p-6 sm:p-10 border-2 border-brand-gold/40 shadow-elevated">
          
          {submittedMessage && (
            <div className="mb-8 p-4 rounded-2xl bg-brand-green/20 border border-brand-green text-brand-cream flex items-start gap-3 animate-fadeIn">
              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Trade Enquiry Formatted Successfully</h4>
                <p className="text-xs text-brand-cream/90 mt-1">
                  WhatsApp has opened with your prefilled business enquiry to <strong className="text-brand-gold font-semibold">+91 9910333806</strong>. You can also copy the formatted enquiry below for your records or email dispatch.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleWhatsAppSubmit} noValidate className="space-y-5">
            
            {/* Row 1: Name and Business */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                    errors.fullName ? 'border-brand-red' : 'border-brand-gold/30 focus:border-brand-gold'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-brand-red flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Business / Store Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sri Venkateswara Pooja Stores"
                  value={formData.businessName}
                  onChange={(e) => {
                    setFormData({ ...formData, businessName: e.target.value });
                    if (errors.businessName) setErrors({ ...errors, businessName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                    errors.businessName ? 'border-brand-red' : 'border-brand-gold/30 focus:border-brand-gold'
                  }`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-brand-red flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Phone Number (WhatsApp) <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs text-brand-gold font-bold">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9910333806"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, phone: val });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-brand-brown-deep/90 border text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                      errors.phone ? 'border-brand-red' : 'border-brand-gold/30 focus:border-brand-gold'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-brand-red flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Email Address <span className="text-brand-cream/50 text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="contact@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                    errors.email ? 'border-brand-red' : 'border-brand-gold/30 focus:border-brand-gold'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-brand-red flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Product, Pack Size and Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Interested Product
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-brand-brown-deep/90 border border-brand-gold/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <option value="Shreedhar Camphor (Kapoor)">Shreedhar Camphor</option>
                  <option value="Shreedhar Cup Dhoop Batti">Cup Dhoop Batti</option>
                  <option value="Both Camphor & Cup Dhoop Batti">Both Camphor &amp; Cup Dhoop</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Required Pack Size
                </label>
                <select
                  value={formData.packSize}
                  onChange={(e) => setFormData({ ...formData, packSize: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-brand-brown-deep/90 border border-brand-gold/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <option value="25 g Jar Pack">25 g Camphor (100/ctn)</option>
                  <option value="50 g Jar Pack">50 g Camphor (100/ctn)</option>
                  <option value="100 g Jar Pack">100 g Camphor (50/ctn)</option>
                  <option value="12-Piece Cup Dhoop Set">12-Pc Cup Dhoop (50/ctn)</option>
                  <option value="Mixed Assortment Cartons">Mixed Assortment Cartons</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                  Est. Order Quantity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 Cartons / 250 units"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border border-brand-gold/30 text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>
            </div>

            {/* Row 4: Delivery Location */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                Delivery City / PIN Code <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Secunderabad, Telangana - 500003"
                value={formData.cityPin}
                onChange={(e) => {
                  setFormData({ ...formData, cityPin: e.target.value });
                  if (errors.cityPin) setErrors({ ...errors, cityPin: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                  errors.cityPin ? 'border-brand-red' : 'border-brand-gold/30 focus:border-brand-gold'
                }`}
              />
              {errors.cityPin && (
                <p className="mt-1 text-xs text-brand-red flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.cityPin}
                </p>
              )}
            </div>

            {/* Row 5: Optional Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1.5">
                Additional Remarks / Specific Delivery Queries
              </label>
              <textarea
                rows={3}
                placeholder="Share any special packing needs, delivery dates, or GST billing queries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-brand-brown-deep/90 border border-brand-gold/30 text-white placeholder-brand-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>

            {/* Submit & Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-red to-brand-saffron hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-gold-glow flex items-center justify-center gap-2.5 transition-all transform active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                <span>Submit &amp; Open WhatsApp Chat</span>
              </button>

              <button
                type="button"
                onClick={handleCopyText}
                className="w-full sm:w-auto py-4 px-5 rounded-2xl bg-brand-brown-deep border border-brand-gold/50 hover:bg-brand-brown text-brand-cream font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                title="Copy formatted message to clipboard"
              >
                <Copy className="w-4 h-4 text-brand-gold" />
                <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Trade Enquiry'}</span>
              </button>
            </div>

            {/* Explanatory note */}
            <p className="text-center text-[11px] text-brand-cream/60 pt-2">
              🔒 Clicking "Submit &amp; Open WhatsApp" prepares a formatted business message and opens WhatsApp directly to our trade desk (+91 9910333806). No automatic or unsolicited messaging is performed.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};
