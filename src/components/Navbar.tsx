import { useState, useEffect } from 'react';
import { Link, useRouter } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/constants';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Consulting Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const isActive = (to: string) => {
    if (to === '/') return path === '/';
    return path.startsWith(to);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-base">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center group-hover:bg-navy-700 transition-colors">
              <span className="text-gold-400 font-serif font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-navy-900 text-lg tracking-tight">
                {SITE.brandName}
              </span>
              <span className="text-[10px] text-gold-600 font-medium tracking-widest uppercase">
                Business Consulting
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-navy-800 bg-navy-50'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/contact" className="btn-outline text-sm px-4 py-2">
              Book a Consultation
            </Link>
            <Link to="/assessment" className="btn-gold text-sm px-4 py-2">
              Get a Business Assessment
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-navy-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-navy-50 bg-white animate-fade-in">
          <div className="container-base py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-navy-800 bg-navy-50'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3">
              <Link to="/contact" className="btn-outline w-full">
                Book a Consultation
              </Link>
              <Link to="/assessment" className="btn-gold w-full">
                Get a Business Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
