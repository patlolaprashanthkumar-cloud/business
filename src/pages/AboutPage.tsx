import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/constants';
import { principles } from '@/lib/data';

export function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            About the Consultant
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            {SITE.designation}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">{SITE.consultant}</h2>
              <p className="text-navy-600 designation text-sm font-medium mb-6">
                {SITE.designation}
              </p>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  "I work with business owners, founders, directors and management teams to
                  identify growth opportunities, improve sales processes, strengthen operational
                  systems and develop practical strategies for sustainable business growth.
                </p>
                <p>
                  My consulting approach combines business analysis, strategic planning, sales
                  development, operational improvement, technology advisory and implementation
                  support. The objective is to help businesses make informed decisions, establish
                  measurable performance systems and build scalable operating models."
                </p>
              </div>

              <div className="mt-8 p-6 bg-navy-50 rounded-xl border border-navy-100">
                <h3 className="font-semibold text-navy-900 mb-2">Operating Entity</h3>
                <p className="text-sm text-navy-600">{SITE.companyName}</p>
                <p className="text-sm text-navy-500 mt-1">Website: {SITE.website}</p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-navy-200 hover:text-gold-400 transition-colors">
                    <Icon name="Mail" className="w-5 h-5 text-gold-400 shrink-0" />
                    {SITE.email}
                  </a>
                  <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-sm text-navy-200 hover:text-gold-400 transition-colors">
                    <Icon name="Phone" className="w-5 h-5 text-gold-400 shrink-0" />
                    {SITE.phone}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-navy-200">
                    <Icon name="MapPin" className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    {SITE.coverage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <SectionHeader
            eyebrow="Our Principles"
            title="Five Guiding Principles"
            description="The values that shape every consulting engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={p.iconName} className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Business"
        description="Every business is unique. Let's talk about yours and how we can help it grow."
      />
    </>
  );
}
