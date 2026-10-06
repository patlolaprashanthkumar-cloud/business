import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { industries } from '@/lib/data';

export function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Industries</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Industries We Serve
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            We adapt our consulting approach to the specific dynamics, challenges and
            opportunities of each industry we work with.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.id} className="card-base p-6 group">
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-50 transition-colors">
                  <Icon name={ind.iconName} className="w-7 h-7 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">{ind.name}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{ind.useCase}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-navy-50 rounded-xl text-center">
            <p className="text-sm text-navy-600">
              We do not claim specialised industry certifications or regulatory authorisations.
              Our consulting approach is adapted to each industry's context and requirements.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        description="We work with businesses across many sectors. Contact us to discuss your specific needs."
        secondaryLabel="Get a Business Assessment"
      />
    </>
  );
}
