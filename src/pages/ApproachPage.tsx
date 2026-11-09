import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { processSteps } from '@/lib/data';
import { Link } from '@/lib/router';

// Distinct icons matching each of the 6 process steps
const stepIcons: Record<number, string> = {
  1: 'MessageSquare',
  2: 'BarChart3',
  3: 'Lightbulb',
  4: 'CalendarCheck',
  5: 'Handshake',
  6: 'CheckCircle2',
};

// Flowing waterfall connector stream linking alternating steps (without circles)
function WaterfallStream({
  direction,
}: {
  direction: 'left-to-right' | 'right-to-left';
}) {
  const isLtoR = direction === 'left-to-right';
  return (
    <div className="relative my-3 md:my-5 pointer-events-none select-none">
      {/* Tablet & Desktop: Animated flowing curved stream */}
      <div className="hidden sm:block w-full h-16 md:h-20">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path
            d={
              isLtoR
                ? 'M 28 0 C 28 26, 72 14, 72 40'
                : 'M 72 0 C 72 26, 28 14, 28 40'
            }
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            className="water-stream-anim opacity-50"
          />
        </svg>
      </div>

      {/* Mobile: Compact vertical cascade connector */}
      <div className="sm:hidden flex items-center justify-center py-2">
        <div className="w-0.5 h-6 bg-[#cbd5e1]" />
      </div>
    </div>
  );
}

// Unified box theme matching the first box (Deep Midnight Executive Slate)
const boxTheme = {
  card: 'bg-gradient-to-br from-[#080B12] via-[#0e1626] to-[#171D2B] border-2 border-[#2563EB]/40 text-white shadow-xl shadow-[#080B12]/20 hover:border-[#60A5FA] hover:shadow-[#60A5FA]/20',
  icon: 'text-white',
  badge: 'bg-[#080B12] text-white border border-white/20',
  title: 'text-white',
  desc: 'text-[#cbd5e1]',
  accent: 'bg-gradient-to-r from-[#2563EB] to-[#60A5FA]',
  phase: 'text-[#60A5FA]',
};

