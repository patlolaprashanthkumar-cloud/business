import { useEffect } from 'react';
import { Icon } from '@/components/Icon';
import { Link, useRouter } from '@/lib/router';
import { CTASection } from '@/components/CTASection';
import { getArticle, articles } from '@/lib/articles';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticlePage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const article = getArticle(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | E-Tailed Business Consulting`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', article.summary);
    }
    return () => {
      document.title = 'E-Tailed Business Consulting | Business Growth, Strategy & Transformation';
    };
  }, [article]);

  if (!article) {
    return (
      <div className="container-base py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-navy-900 mb-4">Article Not Found</h1>
        <p className="text-navy-600 mb-6">The article you are looking for does not exist.</p>
        <Link to="/insights" className="btn-primary">Back to Insights</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <button
            onClick={() => navigate('/insights')}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm mb-4 transition-colors"
          >
            <Icon name="ArrowLeft" className="w-4 h-4" /> Back to Insights
          </button>
          <div className="flex items-center gap-3 text-xs text-navy-300 mb-3">
            <span className="flex items-center gap-1"><Icon name="Calendar" className="w-3.5 h-3.5" />{formatDate(article.date)}</span>
            <span className="flex items-center gap-1"><Icon name="Clock" className="w-3.5 h-3.5" />{article.readingTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl">{article.summary}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-base max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {article.content.map((para, i) => (
              <p key={i} className="text-navy-700 leading-relaxed mb-5 text-[1.05rem]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-navy-100">
            <p className="text-sm text-navy-500 mb-4">
              Published by E-Tailed Business Consulting. Original content for business owners
              and leaders. No fabricated statistics, credentials or research citations.
            </p>
          </div>
        </div>
      </article>

      <section className="section-padding bg-navy-50">
        <div className="container-base">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="card-base p-6 group">
                <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-navy-700 leading-snug text-sm">
                  {a.title}
                </h3>
                <p className="text-xs text-navy-500 leading-relaxed">{a.summary}</p>
                <span className="inline-flex items-center gap-1 text-xs text-gold-600 font-medium mt-3">
                  Read more <Icon name="ArrowRight" className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Apply These Insights to Your Business?"
        description="Let's discuss how we can help you implement practical strategies for growth."
      />
    </>
  );
}
