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
    if (to === '/') return path === '/' || path === '';
    return path.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 pb-1.5 px-3 sm:px-5 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      {/* Pill-shaped navbar with smooth semicircular rounded ends on both sides */}
      <nav
        className={`w-full rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#F8FAFC]/95 shadow-lg shadow-[#080B12]/10 border-[#cbd5e1]/80 backdrop-blur-md'
            : 'bg-[#F8FAFC]/90 shadow-md shadow-[#080B12]/5 border-[#e2e8f0] backdrop-blur-md'
        } px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo on the left with semicircular rounded icon badge and single-line brand text */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#080B12] rounded-full flex items-center justify-center border border-[#2563EB]/40 shadow-xs group-hover:scale-105 group-hover:border-[#60A5FA] transition-all duration-200">
              <span className="text-white font-serif font-bold text-lg sm:text-xl leading-none">E</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#080B12] text-sm sm:text-base tracking-tight group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
                {SITE.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#2563EB] font-semibold tracking-widest uppercase whitespace-nowrap">
                Business Consulting
              </span>
            </div>
          </Link>

          {/* Right Section: Navigation links shifted to the right + CTA button */}
          <div className="flex items-center gap-5 xl:gap-6 2xl:gap-8 ml-auto">
            {/* Clean, Unboxed Navigation Links with clear, consistent horizontal gaps on a single line */}
            <div className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative py-1 text-[13px] 2xl:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                      active
                        ? 'text-[#080B12] font-semibold'
                        : 'text-[#334155] hover:text-[#2563EB]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA & Mobile Menu Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Desktop CTA */}
              <Link
                to="/assessment"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-[#F8FAFC] text-xs xl:text-sm font-semibold whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="hidden 2xl:inline">Get Business Assessment</span>
                <span className="2xl:hidden">Get Assessment</span>
                <Icon name="ArrowRight" className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile / Tablet compact CTA */}
              <Link
                to="/assessment"
                className="lg:hidden hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-[#F8FAFC] text-xs font-semibold whitespace-nowrap shadow-xs transition-all duration-200"
              >
                <span>Get Assessment</span>
              </Link>

              {/* Mobile / Tablet hamburger toggle button */}
              <button
                className="xl:hidden p-1.5 sm:p-2 rounded-full text-[#171D2B] hover:text-[#2563EB] hover:bg-[#e2e8f0]/60 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <Icon name={open ? 'X' : 'Menu'} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Mobile / Tablet Dropdown Menu with clean, unboxed navigation links */}
        {open && (
          <div className="xl:hidden mt-3 pt-3 border-t border-[#e2e8f0] animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'text-[#2563EB] font-semibold'
                        : 'text-[#171D2B] hover:text-[#2563EB]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[#e2e8f0]">
                <Link
                  to="/contact"
                  className="btn-outline text-xs text-center py-2.5 rounded-full w-full"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/assessment"
                  className="btn-gold text-xs text-center py-2.5 rounded-full w-full"
                >
                  Get a Business Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
