'use client';

import { useEffect, useState } from 'react';

interface RequestSampleModalProps {
  sku: string;
  onClose: () => void;
}

export default function RequestSampleModal({ sku, onClose }: RequestSampleModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '10',
    notes: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — will integrate with contact form API in Phase 2
    alert(`Sample request submitted for ${sku}.\nWe will follow up at ${formData.email} within 24 hours.`);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[-1]" />

      {/* Modal */}
      <div className="bg-[#F7F4EF] rounded-xl max-w-lg w-full shadow-xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E0D8]">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Request Sample</h2>
            <p className="text-sm text-text-secondary mt-0.5">{sku}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#E8E8E0] transition-colors text-text-secondary hover:text-text-primary"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                Full Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-white border border-[#E5E0D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                Email <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-white border border-[#E5E0D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1">
              Company <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-white border border-[#E5E0D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]"
              placeholder="Company name"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1">
              Sample Quantity
            </label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-white border border-[#E5E0D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]"
            >
              <option value="5">5 units</option>
              <option value="10">10 units</option>
              <option value="20">20 units</option>
              <option value="50">50 units</option>
              <option value="100">100 units</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-text-primary mb-1">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-white border border-[#E5E0D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] resize-none"
              placeholder="Any specific requirements?"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-5 py-2.5 text-sm font-semibold bg-[#D4AF37] text-white rounded-md hover:bg-[#E8D58A] transition-colors"
            >
              Submit Sample Request
            </button>
            <p className="text-xs text-text-secondary mt-2 text-center">
              Sample turnaround: 3-7 days. Standard MOQ: 1,000 units.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
