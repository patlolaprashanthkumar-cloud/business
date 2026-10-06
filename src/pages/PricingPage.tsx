import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { pricingPackages } from '@/lib/data';
import { ProposalRequestModal } from '@/components/ProposalRequestModal';

export function PricingPage() {
  const [modalPackage, setModalPackage] = useState<string | null>(null);

  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Indicative Consulting Packages
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            Transparent starting prices for common engagement types. Final fees are tailored
            to your business in a detailed proposal.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-6 flex flex-col relative transition-all ${
                  pkg.popular
                    ? 'border-gold-400 shadow-lg bg-white scale-105'
                    : 'border-navy-100 shadow-sm bg-white hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-400 text-navy-900 text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-navy-800">{pkg.price}</span>
                  {pkg.period && <span className="text-sm text-navy-500 ml-1">{pkg.period}</span>}
                </div>
                <p className="text-xs text-navy-400 uppercase tracking-wider font-semibold mb-3">Starting price</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                      <Icon name="CheckCircle" className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalPackage(pkg.name)}
                  className={pkg.popular ? 'btn-gold w-full' : 'btn-primary w-full'}
                >
                  Request a Custom Proposal
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-navy-50 rounded-xl border border-navy-100">
            <div className="flex items-start gap-3">
              <Icon name="AlertCircle" className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
              <p className="text-sm text-navy-600">
                Prices are indicative and depend on business size, scope, complexity and engagement
                duration. Final fees, deliverables, applicable taxes and payment terms will be
                specified in the client proposal. Online payments are not enabled in this version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Package Is Right?"
        description="Book a free consultation and we'll help you identify the best approach for your business."
        secondaryLabel="Get a Business Assessment"
      />

      {modalPackage && (
        <ProposalRequestModal packageName={modalPackage} onClose={() => setModalPackage(null)} />
      )}
    </>
  );
}
