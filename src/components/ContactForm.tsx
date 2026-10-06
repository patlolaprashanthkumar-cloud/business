import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = 'Required';
    if (!data.email?.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
    if (!data.message?.trim()) e.message = 'Required';
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
        const { error } = await supabase.from('contact_messages').insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: data.subject || null,
          message: data.message,
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
        <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Message Sent</h3>
        <p className="text-navy-600 mb-6">Thank you for reaching out. We will respond to your message shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline">Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 border border-navy-50 shadow-sm" noValidate>
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <Icon name="AlertCircle" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}
      {!isSupabaseConfigured && (
        <div className="mb-6 p-3 bg-gold-50 border border-gold-200 rounded-lg flex items-start gap-2">
          <Icon name="AlertCircle" className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <p className="text-xs text-gold-800">Demo mode: messages are not yet saved. Please contact us directly via phone or email.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ct-name" className="label-base">Name *</label>
          <input id="ct-name" name="name" type="text" className="input-base" placeholder="Your name" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="ct-email" className="label-base">Email *</label>
          <input id="ct-email" name="email" type="email" className="input-base" placeholder="you@company.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="ct-phone" className="label-base">Phone</label>
          <input id="ct-phone" name="phone" type="tel" className="input-base" placeholder="+91 98765 43210" />
        </div>
        <div>
          <label htmlFor="ct-subject" className="label-base">Subject</label>
          <input id="ct-subject" name="subject" type="text" className="input-base" placeholder="How can we help?" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="ct-message" className="label-base">Message *</label>
          <textarea id="ct-message" name="message" rows={5} className="input-base" placeholder="Your message" />
          {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
        </div>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full mt-6 disabled:opacity-60">
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        {status !== 'submitting' && <Icon name="Send" className="w-4 h-4" />}
      </button>
    </form>
  );
}
