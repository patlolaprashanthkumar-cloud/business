import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { industries } from '@/lib/data';

export function IndustriesPage() {
  return (
    <>
      {/* Main Heading */}
      <section className="bg-transparent pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 relative overflow-hidden">
        <div className="container-base relative text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3.5 shadow-2xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            Industries
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#080B12] leading-tight max-w-3xl mx-auto">
            Industries We Serve
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#334155] max-w-2xl mx-auto leading-relaxed">
            We adapt our consulting approach to the specific dynamics, challenges and
            opportunities of each industry we work with.
          </p>
        </div>
      </section>

      {/* Industries Static Grid Section - Dark background behind the boxes */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-950 border-y border-navy-800 relative overflow-hidden text-white">
        {/* Subtle ambient lighting accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-navy-700/50 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-base relative z-10">
          {/* Static Grid: 2 cards per row (arranged in two columns), evenly spaced and consistent in size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((ind, idx) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <Icon
                        name={ind.iconName}
                        className="w-6 h-6 sm:w-7 sm:h-7 text-[#2563EB] transition-colors"
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 tracking-wider">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#080B12] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    {ind.useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 p-5 bg-navy-900/90 rounded-2xl border border-navy-800 text-center max-w-3xl mx-auto shadow-md backdrop-blur-xs">
            <p className="text-sm sm:text-base text-navy-200 leading-relaxed">
              We adapt our consulting approach to each industry's context and requirements to ensure practical, measurable results.
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