// Individual Process Step Card with unified single color theme (matching the first box)
function ProcessCard({
  step,
  align = 'left',
}: {
  step: (typeof processSteps)[0];
  align?: 'left' | 'right';
}) {
  const iconName = stepIcons[step.step] || 'Target';

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ${boxTheme.card}`}
    >
      {/* Top row: Icon on left, Step pill on right */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${boxTheme.icon}`}
        >
          <Icon name={iconName} className="w-6 h-6" />
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="text-[11px] font-semibold tracking-wider uppercase opacity-75">
            Step
          </span>
          <span
            className={`px-3 py-1 rounded-full font-bold text-xs tracking-wider shadow-2xs ${boxTheme.badge}`}
          >
            0{step.step}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-lg sm:text-xl font-bold leading-snug ${boxTheme.title}`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className={`mt-2 text-sm leading-relaxed ${boxTheme.desc}`}>
        {step.description}
      </p>

      {/* Bottom accent indicator */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <div
          className={`h-1 w-12 rounded-full ${boxTheme.accent} group-hover:w-28 transition-all duration-500`}
        />
        <span className={`text-[11px] font-medium uppercase tracking-wider ${boxTheme.phase}`}>
          Cascade Phase 0{step.step}
        </span>
      </div>
    </div>
  );
}

export function ApproachPage() {
  return (
    <>
      {/* Cascade Animation Keyframes & Water Motions */}
      <style>{`
        @keyframes waterDropCascade {
          0% {
            opacity: 0;
            transform: translateY(-48px) scale(0.95);
            filter: blur(4px);
          }
          65% {
            opacity: 0.95;
            transform: translateY(6px) scale(1.01);
            filter: blur(0px);
          }
          85% {
            transform: translateY(-2px) scale(0.995);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes streamFlow {
          from {
            stroke-dashoffset: 24;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes waterCurrentFloatEven {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes waterCurrentFloatOdd {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }

        .waterfall-drop-card {
          animation: waterDropCascade 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .water-float-even {
          animation: waterCurrentFloatEven 6.4s ease-in-out infinite;
        }

        .water-float-odd {
          animation: waterCurrentFloatOdd 7.2s ease-in-out infinite;
        }

        .water-stream-anim {
          animation: streamFlow 2.2s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .waterfall-drop-card,
          .water-float-even,
          .water-float-odd,
          .water-stream-anim {
            animation: none !important;
          }
        }
      `}</style>

      {/* Cascading Waterfall Section: Heading towards the right (no background), Step 1 beside heading, and alternating descending flow */}
      <section className="bg-transparent py-14 sm:py-18 md:py-24 relative overflow-hidden">
        {/* Subtle decorative water gradient glow */}
        <div className="absolute top-12 right-0 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-base relative">
          {/* TOP TIER: Step 1 (left) positioned beside the Main Heading (right, no background) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Step 1: Positioned beside the main heading */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div
                className="waterfall-drop-card"
                style={{ animationDelay: '120ms' }}
              >
                <div className="water-float-odd">
                  <ProcessCard step={processSteps[0]} align="left" />
                </div>
              </div>
            </div>

            {/* Main Heading: Moved towards the right side of the page, NO background color */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3.5 shadow-2xs ml-auto">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                Our Approach
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#080B12] leading-tight">
                A Structured{' '}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
                  Consulting Process
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl ml-auto">
                From discovery to performance review, we follow a clear six-step process designed
                to turn analysis into action and action into measurable results.
              </p>
            </div>
          </div>

          {/* STREAM CONNECTOR: Step 1 (left) -> Step 2 (right) */}
          <WaterfallStream direction="left-to-right" />

          {/* TIER 2: Step 2 (staggered lower and shifted to the right) */}
          <div className="w-full max-w-xl ml-auto mr-0 lg:mr-8 xl:mr-16">
            <div
              className="waterfall-drop-card"
              style={{ animationDelay: '340ms' }}
            >
              <div className="water-float-even">
                <ProcessCard step={processSteps[1]} align="right" />
              </div>
            </div>
          </div>

          {/* STREAM CONNECTOR: Step 2 (right) -> Step 3 (left) */}
          <WaterfallStream direction="right-to-left" />

          {/* TIER 3: Step 3 (staggered lower and shifted to the left) */}
          <div className="w-full max-w-xl mr-auto ml-0 lg:ml-8 xl:ml-16">
            <div
              className="waterfall-drop-card"
              style={{ animationDelay: '560ms' }}
            >
              <div className="water-float-odd">
                <ProcessCard step={processSteps[2]} align="left" />
              </div>
            </div>
          </div>

          {/* STREAM CONNECTOR: Step 3 (left) -> Step 4 (right) */}
          <WaterfallStream direction="left-to-right" />

          {/* TIER 4: Step 4 (staggered lower and shifted to the right) */}
          <div className="w-full max-w-xl ml-auto mr-0 lg:mr-12 xl:mr-24">
            <div
              className="waterfall-drop-card"
              style={{ animationDelay: '780ms' }}
            >
              <div className="water-float-even">
                <ProcessCard step={processSteps[3]} align="right" />
              </div>
            </div>
          </div>

          {/* STREAM CONNECTOR: Step 4 (right) -> Step 5 (left) */}
          <WaterfallStream direction="right-to-left" />

          {/* TIER 5: Step 5 (staggered lower and shifted to the left) */}
          <div className="w-full max-w-xl mr-auto ml-0 lg:ml-4 xl:ml-12">
            <div
              className="waterfall-drop-card"
              style={{ animationDelay: '1000ms' }}
            >
              <div className="water-float-odd">
                <ProcessCard step={processSteps[4]} align="left" />
              </div>
            </div>
          </div>

          {/* STREAM CONNECTOR: Step 5 (left) -> Step 6 (right) */}
          <WaterfallStream direction="left-to-right" />

          {/* TIER 6: Step 6 (staggered lower and shifted to the right) */}
          <div className="w-full max-w-xl ml-auto mr-0 lg:mr-10 xl:mr-18">
            <div
              className="waterfall-drop-card"
              style={{ animationDelay: '1220ms' }}
            >
              <div className="water-float-even">
                <ProcessCard step={processSteps[5]} align="right" />
              </div>
            </div>
          </div>

          {/* WATERFALL POOL CTA: Centered CTA after completing all cascading steps */}
          <div className="text-center mt-16 sm:mt-20 relative z-20">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#2563EB]/15 via-[#60A5FA]/25 to-[#2563EB]/15 mb-4 animate-pulse">
              <div className="px-4 py-1.5 rounded-xl bg-[#080B12] text-xs font-semibold text-white flex items-center gap-2 shadow-2xs border border-[#2563EB]/40">
                <Icon name="Sparkles" className="w-3.5 h-3.5 text-white" />
                Ready to Put This Process to Work?
              </div>
            </div>
            <div>
              <Link
                to="/assessment"
                className="btn-gold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all"
              >
                Start Your Business Assessment
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works Section */}
      <section className="section-padding bg-[#F8FAFC] border-t border-[#e2e8f0]/80">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2.5">
              Why Our Approach Works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#080B12]">
              Strategy Meets Execution
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed">
              We don't just deliver presentations. We work alongside you to implement and measure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: 'Lightbulb',
                title: 'Analysis First',
                desc: 'Every recommendation is grounded in a thorough understanding of your business data and market context.',
              },
              {
                icon: 'Target',
                title: 'Measurable KPIs',
                desc: 'We define clear, trackable metrics so you always know whether initiatives are working.',
              },
              {
                icon: 'Handshake',
                title: 'Implementation Support',
                desc: 'We stay engaged through execution — guiding, reviewing and adjusting until results are achieved.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#bfdbfe]/50 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#080B12] border border-[#2563EB]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-[#60A5FA] transition-all duration-300 shadow-xs">
                  <Icon
                    name={item.icon}
                    className="w-7 h-7 text-white transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-[#080B12] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
