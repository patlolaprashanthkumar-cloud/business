import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = 'Please enter your name';
    if (!data.email?.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email';
    if (!data.phone?.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+\d\s()-]{8,}$/.test(data.phone)) e.phone = 'Please enter a valid phone number';
    if (!data.topic?.trim()) e.topic = 'Please select a consultation topic';
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const e2 = validate(data);
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    setStatus('submitting');
    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.from('consultation_requests').insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || null,
          preferred_date: data.preferred_date || null,
          preferred_time: data.preferred_time || null,
          topic: data.topic,
          message: data.message || null,
        });
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 border border-navy-50 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">Request Received</h3>
        <p className="text-navy-600 mb-6">
          Thank you for your consultation request. We will contact you shortly to confirm your appointment.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 border border-navy-50 shadow-sm" noValidate>
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <Icon name="AlertCircle" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">
            Something went wrong while submitting your request. Please try again or contact us directly by phone or email.
          </p>
        </div>
      )}
      {!isSupabaseConfigured && (
        <div className="mb-6 p-3 bg-gold-50 border border-gold-200 rounded-lg flex items-start gap-2">
          <Icon name="AlertCircle" className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <p className="text-xs text-gold-800">
            Demo mode: form submissions are not yet saved to a backend. Please contact us directly via phone or email.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className="label-base">Full Name *</label>
          <input id="c-name" name="name" type="text" className="input-base" placeholder="Your name" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="label-base">Email *</label>
          <input id="c-email" name="email" type="email" className="input-base" placeholder="you@company.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="label-base">Phone *</label>
          <input id="c-phone" name="phone" type="tel" className="input-base" placeholder="+91 98765 43210" />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="c-company" className="label-base">Company</label>
          <input id="c-company" name="company" type="text" className="input-base" placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="c-date" className="label-base">Preferred Date</label>
          <input id="c-date" name="preferred_date" type="date" className="input-base" />
        </div>
        <div>
          <label htmlFor="c-time" className="label-base">Preferred Time</label>
          <select id="c-time" name="preferred_time" className="input-base" defaultValue="">
            <option value="">Select a time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
            <option value="evening">Evening (3 PM - 6 PM)</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="c-topic" className="label-base">Consultation Topic *</label>
          <select id="c-topic" name="topic" className="input-base" defaultValue="">
            <option value="">Select a topic</option>
            <option value="business-strategy">Business Strategy & Planning</option>
            <option value="sales-revenue">Sales & Revenue Growth</option>
            <option value="operations">Business Operations & Management</option>
            <option value="financial">Financial Planning & Profitability</option>
            <option value="digital">Digital Transformation & Technology</option>
            <option value="market-expansion">Market Expansion & Business Development</option>
            <option value="startup">Startup & New Business Advisory</option>
            <option value="monthly-advisory">Monthly Strategic Advisory</option>
            <option value="general">General Consultation</option>
          </select>
          {errors.topic && <p className="text-red-600 text-xs mt-1">{errors.topic}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="c-message" className="label-base">Additional Information</label>
          <textarea id="c-message" name="message" rows={4} className="input-base" placeholder="Tell us briefly about your business and what you'd like to discuss" />
        </div>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full mt-6 disabled:opacity-60">
        {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
        {status !== 'submitting' && <Icon name="Send" className="w-4 h-4" />}
      </button>
    </form>
  );
}
