import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { Link } from '@/lib/router';
import { articles } from '@/lib/articles';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function InsightsPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Business Insights & Resources
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">
            Practical articles on business growth, strategy, sales, operations and scaling —
            written for business owners and leaders.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="card-base p-6 group flex flex-col"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-50 transition-colors">
                  <Icon name="FileText" className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-4 flex-1">{a.summary}</p>
                <div className="flex items-center gap-3 text-xs text-navy-400 pt-4 border-t border-navy-50">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" className="w-3.5 h-3.5" />
                    {formatDate(a.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" className="w-3.5 h-3.5" />
                    {a.readingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
