import { Icon } from '@/components/Icon';
import { ConsultationForm } from '@/components/ConsultationForm';
import { ContactForm } from '@/components/ContactForm';
import { Link } from '@/lib/router';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

export function ContactPage() {
  return (
    <>
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
      <section className="py-12 bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={`mailto:${SITE.email}`} className="card-base p-6 text-center group">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-50 transition-colors">
                <Icon name="Mail" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Email</h3>
              <p className="text-xs text-navy-600 break-all">{SITE.email}</p>
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="card-base p-6 text-center group">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-50 transition-colors">
                <Icon name="Phone" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Phone</h3>
              <p className="text-xs text-navy-600">{SITE.phone}</p>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-base p-6 text-center group">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-50 transition-colors">
                <Icon name="MessageCircle" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">WhatsApp</h3>
              <p className="text-xs text-navy-600">Chat with us</p>
            </a>
            <div className="card-base p-6 text-center">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-semibold text-navy-900 text-sm mb-1">Website</h3>
              <p className="text-xs text-navy-600">{SITE.website}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant info + forms */}
      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm mb-6">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">{SITE.consultant}</h2>
                <p className="text-sm text-gold-600 font-medium mb-3">{SITE.designation}</p>
                <div className="space-y-2 text-sm text-navy-600">
                  <p><span className="font-medium text-navy-700">Company:</span> {SITE.companyName}</p>
                  <p><span className="font-medium text-navy-700">Email:</span> <a href={`mailto:${SITE.email}`} className="text-navy-600 hover:text-gold-600 transition-colors">{SITE.email}</a></p>
                  <p><span className="font-medium text-navy-700">Phone:</span> <a href={`tel:${SITE.phoneRaw}`} className="text-navy-600 hover:text-gold-600 transition-colors">{SITE.phone}</a></p>
                  <p><span className="font-medium text-navy-700">Website:</span> {SITE.website}</p>
                  <p><span className="font-medium text-navy-700">Service Coverage:</span> {SITE.coverage}</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  <Icon name="MessageCircle" className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Book a Consultation</h3>
                <ConsultationForm />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Send Us a Message</h3>
              <ContactForm />

              <div className="mt-6 p-6 bg-navy-800 rounded-xl text-white">
                <h4 className="font-serif text-lg font-bold mb-3">Prefer a structured assessment?</h4>
                <p className="text-sm text-navy-200 mb-4">
                  Our Business Assessment form helps us understand your business in detail before
                  our first conversation.
                </p>
                <Link to="/assessment" className="btn-gold text-sm px-4 py-2">
                  Start Business Assessment
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
