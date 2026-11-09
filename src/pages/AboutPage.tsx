import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/constants';
import { principles } from '@/lib/data';

// Distinct, visually appealing background themes for each of the 5 guiding principle boxes
const principleThemes = [
  {
    // Box 1: Top-Left Corner (Deep Midnight Executive Slate)
    card: 'bg-gradient-to-br from-[#080B12] via-[#0e1626] to-[#171D2B] border-2 border-[#2563EB]/40 text-white shadow-xl shadow-[#080B12]/30 hover:border-[#60A5FA] hover:shadow-2xl hover:shadow-[#60A5FA]/20',
    icon: 'text-[#60A5FA]',
    badge: 'bg-[#080B12] text-[#60A5FA] border-[#2563EB]/50',
    tag: 'Top-Left',
    title: 'text-white',
    desc: 'text-[#cbd5e1]',
  },
  {
    // Box 2: Top-Right Corner (Royal Blue & Sapphire Indigo Depth)
    card: 'bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#172554] border-2 border-[#60A5FA]/50 text-white shadow-xl shadow-blue-950/30 hover:border-white hover:shadow-2xl hover:shadow-blue-500/25',
    icon: 'text-[#bfdbfe]',
    badge: 'bg-white/20 text-white border-white/30',
    tag: 'Top-Right',
    title: 'text-white',
    desc: 'text-[#dbeafe]',
  },
  {
    // Box 3: Center Anchor (Signature Charcoal with Vivid Royal & Ice Blue Glow)
    card: 'bg-gradient-to-br from-[#171D2B] via-[#1f283d] to-[#0a0f18] border-2 border-[#60A5FA] text-white shadow-2xl shadow-[#2563EB]/40 hover:border-[#93c5fd] hover:shadow-[#60A5FA]/40',
    icon: 'text-white',
    badge: 'bg-[#2563EB] text-[#F8FAFC] font-bold border-[#60A5FA]/60',
    tag: 'Centre',
    title: 'text-white text-base sm:text-lg font-bold',
    desc: 'text-[#e2e8f0]',
  },
  {
    // Box 4: Bottom-Left Corner (Deep Ocean Emerald Spruce)
    card: 'bg-gradient-to-br from-[#0c332c] via-[#082620] to-[#041713] border-2 border-[#10b981]/40 text-white shadow-xl shadow-emerald-950/30 hover:border-[#34d399] hover:shadow-2xl hover:shadow-emerald-500/20',
    icon: 'text-[#6ee7b7]',
    badge: 'bg-[#041713] text-[#6ee7b7] border-[#10b981]/50',
    tag: 'Bottom-Left',
    title: 'text-white',
    desc: 'text-[#a7f3d0]',
  },
  {
    // Box 5: Bottom-Right Corner (Deep Royal Amethyst & Wine)
    card: 'bg-gradient-to-br from-[#3b1747] via-[#290e32] to-[#17061d] border-2 border-[#c084fc]/40 text-white shadow-xl shadow-purple-950/30 hover:border-[#d8b4fe] hover:shadow-2xl hover:shadow-purple-500/20',
    icon: 'text-[#e9d5ff]',
    badge: 'bg-[#17061d] text-[#e9d5ff] border-[#c084fc]/50',
    tag: 'Bottom-Right',
    title: 'text-white',
    desc: 'text-[#f3e8ff]',
  },
];

