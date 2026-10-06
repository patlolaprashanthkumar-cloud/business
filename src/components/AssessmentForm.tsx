import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useRouter } from '@/lib/router';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const STEPS = ['Your Details', 'About Your Business', 'Your Challenges', 'Review & Submit'];

const industryOptions = [
  'Technology / SaaS', 'Manufacturing', 'Retail / Distribution', 'Education',
  'Logistics', 'Professional Services', 'Healthcare', 'Hospitality', 'Other',
];

const stageOptions = [
  'Idea stage', 'Startup', 'Early-stage business', 'Established MSME',
  'Mid-sized company', 'Large enterprise',
];

const challengeOptions = [
  'Increasing sales', 'Generating qualified leads', 'Improving profitability',
  'Reducing operating costs', 'Hiring and team productivity', 'Market expansion',
  'Digital transformation', 'Business planning', 'Operational challenges', 'Other',
];

const serviceOptions = [
  'Business Strategy & Planning', 'Sales & Revenue Growth', 'Business Operations & Management',
  'Financial Planning & Profitability', 'Digital Transformation & Technology',
  'Market Expansion & Business Development', 'Startup & New Business Advisory',
  'Monthly Strategic Advisory',
];

const turnoverRanges = [
  'Under ₹50 lakh', '₹50 lakh - ₹2 crore', '₹2 crore - ₹10 crore',
  '₹10 crore - ₹50 crore', '₹50 crore - ₹100 crore', 'Above ₹100 crore',
];

