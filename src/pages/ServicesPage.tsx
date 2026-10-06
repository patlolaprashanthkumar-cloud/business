import { useEffect } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { Link } from '@/lib/router';
import { services } from '@/lib/data';
import { useRouter } from '@/lib/router';

export function ServicesPage() {
  const { path } = useRouter();
  const hash = path.split('#')[1];

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Consulting Services</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Consulting Services for Every Stage of Business Growth
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            Eight focused service areas covering strategy, sales, operations, finance,
            technology, expansion and ongoing advisory support.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`grid lg:grid-cols-3 gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl border scroll-mt-24 ${
                  i % 2 === 0 ? 'bg-navy-50 border-navy-100' : 'bg-white border-navy-100 shadow-sm'
                }`}
              >
                <div className="lg:col-span-1">
                  <div className="w-14 h-14 bg-navy-700 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={s.iconName} className="w-7 h-7 text-gold-400" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{s.title}</h2>
                  <p className="text-sm text-navy-600 leading-relaxed mb-3">{s.description}</p>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">{s.explanation}</p>
                  <Link to="/contact" className="btn-primary text-sm px-4 py-2">
                    Discuss This Service
                    <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4">Key Deliverables</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {s.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-sm text-navy-600">
                        <Icon name="CheckCircle" className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gold-50 rounded-xl border border-gold-200">
            <div className="flex items-start gap-3">
              <Icon name="Shield" className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
              <p className="text-sm text-gold-800">
                <strong>Disclaimer:</strong> Statutory audit, tax filing, legal advice and other
                regulated services are provided only by appropriately qualified and authorised
                professionals where required. Our consulting services focus on business strategy,
                operations, planning and advisory, and do not constitute regulated professional services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