// Horizontally big principle card layout: generous horizontal width, icon on the left, wide text content on the right
function PrincipleCard({
  principle,
  theme,
  index,
  isCenter = false,
}: {
  principle: (typeof principles)[0];
  theme: (typeof principleThemes)[0];
  index: number;
  isCenter?: boolean;
}) {
  return (
    <div
      className={`h-full min-h-[145px] sm:min-h-[160px] ${theme.card} rounded-2xl p-5 sm:p-6 transition-all duration-300 group cursor-default flex flex-col justify-between`}
    >
      <div className="flex items-start gap-4 sm:gap-4.5">
        {/* Horizontal icon badge */}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 ${theme.icon} group-hover:scale-110 group-hover:rotate-3 transition-transform mt-0.5`}
        >
          <Icon name={principle.iconName} className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
        </div>

        {/* Horizontally expansive text block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className={`font-bold text-base sm:text-lg ${theme.title} leading-snug group-hover:translate-x-0.5 transition-transform truncate`}>
              {principle.title}
            </h3>
            <span
              className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase ${theme.badge} px-2.5 py-0.5 rounded-full border shrink-0`}
            >
              {isCenter ? 'Centre • 03' : `0${index} • ${theme.tag}`}
            </span>
          </div>
          <p className={`text-xs sm:text-sm ${theme.desc} leading-relaxed`}>
            {principle.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      {/* CSS Animations: Entrance reveals for all page elements and continuous floating for principle boxes */}
      <style>{`
        @keyframes aboutFadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes aboutFadeLeft {
          0% {
            opacity: 0;
            transform: translateX(-18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes aboutFadeRight {
          0% {
            opacity: 0;
            transform: translateX(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Continuous gentle floating keyframe animations for the 5 principle boxes */
        @keyframes floatPrinciple1 {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(-7px) rotate(0.4deg); }
        }
        @keyframes floatPrinciple2 {
          0%, 100% { transform: translateY(0px) rotate(0.6deg); }
          50% { transform: translateY(6px) rotate(-0.3deg); }
        }
        @keyframes floatPrinciple3 {
          0%, 100% { transform: translateY(0px) scale(1.01); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes floatPrinciple4 {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(6px) rotate(0.3deg); }
        }
        @keyframes floatPrinciple5 {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50% { transform: translateY(-7px) rotate(-0.4deg); }
        }

        .anim-fade-up {
          animation: aboutFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-fade-left {
          animation: aboutFadeLeft 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-fade-right {
          animation: aboutFadeRight 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .float-p-1 { animation: floatPrinciple1 6.2s ease-in-out infinite; }
        .float-p-2 { animation: floatPrinciple2 6.8s ease-in-out infinite; }
        .float-p-3 { animation: floatPrinciple3 5.9s ease-in-out infinite; }
        .float-p-4 { animation: floatPrinciple4 6.5s ease-in-out infinite; }
        .float-p-5 { animation: floatPrinciple5 7.1s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .anim-fade-up, .anim-fade-left, .anim-fade-right,
          .float-p-1, .float-p-2, .float-p-3, .float-p-4, .float-p-5 {
            animation: none !important;
          }
        }
      `}</style>

      {/* Bio section */}
      <section className="pt-6 sm:pt-8 pb-6 sm:pb-8 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-2">
              {/* Consultant Name */}
              <h1
                className="font-serif text-3xl sm:text-4xl font-bold text-[#080B12] mb-3 tracking-tight anim-fade-left"
                style={{ animationDelay: '140ms' }}
              >
                {SITE.consultant}
              </h1>

              <p
                className="text-navy-600 designation text-xs sm:text-sm font-medium mb-4 anim-fade-left"
                style={{ animationDelay: '200ms' }}
              >
                {SITE.designation}
              </p>

              <div className="space-y-3.5 text-navy-600 leading-relaxed text-sm sm:text-base">
                <p
                  className="anim-fade-up"
                  style={{ animationDelay: '260ms' }}
                >
                  "I work with business owners, founders, directors and management teams to
                  identify growth opportunities, improve sales processes, strengthen operational
                  systems and develop practical strategies for sustainable business growth.
                </p>
                <p
                  className="anim-fade-up"
                  style={{ animationDelay: '320ms' }}
                >
                  My consulting approach combines business analysis, strategic planning, sales
                  development, operational improvement, technology advisory and implementation
                  support. The objective is to help businesses make informed decisions, establish
                  measurable performance systems and build scalable operating models."
                </p>
              </div>

              <div
                className="mt-6 p-5 sm:p-6 bg-navy-50 rounded-xl border border-navy-100 hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 anim-fade-up group cursor-default"
                style={{ animationDelay: '380ms' }}
              >
                <h3 className="font-semibold !text-[#080B12] mb-1.5 text-base group-hover:text-[#2563EB] transition-colors">
                  Operating Entity
                </h3>
                <p className="text-sm text-navy-600">{SITE.companyName}</p>
                <p className="text-sm text-navy-500 mt-1">Website: {SITE.website}</p>
              </div>
            </div>

            {/* Quick Contact Box: Animated entrance and interactive elements */}
            <div className="anim-fade-right" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[#171D2B] via-[#121824] to-[#080B12] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 text-[#F8FAFC] border border-[#2563EB]/40 shadow-xl shadow-[#080B12]/15 sticky top-24 hover:border-[#60A5FA]/60 transition-all duration-300">
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#2563EB]/30">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold !text-white tracking-tight">
                    Quick Contact
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA] animate-pulse" />
                </div>
                <div className="space-y-4 text-sm sm:text-base">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3.5 text-[#cbd5e1] hover:text-[#60A5FA] transition-colors group"
                  >
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Mail" className="w-4.5 h-4.5 text-[#60A5FA]" />
                    </div>
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{SITE.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex items-center gap-3.5 text-[#cbd5e1] hover:text-[#60A5FA] transition-colors group"
                  >
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Phone" className="w-4.5 h-4.5 text-[#60A5FA]" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">{SITE.phone}</span>
                  </a>
                  <div className="flex items-start gap-3.5 text-[#cbd5e1] group">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Icon name="MapPin" className="w-4.5 h-4.5 text-[#60A5FA]" />
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed">{SITE.coverage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Guiding Principles - Horizontally big boxes, near each other, with continuous floating animations */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-[#F8FAFC] border-t border-[#e2e8f0]">
        <div className="container-base">
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1 text-[#2563EB] anim-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Our Principles
            </p>
            <h2
              className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#080B12] tracking-tight anim-fade-up"
              style={{ animationDelay: '140ms' }}
            >
              Five Guiding Principles
            </h2>
            <p
              className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto anim-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              The values that shape every consulting engagement.
            </p>
          </div>

          <div className="relative max-w-6xl xl:max-w-7xl mx-auto my-3">
            {/* Desktop 3x3 layout: Horizontally big boxes, near each other, floating gently around center */}
            <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-5 xl:gap-6 relative items-stretch">
              {/* Subtle ambient crosshair guidelines connecting corners to center */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-15">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
                <div className="h-full w-px bg-gradient-to-b from-transparent via-[#2563EB] to-transparent absolute" />
              </div>

              {/* Box 1: Top-Left Corner (Horizontally Big & Floating) */}
              <div
                className="col-start-1 row-start-1 relative z-10 anim-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                <div className="float-p-1 h-full">
                  <PrincipleCard principle={principles[0]} theme={principleThemes[0]} index={1} />
                </div>
              </div>

              {/* Box 2: Top-Right Corner (Horizontally Big & Floating) */}
              <div
                className="col-start-3 row-start-1 relative z-10 anim-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                <div className="float-p-2 h-full">
                  <PrincipleCard principle={principles[1]} theme={principleThemes[1]} index={2} />
                </div>
              </div>

              {/* Box 3: Centre Anchor Box (Horizontally Big & Floating) */}
              <div
                className="col-start-2 row-start-2 relative z-20 anim-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                <div className="float-p-3 h-full">
                  <PrincipleCard principle={principles[2]} theme={principleThemes[2]} index={3} isCenter />
                </div>
              </div>

              {/* Box 4: Bottom-Left Corner (Horizontally Big & Floating) */}
              <div
                className="col-start-1 row-start-3 relative z-10 anim-fade-up"
                style={{ animationDelay: '400ms' }}
              >
                <div className="float-p-4 h-full">
                  <PrincipleCard principle={principles[3]} theme={principleThemes[3]} index={4} />
                </div>
              </div>

              {/* Box 5: Bottom-Right Corner (Horizontally Big & Floating) */}
              <div
                className="col-start-3 row-start-3 relative z-10 anim-fade-up"
                style={{ animationDelay: '500ms' }}
              >
                <div className="float-p-5 h-full">
                  <PrincipleCard principle={principles[4]} theme={principleThemes[4]} index={5} />
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Responsive Layout (< lg): Horizontally big boxes with floating animations */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 max-w-2xl sm:max-w-4xl mx-auto">
              {/* Box 1: Top-Left */}
              <div className="anim-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="float-p-1 h-full">
                  <PrincipleCard principle={principles[0]} theme={principleThemes[0]} index={1} />
                </div>
              </div>

              {/* Box 2: Top-Right */}
              <div className="anim-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="float-p-2 h-full">
                  <PrincipleCard principle={principles[1]} theme={principleThemes[1]} index={2} />
                </div>
              </div>

              {/* Box 3: Centre Box (Full width on tablet) */}
              <div
                className="sm:col-span-2 sm:max-w-xl sm:mx-auto w-full anim-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                <div className="float-p-3 h-full">
                  <PrincipleCard principle={principles[2]} theme={principleThemes[2]} index={3} isCenter />
                </div>
              </div>

              {/* Box 4: Bottom-Left */}
              <div className="anim-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="float-p-4 h-full">
                  <PrincipleCard principle={principles[3]} theme={principleThemes[3]} index={4} />
                </div>
              </div>

              {/* Box 5: Bottom-Right */}
              <div className="anim-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="float-p-5 h-full">
                  <PrincipleCard principle={principles[4]} theme={principleThemes[4]} index={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Background color removed as requested */}
      <CTASection
        title="Let's Discuss Your Business"
        description="Every business is unique. Let's talk about yours and how we can help it grow."
        transparent={true}
      />
    </>
  );
}
