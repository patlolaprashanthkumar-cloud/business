import { Link } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { services, industries, processSteps, faqs, valueProps } from '@/lib/data';
import { SITE, WHATSAPP_URL } from '@/lib/constants';
import { useState, useRef, useEffect, type ReactNode } from 'react';

// Lightweight, performant scroll reveal hook with zero layout shifts
function useInView<T extends HTMLElement = HTMLDivElement>(options: { threshold?: number; rootMargin?: string } = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, inView] as const;
}

// Reusable scroll reveal component with customizable direction and delay
function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const getTransform = () => {
    if (direction === 'up') return 'translateY(22px)';
    if (direction === 'down') return 'translateY(-22px)';
    if (direction === 'left') return 'translateX(-22px)';
    if (direction === 'right') return 'translateX(22px)';
    return 'none';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0, 0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Single unified color theme for all 5 floating service boxes (Charcoal #171D2B, Midnight #080B12, Royal Blue #2563EB, Ice Blue #60A5FA & Off-White #F8FAFC)
const unifiedBoxTheme = {
  card: 'bg-[#171D2B] border-[#2563EB]/40 text-[#F8FAFC] shadow-xl shadow-[#080B12]/40 hover:border-[#60A5FA] hover:bg-[#1f2637]',
  icon: 'text-white',
  badge: 'bg-[#080B12] text-white border-white/30',
  title: 'text-[#F8FAFC] group-hover:text-[#60A5FA]',
};

const boxThemes = [
  unifiedBoxTheme,
  unifiedBoxTheme,
  unifiedBoxTheme,
  unifiedBoxTheme,
  unifiedBoxTheme,
];

export function HomePage() {
  return (
    <>
      {/* Hero - Transparent background so centered title sits directly on page background */}
      <section className="relative bg-transparent overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 min-h-[640px] lg:min-h-[720px] flex items-center justify-center">
        {/* CSS styles for floating & staggered entrance */}
        <style>{`
          @keyframes floatScatter1 {
            0%, 100% { transform: translateY(0px) rotate(-1deg); }
            50% { transform: translateY(-7px) rotate(-0.5deg); }
          }
          @keyframes floatScatter2 {
            0%, 100% { transform: translateY(0px) rotate(1.5deg); }
            50% { transform: translateY(6px) rotate(1deg); }
          }
          @keyframes floatScatter3 {
            0%, 100% { transform: translateY(0px) rotate(1deg); }
            50% { transform: translateY(-5px) rotate(0.6deg); }
          }
          @keyframes floatScatter4 {
            0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
            50% { transform: translateY(6px) rotate(-1deg); }
          }
          @keyframes floatScatter5 {
            0%, 100% { transform: translateY(0px) rotate(0.5deg); }
            50% { transform: translateY(-6px) rotate(1deg); }
          }
          @keyframes heroScatterEntrance {
            0% {
              opacity: 0;
              transform: translateY(22px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .hero-scatter-card {
            animation: heroScatterEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .float-scatter-1 { animation: floatScatter1 6.2s ease-in-out infinite; }
          .float-scatter-2 { animation: floatScatter2 7.1s ease-in-out infinite; }
          .float-scatter-3 { animation: floatScatter3 5.8s ease-in-out infinite; }
          .float-scatter-4 { animation: floatScatter4 6.7s ease-in-out infinite; }
          .float-scatter-5 { animation: floatScatter5 7.4s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .float-scatter-1, .float-scatter-2, .float-scatter-3, .float-scatter-4, .float-scatter-5 {
              animation: none;
            }
          }
        `}</style>

        <div className="container-base relative w-full">
          {/* Main Hero Container with Centered Title & Flanking Scattered Boxes */}
          <div className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center">

            {/* Centered Main Title Content sitting directly on page background */}
            <div className="relative z-20 max-w-2xl lg:max-w-3xl mx-auto text-center px-4 animate-fade-in-up">
              <p className="inline-block text-[#2563EB] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4 px-3.5 py-1 rounded-full bg-[#eff6ff] border border-[#bfdbfe] shadow-2xs">
                {SITE.consultant}
              </p>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#080B12] leading-tight">
                Build a Stronger Business. <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">Unlock Your Next Stage of Growth.</span>
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl mx-auto">
                We help startups, MSMEs and established companies improve revenue, strengthen
                operations, make better strategic decisions and scale through practical
                business consulting.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-4">
                <Link to="/contact" className="btn-gold w-full sm:w-auto hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group">
                  Book a Consultation
                  <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link to="/assessment" className="btn-outline w-full sm:w-auto hover:-translate-y-0.5 hover:bg-navy-50 transition-all duration-200">
                  Get a Business Assessment
                </Link>
              </div>
              <p className="mt-7 text-navy-500 italic text-xs sm:text-sm max-w-md mx-auto pt-3 border-t border-navy-100">
                "Strategy that moves beyond presentations into practical execution."
              </p>
            </div>

            {/* Desktop Asymmetrical Scattered Floating Boxes Framing the Title */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
              {/* Box 1: Top-Left (Business Strategy & Planning) */}
              <div
                className="hero-scatter-card pointer-events-auto absolute top-2 xl:top-4 left-0 xl:-left-4 w-60 xl:w-64"
                style={{ animationDelay: '100ms' }}
              >
                <div className={`float-scatter-1 ${boxThemes[0].card} border rounded-2xl p-4 transition-all duration-300 group cursor-default`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-9 h-9 flex items-center justify-center ${boxThemes[0].icon} group-hover:scale-110 transition-transform`}>
                      <Icon name={valueProps[0].iconName} className="w-4.5 h-4.5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${boxThemes[0].badge} px-2 py-0.5 rounded-full border`}>
                      01
                    </span>
                  </div>
                  <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${boxThemes[0].title} transition-colors`}>
                    {valueProps[0].title}
                  </p>
                </div>
              </div>

              {/* Box 2: Top-Right (Sales & Revenue Growth) */}
              <div
                className="hero-scatter-card pointer-events-auto absolute top-8 xl:top-10 right-0 xl:-right-4 w-56 xl:w-64"
                style={{ animationDelay: '220ms' }}
              >
                <div className={`float-scatter-2 ${boxThemes[1].card} border rounded-2xl p-4 transition-all duration-300 group cursor-default`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-9 h-9 flex items-center justify-center ${boxThemes[1].icon} group-hover:scale-110 transition-transform`}>
                      <Icon name={valueProps[1].iconName} className="w-4.5 h-4.5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${boxThemes[1].badge} px-2 py-0.5 rounded-full border`}>
                      02
                    </span>
                  </div>
                  <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${boxThemes[1].title} transition-colors`}>
                    {valueProps[1].title}
                  </p>
                </div>
              </div>

              {/* Box 3: Mid-Left (Operational Excellence) */}
              <div
                className="hero-scatter-card pointer-events-auto absolute top-[52%] -translate-y-1/2 left-2 xl:-left-2 w-56 xl:w-64"
                style={{ animationDelay: '340ms' }}
              >
                <div className={`float-scatter-3 ${boxThemes[2].card} border rounded-2xl p-4 transition-all duration-300 group cursor-default`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-9 h-9 flex items-center justify-center ${boxThemes[2].icon} group-hover:scale-110 transition-transform`}>
                      <Icon name={valueProps[2].iconName} className="w-4.5 h-4.5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${boxThemes[2].badge} px-2 py-0.5 rounded-full border`}>
                      03
                    </span>
                  </div>
                  <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${boxThemes[2].title} transition-colors`}>
                    {valueProps[2].title}
                  </p>
                </div>
              </div>

              {/* Box 4: Mid-Right (Digital Transformation) */}
              <div
                className="hero-scatter-card pointer-events-auto absolute top-[46%] -translate-y-1/2 right-2 xl:-left-auto xl:-right-2 w-60 xl:w-64"
                style={{ animationDelay: '460ms' }}
              >
                <div className={`float-scatter-4 ${boxThemes[3].card} border rounded-2xl p-4 transition-all duration-300 group cursor-default`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-9 h-9 flex items-center justify-center ${boxThemes[3].icon} group-hover:scale-110 transition-transform`}>
                      <Icon name={valueProps[3].iconName} className="w-4.5 h-4.5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${boxThemes[3].badge} px-2 py-0.5 rounded-full border`}>
                      04
                    </span>
                  </div>
                  <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${boxThemes[3].title} transition-colors`}>
                    {valueProps[3].title}
                  </p>
                </div>
              </div>

              {/* Box 5: High and Centered Above the Title of the Page (Market Expansion) */}
              <div className="absolute -top-12 xl:-top-16 left-0 right-0 flex justify-center pointer-events-none z-20">
                <div
                  className="hero-scatter-card pointer-events-auto w-60 xl:w-64"
                  style={{ animationDelay: '580ms' }}
                >
                  <div className={`float-scatter-5 ${boxThemes[4].card} border rounded-2xl p-4 transition-all duration-300 group cursor-default shadow-xl`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-9 h-9 flex items-center justify-center ${boxThemes[4].icon} group-hover:scale-110 transition-transform`}>
                        <Icon name={valueProps[4].iconName} className="w-4.5 h-4.5" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase ${boxThemes[4].badge} px-2 py-0.5 rounded-full border`}>
                        05
                      </span>
                    </div>
                    <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${boxThemes[4].title} transition-colors`}>
                      {valueProps[4].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile & Tablet Responsive Layout (< lg): Floating Grid Below Center Content */}
          <div className="lg:hidden mt-10 w-full max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {valueProps.map((vp, idx) => {
                const theme = boxThemes[idx];
                return (
                  <div
                    key={vp.title}
                    className={`hero-scatter-card ${idx === 4 ? 'sm:col-span-2 sm:max-w-xs sm:mx-auto w-full' : ''}`}
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div
                      className={`float-scatter-${idx + 1} ${theme.card} border rounded-2xl p-4 transition-all duration-300 group cursor-default`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-9 h-9 flex items-center justify-center ${theme.icon} group-hover:scale-110 transition-transform`}>
                          <Icon name={vp.iconName} className="w-4.5 h-4.5" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wider uppercase ${theme.badge} px-2 py-0.5 rounded-full border`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <p className={`font-semibold text-xs sm:text-sm tracking-tight leading-snug ${theme.title} transition-colors`}>
                        {vp.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting services tabs with continuous horizontal loop */}
      <ConsultingServicesSection />

      {/* About preview */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3">About the Consultant</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  {SITE.consultant}
                </h2>
                <p className="text-navy-600 designation text-sm mb-4 font-medium">
                  {SITE.designation}
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  "I work with business owners, founders, directors and management teams to
                  identify growth opportunities, improve sales processes, strengthen operational
                  systems and develop practical strategies for sustainable business growth."
                </p>
                <p className="text-navy-600 leading-relaxed mb-8">
                  "My consulting approach combines business analysis, strategic planning, sales
                  development, operational improvement, technology advisory and implementation
                  support. The objective is to help businesses make informed decisions, establish
                  measurable performance systems and build scalable operating models."
                </p>
                <Link to="/about" className="btn-primary inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group">
                  Learn More About the Approach
                  <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={140}>
              <div className="bg-navy-50 rounded-2xl p-6 sm:p-8 border border-navy-100 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">Five Guiding Principles</h3>
                <div className="space-y-3.5">
                  {[
                    { title: 'Practical business solutions', desc: 'Strategies grounded in your real business context.' },
                    { title: 'Data-informed decisions', desc: 'Recommendations based on data and structured analysis.' },
                    { title: 'Measurable objectives', desc: 'Every initiative tied to clear, trackable KPIs.' },
                    { title: 'Transparent communication', desc: 'Honest, clear reporting throughout the engagement.' },
                    { title: 'Long-term client relationships', desc: 'A partnership approach focused on sustained growth.' },
                  ].map((p, idx) => (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white hover:shadow-xs hover:translate-x-1 transition-all duration-200 group cursor-default"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <div className="w-7 h-7 rounded-full bg-[#171D2B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-xs">
                        <Icon name="CheckCircle" className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-800 text-sm group-hover:text-navy-950 transition-colors">{p.title}</p>
                        <p className="text-sm text-navy-500">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Consulting process with subtle zigzag line and alternating compact steps */}
      <ConsultingProcessSection />

      {/* Industries preview */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-base">
          <Reveal direction="up">
            <SectionHeader
              eyebrow="Who We Serve"
              title="Industries We Work With"
              description="We adapt our consulting approach to the specific dynamics of your industry."
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, idx) => (
              <Reveal key={ind.id} delay={idx * 60} direction="up">
                <Link
                  to="/industries"
                  className="card-base p-5 text-center group block hover:-translate-y-1.5 hover:shadow-lg hover:border-gold-300 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#171D2B] border border-[#2563EB]/40 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:border-[#60A5FA] transition-all duration-300 shadow-xs">
                    <Icon name={ind.iconName} className="w-6 h-6 text-white transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-navy-800 group-hover:text-navy-950 transition-colors">{ind.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ in two columns */}
      <FAQAccordion />

      <Reveal direction="up" delay={80}>
        <CTASection />
      </Reveal>
    </>
  );
}

function ConsultingServicesSection() {
  const [selectedId, setSelectedId] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === selectedId) || services[0];
  const activeIndex = services.findIndex((s) => s.id === activeService.id);

  // Duplicated list for infinite seamless horizontal loop
  const loopingServices = [...services, ...services];

  return (
    <section className="section-padding bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Background ambient glow accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-navy-700/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <style>{`
        @keyframes servicesLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .services-ticker {
          display: flex;
          width: max-content;
          animation: servicesLoop 40s linear infinite;
        }
        .services-ticker:hover,
        .services-ticker:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .services-ticker {
            animation: none;
          }
        }
      `}</style>
      <div className="container-base relative z-10">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="What We Do"
            title="Consulting Services Built for Growth"
            description="From strategy to implementation, we cover every dimension of business performance."
            light={true}
          />
        </Reveal>

        {/* Continuous horizontal scrolling tabs loop snug against service panel with no unnecessary gap */}
        <Reveal delay={100} direction="up">
          <div className="relative mb-2.5 sm:mb-3">
            {/* Gradient fade masks on both edges matching the solid dark background */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-navy-950 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-navy-950 to-transparent z-10" />

            {/* Marquee viewport - strictly hidden scrollbars with snug vertical spacing */}
            <div className="overflow-hidden pt-1 pb-1.5 sm:pb-2">
              <div className="services-ticker flex gap-4 sm:gap-5 select-none">
                {loopingServices.map((s, idx) => {
                  const isSelected = s.id === activeService.id;
                  return (
                    <button
                      key={`${s.id}-${idx}`}
                      type="button"
                      onClick={() => setSelectedId(s.id)}
                      className={`shrink-0 flex items-center gap-3 px-6 sm:px-7 py-4 sm:py-4.5 rounded-2xl border transition-all duration-200 text-left cursor-pointer group ${
                        isSelected
                          ? 'bg-[#2563EB] text-white border-[#60A5FA] shadow-xl ring-2 ring-blue-500/40 -translate-y-0.5'
                          : 'bg-navy-900/90 text-navy-100 border-navy-800 hover:border-[#60A5FA]/50 hover:bg-navy-800/90 shadow-md hover:-translate-y-0.5'
                      }`}
                    >
                      <div>
                        <span className={`block text-base sm:text-lg font-bold whitespace-nowrap tracking-tight ${
                          isSelected ? 'text-white' : 'text-white group-hover:text-blue-200'
                        }`}>
                          {s.title}
                        </span>
                        <span
                          className={`block text-xs whitespace-nowrap mt-0.5 ${
                            isSelected ? 'text-blue-100 font-semibold' : 'text-navy-400 group-hover:text-navy-300 font-normal'
                          }`}
                        >
                          {isSelected ? 'Active Service • Clicked' : 'Click to view description'}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse ml-2 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Compact, Cleaner Service Description Box on solid dark background */}
        <Reveal delay={160} direction="up">
          <div
            key={activeService.id}
            className="max-w-5xl mx-auto bg-navy-900/95 rounded-2xl border border-navy-800 shadow-xl hover:border-navy-700 transition-all duration-300 p-5 sm:p-6 lg:p-7 backdrop-blur-md animate-fade-in"
          >
            {/* Streamlined Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-navy-800">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 block">
                  Service 0{activeIndex + 1} of 0{services.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeService.title}
                </h3>
              </div>
              <div className="flex items-center gap-2.5">
                <Link
                  to={`/services#${activeService.id}`}
                  className="btn-outline-light text-xs px-3.5 py-2 inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Service Details
                </Link>
                <Link
                  to="/contact"
                  className="btn-gold text-xs px-3.5 py-2 inline-flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Compact Layout */}
            <div className="grid lg:grid-cols-12 gap-5 pt-4 items-start">
              {/* Left description column */}
              <div className="lg:col-span-7 space-y-3">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                    Service Summary
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {activeService.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-400 mb-1">
                    Full Description & Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                    {activeService.explanation}
                  </p>
                </div>
              </div>

              {/* Right deliverables column */}
              <div className="lg:col-span-5">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-navy-800">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Key Deliverables
                  </h4>
                  <span className="text-[11px] text-white/80 font-semibold bg-navy-900 px-2 py-0.5 rounded-full border border-white/20">
                    {activeService.deliverables.length} Items
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {activeService.deliverables.map((d) => (
                    <div
                      key={d}
                      className="text-xs sm:text-sm text-navy-200 py-0.5 font-medium hover:text-white transition-colors cursor-default"
                    >
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ConsultingProcessSection() {
  return (
    <section className="section-padding bg-navy-900 border-y border-navy-800 text-white relative overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-navy-700/50 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-base relative z-10">
        <Reveal direction="up">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-gold-400">
              Our Approach
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Structured Consulting Process
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-navy-200 leading-relaxed max-w-lg mx-auto">
              Six clear steps from discovery to measurable results.
            </p>
          </div>
        </Reveal>

        {/* Desktop timeline with subtle zigzag line & alternating compact steps */}
        <Reveal delay={120} direction="up">
          <div className="hidden lg:block relative max-w-6xl mx-auto my-8">
            <div className="relative">
              {/* Subtle Zigzag SVG line connecting the 6 nodes */}
              <svg
                className="absolute top-[146px] left-0 w-full h-12 pointer-events-none z-0"
                viewBox="0 0 1200 48"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="subtleZigzagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                    <stop offset="25%" stopColor="#60A5FA" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
                    <stop offset="75%" stopColor="#60A5FA" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Subtle zigzag path alternating between y=12 (elevated) and y=36 (lowered) */}
                <path
                  d="M 100 12 L 300 36 L 500 12 L 700 36 L 900 12 L 1100 36"
                  stroke="url(#subtleZigzagGrad)"
                  strokeWidth="1.75"
                  strokeDasharray="4 3"
                />
              </svg>

              {/* 6 columns with alternating compact steps above and below the zigzag line */}
              <div className="grid grid-cols-6 gap-3 xl:gap-4 relative z-10">
                {processSteps.map((s, i) => {
                  const isAbove = i % 2 === 0; // Steps 1, 3, 5 above; 2, 4, 6 below
                  return (
                    <div key={s.step} className="flex flex-col items-center">
                      {/* Upper slot for steps 1, 3, 5 */}
                      <div className="h-36 w-full flex flex-col justify-end items-center">
                        {isAbove ? (
                          <div className="w-full bg-navy-800/90 rounded-xl p-3 xl:p-3.5 border border-navy-700/80 shadow-md hover:border-gold-400/60 hover:bg-navy-800 hover:-translate-y-1 transition-all duration-300 text-center group backdrop-blur-xs">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950 text-white border border-white/20 mb-1 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                              Step 0{s.step}
                            </span>
                            <h4 className="font-semibold text-white text-xs xl:text-sm mb-1 leading-snug group-hover:text-gold-200 transition-colors">
                              {s.title}
                            </h4>
                            <p className="text-[11px] text-navy-300 leading-snug line-clamp-3">
                              {s.description}
                            </p>
                          </div>
                        ) : null}
                      </div>

                      {/* Small vertical connector for above step */}
                      <div
                        className={`w-0.5 h-3 my-0.5 transition-opacity ${
                          isAbove ? 'bg-[#60A5FA]/40' : 'opacity-0'
                        }`}
                      />

                      {/* Node circle on zigzag path */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-transform hover:scale-115 shrink-0 ${
                          isAbove
                            ? '-translate-y-1 bg-[#080B12] text-white border-2 border-[#60A5FA] shadow-[0_0_12px_rgba(96,165,250,0.35)]'
                            : 'translate-y-1 bg-[#2563EB] text-white border-2 border-[#60A5FA] shadow-[0_0_12px_rgba(37,99,235,0.35)]'
                        }`}
                      >
                        {s.step}
                      </div>

                      {/* Small vertical connector for below step */}
                      <div
                        className={`w-0.5 h-3 my-0.5 transition-opacity ${
                          !isAbove ? 'bg-gold-400/40' : 'opacity-0'
                        }`}
                      />

                      {/* Lower slot for steps 2, 4, 6 */}
                      <div className="h-36 w-full flex flex-col justify-start items-center">
                        {!isAbove ? (
                          <div className="w-full bg-navy-800/90 rounded-xl p-3 xl:p-3.5 border border-navy-700/80 shadow-md hover:border-gold-400/60 hover:bg-navy-800 hover:translate-y-1 transition-all duration-300 text-center group backdrop-blur-xs">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950 text-white border border-white/20 mb-1 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                              Step 0{s.step}
                            </span>
                            <h4 className="font-semibold text-white text-xs xl:text-sm mb-1 leading-snug group-hover:text-gold-200 transition-colors">
                              {s.title}
                            </h4>
                            <p className="text-[11px] text-navy-300 leading-snug line-clamp-3">
                              {s.description}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tablet view (md to lg): 3 columns of compact cards */}
        <Reveal delay={120} direction="up">
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 my-8">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="bg-navy-800/90 rounded-xl p-4 border border-navy-700/80 shadow-md group hover:border-gold-400/60 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xs"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 bg-navy-950 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 border border-white/30">
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-white text-sm group-hover:text-gold-200 transition-colors">{s.title}</h4>
                </div>
                <p className="text-xs text-navy-300 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile vertical timeline with subtle vertical zigzag guide */}
        <Reveal delay={120} direction="up">
          <div className="md:hidden relative max-w-md mx-auto space-y-4 my-8">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-navy-700 via-gold-400 to-navy-700 opacity-50" />
            {processSteps.map((s, i) => (
              <div key={s.step} className="flex items-start gap-3.5 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-md ${
                    i % 2 === 0
                      ? 'bg-navy-950 text-white border-2 border-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.25)]'
                      : 'bg-[#2563EB] text-white border-2 border-white/40 shadow-[0_0_10px_rgba(37,99,235,0.25)]'
                  }`}
                >
                  0{s.step}
                </div>
                <div className="bg-navy-800/90 rounded-xl p-3.5 border border-navy-700/80 shadow-md flex-1 backdrop-blur-xs hover:border-gold-400/50 transition-colors">
                  <h4 className="font-semibold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-navy-300 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} direction="up">
          <div className="text-center mt-10">
            <Link to="/assessment" className="btn-gold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group inline-flex items-center gap-2">
              Start Your Business Assessment
              <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  return (
    <section className="section-padding bg-navy-50 overflow-hidden">
      <div className="container-base">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about our consulting services."
          />
        </Reveal>

        {/* FAQs arranged in two columns with sequential animations and smooth expanding answers */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Column 1 */}
          <div className="space-y-3">
            {leftFaqs.map((faq, i) => {
              const faqIndex = i;
              const isOpen = open === faqIndex;
              return (
                <Reveal key={faqIndex} delay={i * 60} direction="up">
                  <div
                    className={`bg-white rounded-xl border overflow-hidden shadow-xs hover:border-gold-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                      isOpen ? 'border-gold-300/80 shadow-sm' : 'border-navy-100'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : faqIndex)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-navy-900 pr-3 text-sm sm:text-base leading-snug group-hover:text-navy-700 transition-colors">
                        {faq.question}
                      </span>
                      <Icon
                        name="ChevronDown"
                        className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180 text-gold-600' : 'group-hover:text-navy-600'
                        }`}
                      />
                    </button>
                    {/* Smooth height and opacity accordion transition */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 pt-1.5 border-t border-navy-50 text-navy-600 leading-relaxed text-sm">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {rightFaqs.map((faq, i) => {
              const faqIndex = midpoint + i;
              const isOpen = open === faqIndex;
              return (
                <Reveal key={faqIndex} delay={(midpoint + i) * 60} direction="up">
                  <div
                    className={`bg-white rounded-xl border overflow-hidden shadow-xs hover:border-gold-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                      isOpen ? 'border-gold-300/80 shadow-sm' : 'border-navy-100'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : faqIndex)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-navy-900 pr-3 text-sm sm:text-base leading-snug group-hover:text-navy-700 transition-colors">
                        {faq.question}
                      </span>
                      <Icon
                        name="ChevronDown"
                        className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180 text-gold-600' : 'group-hover:text-navy-600'
                        }`}
                      />
                    </button>
                    {/* Smooth height and opacity accordion transition */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 pt-1.5 border-t border-navy-50 text-navy-600 leading-relaxed text-sm">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={150} direction="up">
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="text-navy-700 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1.5 group hover:-translate-y-0.5"
            >
              Have more questions? Contact us <Icon name="ArrowRight" className="w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

