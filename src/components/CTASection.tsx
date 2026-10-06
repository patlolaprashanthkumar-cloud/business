import { Link } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { WHATSAPP_URL } from '@/lib/constants';

export function CTASection({
  title = 'Ready to Build a Stronger Business?',
  description = 'Book a consultation or request a business assessment to discover how we can help you achieve your next stage of growth.',
  primaryLabel = 'Book a Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Get a Business Assessment',
  secondaryTo = '/assessment',
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-400 rounded-full blur-3xl" />
      </div>
      <div className="container-base section-padding relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-navy-200 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryTo} className="btn-gold">
              {primaryLabel}
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
            <Link to={secondaryTo} className="btn-outline-light">
              {secondaryLabel}
            </Link>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
          >
            <Icon name="MessageCircle" className="w-5 h-5" />
            Or message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
