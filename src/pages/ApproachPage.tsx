import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { processSteps } from '@/lib/data';
import { Link } from '@/lib/router';

export function ApproachPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Approach</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            A Structured Consulting Process
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            From discovery to performance review, we follow a clear six-step process designed
            to turn analysis into action and action into measurable results.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-navy-100" />
              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((s) => (
                  <div key={s.step} className="relative">
                    <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">{s.step}</span>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-5 border border-navy-100">
                      <h4 className="font-semibold text-navy-900 text-sm mb-2 text-center">{s.title}</h4>
                      <p className="text-xs text-navy-500 leading-relaxed text-center">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-navy-700 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">{s.step}</span>
                  </div>
                  <div className="w-0.5 flex-1 bg-navy-200 mt-2" />
                </div>
                <div className="bg-navy-50 rounded-xl p-5 border border-navy-100 flex-1 mb-2">
                  <h4 className="font-semibold text-navy-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-navy-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/assessment" className="btn-gold">
              Start Your Business Assessment
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <SectionHeader
            eyebrow="Why Our Approach Works"
            title="Strategy Meets Execution"
            description="We don't just deliver presentations. We work alongside you to implement and measure."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Lightbulb', title: 'Analysis First', desc: 'Every recommendation is grounded in a thorough understanding of your business data and market context.' },
              { icon: 'Target', title: 'Measurable KPIs', desc: 'We define clear, trackable metrics so you always know whether initiatives are working.' },
              { icon: 'Handshake', title: 'Implementation Support', desc: 'We stay engaged through execution — guiding, reviewing and adjusting until results are achieved.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
