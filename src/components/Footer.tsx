import { Link } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

const services = [
  { label: 'Business Strategy & Planning', to: '/services#business-strategy' },
  { label: 'Sales & Revenue Growth', to: '/services#sales-revenue-growth' },
  { label: 'Business Operations & Management', to: '/services#business-operations' },
  { label: 'Financial Planning & Profitability', to: '/services#financial-planning' },
  { label: 'Digital Transformation & Technology', to: '/services#digital-transformation' },
  { label: 'Market Expansion & Business Development', to: '/services#market-expansion' },
  { label: 'Startup & New Business Advisory', to: '/services#startup-advisory' },
  { label: 'Monthly Strategic Advisory', to: '/services#monthly-advisory' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms and Conditions', to: '/terms' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-base py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                <span className="text-gold-400 font-serif font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-lg">{SITE.brandName}</span>
                <span className="text-[10px] text-gold-400 font-medium tracking-widest uppercase">
                  Business Consulting
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed">
              Strategic business consulting for startups, MSMEs and established companies.
              We help you identify opportunities, build strategies and implement solutions
              for sustainable growth.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Consulting Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-navy-200 hover:text-gold-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-navy-200 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-navy-200 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="Users" className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">{SITE.consultant}</p>
                  <p className="text-navy-300 text-xs mt-0.5">{SITE.designation}</p>
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-navy-200 hover:text-gold-400 transition-colors"
                >
                  <Icon name="Mail" className="w-5 h-5 text-gold-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-navy-200 hover:text-gold-400 transition-colors"
                >
                  <Icon name="Phone" className="w-5 h-5 text-gold-400 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy-200 hover:text-gold-400 transition-colors"
                >
                  <Icon name="MessageCircle" className="w-5 h-5 text-gold-400 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm text-navy-200">{SITE.coverage}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
            </p>
            <div className="flex gap-4">
              {legalLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
