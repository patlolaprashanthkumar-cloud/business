import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ProposalRequestModal({
  packageName,
  onClose,
}: {
  packageName: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = 'Required';
    if (!data.email?.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
    if (!data.phone?.trim()) e.phone = 'Required';
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
        const { error } = await supabase.from('proposal_requests').insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || null,
          package_name: packageName,
          message: data.message || null,
        });
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-navy-50">
          <h3 className="font-serif text-xl font-bold text-navy-900">
            Request Custom Proposal
          </h3>
          <button onClick={onClose} className="p-2 text-navy-400 hover:text-navy-700 rounded-lg hover:bg-navy-50 transition-colors" aria-label="Close">
            <Icon name="X" className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle2" className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="font-serif text-lg font-bold text-navy-900 mb-2">Request Received</h4>
              <p className="text-navy-600 text-sm mb-4">
                Thank you. We will prepare a custom proposal for the <strong>{packageName}</strong> package and contact you shortly.
              </p>
              <button onClick={onClose} className="btn-primary">Close</button>
            </div>
          ) : (
            <>
              <p className="text-sm text-navy-600 mb-4">
                You are requesting a custom proposal for: <strong className="text-navy-800">{packageName}</strong>
              </p>
              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                  <Icon name="AlertCircle" className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
                </div>
              )}
              {!isSupabaseConfigured && (
                <div className="mb-4 p-3 bg-gold-50 border border-gold-200 rounded-lg flex items-start gap-2">
                  <Icon name="AlertCircle" className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-gold-800">Demo mode: requests are not yet saved. Please contact us directly.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <label className="label-base">Name *</label>
                    <input name="name" type="text" className="input-base" placeholder="Your name" />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="label-base">Email *</label>
                    <input name="email" type="email" className="input-base" placeholder="you@company.com" />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="label-base">Phone *</label>
                    <input name="phone" type="tel" className="input-base" placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="label-base">Company</label>
                    <input name="company" type="text" className="input-base" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="label-base">Message</label>
                    <textarea name="message" rows={3} className="input-base" placeholder="Tell us about your business and requirements" />
                  </div>
                </div>
                <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full mt-6 disabled:opacity-60">
                  {status === 'submitting' ? 'Sending...' : 'Request Proposal'}
                  {status !== 'submitting' && <Icon name="Send" className="w-4 h-4" />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