const employeeRanges = [
  '1-10', '11-50', '51-200', '201-500', '501-1000', 'Above 1000',
];

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<Record<string, string>>({
    full_name: '', company_name: '', email: '', phone: '', city_state: '',
    industry: '', business_stage: '', turnover_range: '', employee_count: '',
    primary_challenge: '', preferred_contact_time: '', additional_info: '',
    consent: '',
  });
  const [services, setServices] = useState<string[]>([]);
  const { navigate } = useRouter();

  const update = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!data.full_name?.trim()) e.full_name = 'Required';
      if (!data.email?.trim()) e.email = 'Required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
      if (!data.phone?.trim()) e.phone = 'Required';
      else if (!/^[+\d\s()-]{8,}$/.test(data.phone)) e.phone = 'Invalid phone';
    }
    if (s === 1) {
      if (!data.city_state?.trim()) e.city_state = 'Required';
      if (!data.industry) e.industry = 'Required';
      if (!data.business_stage) e.business_stage = 'Required';
      if (!data.turnover_range) e.turnover_range = 'Required';
      if (!data.employee_count) e.employee_count = 'Required';
    }
    if (s === 2) {
      if (!data.primary_challenge) e.primary_challenge = 'Required';
      if (services.length === 0)
        e.services_required = 'Select at least one';
    }
    if (s === 3) {
      if (!data.consent) e.consent = 'Please provide consent to proceed';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setStatus('submitting');
    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.from('assessment_requests').insert({
          full_name: data.full_name,
          company_name: data.company_name || null,
          email: data.email,
          phone: data.phone,
          city_state: data.city_state,
          industry: data.industry,
          business_stage: data.business_stage,
          turnover_range: data.turnover_range,
          employee_count: data.employee_count,
          primary_challenge: data.primary_challenge,
          services_required: services.join(', '),
          preferred_contact_time: data.preferred_contact_time || null,
          additional_info: data.additional_info || null,
          consent: true,
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

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 border border-navy-50 shadow-sm text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">Assessment Submitted</h3>
        <p className="text-navy-600 mb-6">
          Thank you, {data.full_name}. We have received your business assessment request.
          Our team will review your information and contact you within 1-2 business days to
          schedule a detailed discussion.
        </p>
        <button onClick={() => navigate('/')} className="btn-primary">
          Return Home
        </button>
      </div>
    );
  }

  const toggleService = (s: string) => {
    setServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
    setErrors((prev) => { const n = { ...prev }; delete n.services_required; return n; });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    i < step ? 'bg-green-600 text-white' : i === step ? 'bg-navy-700 text-white' : 'bg-navy-100 text-navy-400'
                  }`}
                >
                  {i < step ? <Icon name="CheckCircle2" className="w-5 h-5" /> : i + 1}
                </div>
                <span className={`text-xs mt-2 hidden sm:block ${i === step ? 'text-navy-800 font-semibold' : 'text-navy-400'}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i < step ? 'bg-green-600' : 'bg-navy-100'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); if (step < STEPS.length - 1) next(); else handleSubmit(); }}
        className="bg-white rounded-xl p-6 md:p-8 border border-navy-50 shadow-sm"
        noValidate
      >
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <Icon name="AlertCircle" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">
              Something went wrong while submitting. Please try again or contact us directly.
            </p>
          </div>
        )}
        {!isSupabaseConfigured && (
          <div className="mb-6 p-3 bg-gold-50 border border-gold-200 rounded-lg flex items-start gap-2">
            <Icon name="AlertCircle" className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
            <p className="text-xs text-gold-800">
              Demo mode: submissions are not yet saved. Please contact us directly via phone or email.
            </p>
          </div>
        )}

        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Your Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label-base">Full Name *</label>
                <input value={data.full_name} onChange={(e) => update('full_name', e.target.value)} className="input-base" placeholder="Your name" />
                {errors.full_name && <p className="text-red-600 text-xs mt-1">{errors.full_name}</p>}
              </div>
              <div>
                <label className="label-base">Company Name</label>
                <input value={data.company_name} onChange={(e) => update('company_name', e.target.value)} className="input-base" placeholder="Company name" />
              </div>
              <div>
                <label className="label-base">Business Email *</label>
                <input value={data.email} onChange={(e) => update('email', e.target.value)} type="email" className="input-base" placeholder="you@company.com" />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="label-base">Phone Number *</label>
                <input value={data.phone} onChange={(e) => update('phone', e.target.value)} type="tel" className="input-base" placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">About Your Business</h3>
            <div>
              <label className="label-base">City and State *</label>
              <input value={data.city_state} onChange={(e) => update('city_state', e.target.value)} className="input-base" placeholder="e.g. Hyderabad, Telangana" />
              {errors.city_state && <p className="text-red-600 text-xs mt-1">{errors.city_state}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label-base">Industry *</label>
                <select value={data.industry} onChange={(e) => update('industry', e.target.value)} className="input-base" defaultValue="">
                  <option value="">Select industry</option>
                  {industryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.industry && <p className="text-red-600 text-xs mt-1">{errors.industry}</p>}
              </div>
              <div>
                <label className="label-base">Business Stage *</label>
                <select value={data.business_stage} onChange={(e) => update('business_stage', e.target.value)} className="input-base" defaultValue="">
                  <option value="">Select stage</option>
                  {stageOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.business_stage && <p className="text-red-600 text-xs mt-1">{errors.business_stage}</p>}
              </div>
              <div>
                <label className="label-base">Annual Turnover Range *</label>
                <select value={data.turnover_range} onChange={(e) => update('turnover_range', e.target.value)} className="input-base" defaultValue="">
                  <option value="">Select range</option>
                  {turnoverRanges.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.turnover_range && <p className="text-red-600 text-xs mt-1">{errors.turnover_range}</p>}
              </div>
              <div>
                <label className="label-base">Number of Employees *</label>
                <select value={data.employee_count} onChange={(e) => update('employee_count', e.target.value)} className="input-base" defaultValue="">
                  <option value="">Select range</option>
                  {employeeRanges.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.employee_count && <p className="text-red-600 text-xs mt-1">{errors.employee_count}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Your Challenges & Requirements</h3>
            <div>
              <label className="label-base">Primary Business Challenge *</label>
              <select value={data.primary_challenge} onChange={(e) => update('primary_challenge', e.target.value)} className="input-base" defaultValue="">
                <option value="">Select challenge</option>
                {challengeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              {errors.primary_challenge && <p className="text-red-600 text-xs mt-1">{errors.primary_challenge}</p>}
            </div>
            <div>
              <label className="label-base">Services Required * (select all that apply)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {serviceOptions.map((s) => {
                  const checked = services.includes(s);
                  return (
                    <label
                      key={s}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        checked ? 'border-navy-600 bg-navy-50' : 'border-navy-200 hover:border-navy-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(s)}
                        className="w-4 h-4 accent-navy-700"
                      />
                      <span className="text-sm text-navy-700">{s}</span>
                    </label>
                  );
                })}
              </div>
              {errors.services_required && <p className="text-red-600 text-xs mt-1">{errors.services_required}</p>}
            </div>
            <div>
              <label className="label-base">Preferred Consultation Date / Contact Time</label>
              <input value={data.preferred_contact_time} onChange={(e) => update('preferred_contact_time', e.target.value)} className="input-base" placeholder="e.g. Weekday mornings, or a specific date" />
            </div>
            <div>
              <label className="label-base">Additional Information</label>
              <textarea value={data.additional_info} onChange={(e) => update('additional_info', e.target.value)} rows={3} className="input-base" placeholder="Anything else you'd like us to know" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Review & Submit</h3>
            <div className="bg-navy-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-navy-400">Name:</span> <span className="font-medium text-navy-800">{data.full_name}</span></div>
                <div><span className="text-navy-400">Company:</span> <span className="font-medium text-navy-800">{data.company_name || '—'}</span></div>
                <div><span className="text-navy-400">Email:</span> <span className="font-medium text-navy-800">{data.email}</span></div>
                <div><span className="text-navy-400">Phone:</span> <span className="font-medium text-navy-800">{data.phone}</span></div>
                <div><span className="text-navy-400">City/State:</span> <span className="font-medium text-navy-800">{data.city_state}</span></div>
                <div><span className="text-navy-400">Industry:</span> <span className="font-medium text-navy-800">{data.industry}</span></div>
                <div><span className="text-navy-400">Stage:</span> <span className="font-medium text-navy-800">{data.business_stage}</span></div>
                <div><span className="text-navy-400">Turnover:</span> <span className="font-medium text-navy-800">{data.turnover_range}</span></div>
                <div><span className="text-navy-400">Employees:</span> <span className="font-medium text-navy-800">{data.employee_count}</span></div>
                <div><span className="text-navy-400">Challenge:</span> <span className="font-medium text-navy-800">{data.primary_challenge}</span></div>
              </div>
              <div>
                <span className="text-navy-400">Services:</span>{' '}
                <span className="font-medium text-navy-800">{services.join(', ')}</span>
              </div>
              {data.preferred_contact_time && (
                <div><span className="text-navy-400">Preferred time:</span> <span className="font-medium text-navy-800">{data.preferred_contact_time}</span></div>
              )}
            </div>
            <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
              data.consent ? 'border-navy-600 bg-navy-50' : 'border-navy-200'
            }`}>
              <input
                type="checkbox"
                checked={data.consent === 'yes'}
                onChange={(e) => update('consent', e.target.checked ? 'yes' : '')}
                className="w-4 h-4 accent-navy-700 mt-0.5"
              />
              <span className="text-sm text-navy-700">
                I consent to be contacted by E-Tailed Business Consulting regarding my assessment request,
                and I acknowledge that my information will be used solely for this purpose in accordance with
                the Privacy Policy. *
              </span>
            </label>
            {errors.consent && <p className="text-red-600 text-xs mt-1">{errors.consent}</p>}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <button type="button" onClick={prev} className="btn-outline">
              <Icon name="ArrowLeft" className="w-4 h-4" /> Back
            </button>
          ) : <div />}
          {step < STEPS.length - 1 ? (
            <button type="submit" className="btn-primary">
              Continue <Icon name="ArrowRight" className="w-4 h-4" />
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={status === 'submitting'} className="btn-gold disabled:opacity-60">
              {status === 'submitting' ? 'Submitting...' : 'Submit Assessment'}
              {status !== 'submitting' && <Icon name="Send" className="w-4 h-4" />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
