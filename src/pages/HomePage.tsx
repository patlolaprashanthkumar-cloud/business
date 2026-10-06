import { Link } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { services, industries, processSteps, faqs, valueProps } from '@/lib/data';
import { SITE, WHATSAPP_URL } from '@/lib/constants';
import { useState } from 'react';

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-700 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="container-base relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {SITE.consultant}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build a Stronger Business. <span className="text-gold-400">Unlock Your Next Stage of Growth.</span>
              </h1>
              <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-xl">
                We help startups, MSMEs and established companies improve revenue, strengthen
                operations, make better strategic decisions and scale through practical
                business consulting.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-gold">
                  Book a Consultation
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Link>
                <Link to="/assessment" className="btn-outline-light">
                  Get a Business Assessment
                </Link>
              </div>
              <p className="mt-8 text-navy-300 italic text-sm border-l-2 border-gold-400 pl-4">
                "Strategy that moves beyond presentations into practical execution."
              </p>
            </div>

            <div className="hidden lg:block animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                {valueProps.map((vp, i) => (
                  <div
                    key={vp.title}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors ${
                      i === 4 ? 'col-span-2' : ''
                    }`}
                  >
                    <Icon name={vp.iconName} className="w-8 h-8 text-gold-400 mb-3" />
                    <p className="text-white font-medium text-sm">{vp.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <SectionHeader
            eyebrow="What We Do"
            title="Consulting Services Built for Growth"
            description="From strategy to implementation, we cover every dimension of business performance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="card-base p-6 group"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-50 transition-colors">
                  <Icon name={s.iconName} className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-navy-700">{s.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-gold-600 font-medium mt-3 group-hover:gap-2 transition-all">
                  Learn more <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3">About the Consultant</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                {SITE.consultant}
              </h2>
              <p className="text-navy-600 designation text-sm mb-4 font-medium">
                {SITE.designation}
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                "I work with business owners, founders, directors and management teams to
                identify growth opportunities, improve sales processes, strengthen operational
                systems and develop practical strategies for sustainable business growth."
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                "My consulting approach combines business analysis, strategic planning, sales
                development, operational improvement, technology advisory and implementation
                support. The objective is to help businesses make informed decisions, establish
                measurable performance systems and build scalable operating models."
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About the Approach
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">Five Guiding Principles</h3>
              <div className="space-y-4">
                {[
                  { title: 'Practical business solutions', desc: 'Strategies grounded in your real business context.' },
                  { title: 'Data-informed decisions', desc: 'Recommendations based on data and structured analysis.' },
                  { title: 'Measurable objectives', desc: 'Every initiative tied to clear, trackable KPIs.' },
                  { title: 'Transparent communication', desc: 'Honest, clear reporting throughout the engagement.' },
                  { title: 'Long-term client relationships', desc: 'A partnership approach focused on sustained growth.' },
                ].map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="CheckCircle" className="w-4 h-4 text-gold-700" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-800 text-sm">{p.title}</p>
                      <p className="text-sm text-navy-500">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <SectionHeader
            eyebrow="Our Approach"
            title="A Structured Consulting Process"
            description="Six clear steps from discovery to measurable results."
          />
          <div className="hidden md:grid grid-cols-6 gap-4">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-xl p-5 border border-navy-100 shadow-sm h-full">
                  <div className="w-10 h-10 bg-navy-700 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-navy-900 text-sm mb-2">{s.title}</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">{s.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-navy-200" />
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-4">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-navy-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {s.step}
                  </div>
                  <div className="w-0.5 flex-1 bg-navy-200 mt-2" />
                </div>
                <div className="bg-white rounded-xl p-4 border border-navy-100 shadow-sm flex-1 mb-2">
                  <h4 className="font-semibold text-navy-900 text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/assessment" className="btn-gold">
              Start Your Business Assessment
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries preview */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Industries We Work With"
            description="We adapt our consulting approach to the specific dynamics of your industry."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="card-base p-5 text-center group"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-50 transition-colors">
                  <Icon name={ind.iconName} className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <p className="text-sm font-medium text-navy-800 group-hover:text-navy-600">{ind.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      <CTASection />
    </>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-base">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our consulting services."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-navy-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                <Icon
                  name="ChevronDown"
                  className={`w-5 h-5 text-navy-400 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-navy-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/contact" className="text-navy-700 font-medium hover:text-gold-600 transition-colors">
            Have more questions? Contact us <Icon name="ArrowRight" className="w-4 h-4 inline" />
          </Link>
        </div>
      </div>
    </section>
  );
}
