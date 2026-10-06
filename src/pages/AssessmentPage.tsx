import { SectionHeader } from '@/components/SectionHeader';
import { AssessmentForm } from '@/components/AssessmentForm';
import { Icon } from '@/components/Icon';
import { WHATSAPP_URL } from '@/lib/constants';

export function AssessmentPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Business Assessment</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Get a Business Assessment
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            Share details about your business and challenges. We'll review your information and
            contact you to schedule a detailed discussion — at no cost.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'Clock', title: 'Quick & Structured', desc: 'Four simple steps to share your business context.' },
              { icon: 'Users', title: 'Personalised Review', desc: 'We review your details before our first conversation.' },
              { icon: 'Target', title: 'Actionable Discussion', desc: 'A focused first meeting based on your specific needs.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <AssessmentForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-navy-500 mb-3">Prefer to talk first?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              <Icon name="MessageCircle" className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
