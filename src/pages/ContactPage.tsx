import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/Icon';
import { ConsultationForm } from '@/components/ConsultationForm';
import { ContactForm } from '@/components/ContactForm';
import { Link } from '@/lib/router';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

type ActiveForm = 'message' | 'consultation' | null;

export function ContactPage() {
  const [activeForm, setActiveForm] = useState<ActiveForm>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeForm && formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeForm]);

  const toggleForm = (formType: 'message' | 'consultation') => {
    setActiveForm((prev) => (prev === formType ? null : formType));
  };

  return (
    <>
      {/* Hero section */}
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            Book a consultation, request a business assessment, or simply reach out —
            we're here to help your business grow.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 bg-white border-b border-navy-100">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={`mailto:${SITE.email}`} className="card-base p-6 text-center group">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon name="Mail" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Email</h3>
              <p className="text-xs text-navy-600 break-all">{SITE.email}</p>
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="card-base p-6 text-center group">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon name="Phone" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Phone</h3>
              <p className="text-xs text-navy-600">{SITE.phone}</p>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-base p-6 text-center group">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon name="MessageCircle" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">WhatsApp</h3>
              <p className="text-xs text-navy-600">Chat with us</p>
            </a>
            <div className="card-base p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Website</h3>
              <p className="text-xs text-navy-600">{SITE.website}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Consultant Profile Section & Interactive Forms */}
      <section className="section-padding bg-navy-50 min-h-[600px]">
        <div className="container-base">
          {/* Centered Patlola Prashant Kumar Profile Box */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-7 sm:p-9 border border-navy-100 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-navy-100">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-1">
                  {SITE.consultant}
                </h2>
                <p className="text-sm text-gold-600 font-semibold tracking-wide">
                  {SITE.designation}
                </p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-navy-50 text-navy-700 border border-navy-200">
                Primary Contact
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-navy-600">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-navy-50 gap-1">
                <span className="font-medium text-navy-800">Company:</span>
                <span className="text-navy-600">{SITE.companyName}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-navy-50 gap-1">
                <span className="font-medium text-navy-800">Email:</span>
                <a href={`mailto:${SITE.email}`} className="text-navy-600 hover:text-gold-600 transition-colors break-all">
                  {SITE.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-navy-50 gap-1">
                <span className="font-medium text-navy-800">Phone:</span>
                <a href={`tel:${SITE.phoneRaw}`} className="text-navy-600 hover:text-gold-600 transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-navy-50 gap-1">
                <span className="font-medium text-navy-800">Website:</span>
                <span className="text-navy-600">{SITE.website}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-navy-50 gap-1">
                <span className="font-medium text-navy-800">Service Coverage:</span>
                <span className="text-navy-600">{SITE.coverage}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <span className="text-xs text-navy-400">Direct Consultation</span>
            </div>
          </div>

          {/* Action Buttons to open corresponding form */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => toggleForm('message')}
              className={`w-full sm:w-1/2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm ${
                activeForm === 'message'
                  ? 'bg-navy-900 text-white shadow-md ring-2 ring-navy-900 ring-offset-2'
                  : 'bg-white text-navy-900 border border-navy-200 hover:border-gold-500 hover:bg-navy-50 hover:-translate-y-0.5'
              }`}
            >
              <Icon name="Mail" className={`w-4 h-4 ${activeForm === 'message' ? 'text-gold-400' : 'text-gold-600'}`} />
              Send Us a Message
              {activeForm === 'message' && (
                <span className="ml-auto text-xs bg-navy-800 text-gold-300 px-2 py-0.5 rounded-full">Open</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => toggleForm('consultation')}
              className={`w-full sm:w-1/2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm ${
                activeForm === 'consultation'
                  ? 'bg-gold-500 text-navy-950 shadow-md ring-2 ring-gold-400 ring-offset-2'
                  : 'btn-gold hover:-translate-y-0.5'
              }`}
            >
              <Icon name="CalendarCheck" className="w-4 h-4" />
              Book a Consultation
              {activeForm === 'consultation' && (
                <span className="ml-auto text-xs bg-navy-950 text-gold-300 px-2 py-0.5 rounded-full">Open</span>
              )}
            </button>
          </div>

          {/* Interactive Form Display (Only the selected form opens, with close button) */}
          {activeForm && (
            <div ref={formSectionRef} className="mt-8 max-w-2xl mx-auto animate-fade-in">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-200 shadow-xl relative">
                {/* Header with Title and Close Button */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-navy-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center text-gold-700">
                      <Icon
                        name={activeForm === 'message' ? 'Mail' : 'CalendarCheck'}
                        className="w-5 h-5 text-gold-700"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">
                        {activeForm === 'message' ? 'Send Us a Message' : 'Book a Consultation'}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-500">
                        {activeForm === 'message'
                          ? 'Fill out the form below and we will get back to you shortly.'
                          : 'Schedule a strategic consultation session with our advisory team.'}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveForm(null)}
                    aria-label="Close form"
                    className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-600 hover:text-navy-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                    title="Close form"
                  >
                    <Icon name="X" className="w-5 h-5" />
                  </button>
                </div>

                {/* Form Content */}
                <div>
                  {activeForm === 'message' ? <ContactForm /> : <ConsultationForm />}
                </div>

                {/* Footer close / switch options */}
                <div className="mt-6 pt-4 border-t border-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-navy-500">
                  <span>
                    Currently viewing: <strong className="text-navy-800">{activeForm === 'message' ? 'Message Form' : 'Consultation Booking'}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveForm(null)}
                    className="font-semibold text-navy-700 hover:text-gold-600 flex items-center gap-1.5 cursor-pointer transition-colors self-start sm:self-auto"
                  >
                    <Icon name="ArrowLeft" className="w-3.5 h-3.5" />
                    Close and return to profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Structured assessment callout */}
          <div className="mt-12 max-w-2xl mx-auto p-6 sm:p-7 bg-navy-800 rounded-2xl text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 shadow-md">
            <div>
              <h4 className="font-serif text-lg font-bold mb-1.5 text-white">Prefer a structured assessment?</h4>
              <p className="text-xs sm:text-sm text-navy-200">
                Our Business Assessment form helps us understand your business in detail before our first conversation.
              </p>
            </div>
            <Link
              to="/assessment"
              className="btn-gold text-xs sm:text-sm px-4 py-2.5 whitespace-nowrap shrink-0 mt-4 sm:mt-0 inline-flex items-center gap-2"
            >
              Start Assessment
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
