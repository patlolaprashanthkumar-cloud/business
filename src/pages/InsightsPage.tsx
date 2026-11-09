import { useState, useEffect, useRef, useCallback } from 'react';
import { CTASection } from '@/components/CTASection';
import { Icon } from '@/components/Icon';
import { useNavigate } from '@/lib/router';
import { articles } from '@/lib/articles';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function InsightsPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = articles.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Continuous auto-rotation infinite loop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  return (
    <>
      {/* Perspective and 3D stacked transform rules */}
      <style>{`
        .perspective-stage {
          perspective: 1200px;
          perspective-origin: 50% 50%;
          transform-style: preserve-3d;
        }

        .card-3d-transition {
          transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .card-3d-transition {
            transition: none !important;
          }
        }
      `}</style>

      {/* Main Heading - Transparent background and centered horizontally */}
      <section className="bg-transparent pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 relative overflow-hidden">
        <div className="container-base relative text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3.5 shadow-2xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            Insights
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#080B12] leading-tight max-w-3xl mx-auto">
            Business Insights & Resources
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#334155] max-w-2xl mx-auto leading-relaxed">
            Practical articles on business growth, strategy, sales, operations and scaling —
            written for business owners and leaders.
          </p>
        </div>
      </section>

      {/* 3D Stacked Card Carousel Section - Dark color inside cards, continuous auto-rotation */}
      <section
        className="py-6 sm:py-10 bg-transparent relative overflow-x-clip select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="3D Stacked Insights Carousel"
        ref={containerRef}
      >
        {/* Subtle edge vignette fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-25" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-25" />

        {/* 3D Perspective Stage */}
        <div className="relative max-w-6xl mx-auto px-4 h-[440px] sm:h-[460px] md:h-[480px] flex items-center justify-center perspective-stage">
          {articles.map((article, idx) => {
            // Circular offset relative to active card (-4 to +4)
            let diff = idx - activeIndex;
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeftOne = diff === -1;
            const isRightOne = diff === 1;
            const isLeftTwo = diff === -2;
            const isRightTwo = diff === 2;
            const isVisible = Math.abs(diff) <= 2;

            // Compute dynamic 3D transformation values
            let translateX = '0%';
            let translateZ = '0px';
            let rotateY = '0deg';
            let scale = 1;
            let zIndex = 10;
            let opacity = 0;
            let pointerEvents: 'auto' | 'none' = 'none';
            let shadowStyle = 'none';

            if (isCenter) {
              translateX = '0%';
              translateZ = '0px';
              rotateY = '0deg';
              scale = 1;
              zIndex = 30;
              opacity = 1;
              pointerEvents = 'auto';
              shadowStyle =
                '0 25px 50px -12px rgba(8, 11, 18, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)';
            } else if (isLeftOne) {
              translateX = 'calc(-56% - 12px)';
              translateZ = '-75px';
              rotateY = '11deg';
              scale = 0.88;
              zIndex = 20;
              opacity = 0.88;
              pointerEvents = 'auto';
              shadowStyle =
                '0 18px 36px -10px rgba(8, 11, 18, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)';
            } else if (isRightOne) {
              translateX = 'calc(56% + 12px)';
              translateZ = '-75px';
              rotateY = '-11deg';
              scale = 0.88;
              zIndex = 20;
              opacity = 0.88;
              pointerEvents = 'auto';
              shadowStyle =
                '0 18px 36px -10px rgba(8, 11, 18, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)';
            } else if (isLeftTwo) {
              translateX = 'calc(-100% - 20px)';
              translateZ = '-150px';
              rotateY = '20deg';
              scale = 0.76;
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = 'auto';
              shadowStyle = '0 10px 24px -8px rgba(8, 11, 18, 0.2)';
            } else if (isRightTwo) {
              translateX = 'calc(100% + 20px)';
              translateZ = '-150px';
              rotateY = '-20deg';
              scale = 0.76;
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = 'auto';
              shadowStyle = '0 10px 24px -8px rgba(8, 11, 18, 0.2)';
            } else {
              // Offstage rear cards
              translateX = diff < 0 ? '-130%' : '130%';
              translateZ = '-240px';
              rotateY = diff < 0 ? '25deg' : '-25deg';
              scale = 0.65;
              zIndex = 0;
              opacity = 0;
              pointerEvents = 'none';
            }

            return (
              <div
                key={article.slug}
                onClick={() => {
                  if (isCenter) {
                    navigate(`/insights/${article.slug}`);
                  } else if (isVisible) {
                    setActiveIndex(idx);
                  }
                }}
                className="card-3d-transition absolute top-1/2 left-1/2 w-[85vw] max-w-[310px] sm:max-w-[360px] md:max-w-[420px] bg-[#171D2B] rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-navy-700/80 flex flex-col justify-between cursor-pointer group hover:border-slate-500 transition-colors"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents,
                  visibility: isVisible ? 'visible' : 'hidden',
                  boxShadow: shadowStyle,
                }}
                role="article"
                aria-current={isCenter ? 'true' : 'false'}
              >
                {/* Top: Icon & Category */}
                <div>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 text-slate-300">
                    <Icon
                      name="FileText"
                      className="w-6 h-6 text-slate-300"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif font-bold text-white mb-2.5 leading-snug line-clamp-2 ${
                      isCenter
                        ? 'text-lg sm:text-xl md:text-2xl'
                        : 'text-base sm:text-lg md:text-xl'
                    }`}
                  >
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Bottom: Date & Reading Time */}
                <div className="pt-4 border-t border-navy-800 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Icon name="Calendar" className="w-3.5 h-3.5 text-slate-400" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Icon name="Clock" className="w-3.5 h-3.5 text-slate-400" />
                      {article.readingTime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Interactive Controls (Arrows, Indicator Dots, Counter - No Pause/Unpause Button) */}
        <div className="max-w-2xl mx-auto px-4 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous / Next Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous insight card"
              className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0] text-[#080B12] hover:bg-slate-50 shadow-sm hover:shadow flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Icon name="ChevronLeft" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next insight card"
              className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0] text-[#080B12] hover:bg-slate-50 shadow-sm hover:shadow flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Icon name="ChevronRight" className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pagination">
            {articles.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to card ${i + 1}`}
                role="tab"
                aria-selected={activeIndex === i}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? 'w-7 h-2.5 bg-[#080B12] shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
          </div>

          {/* Active Card Counter */}
          <div className="text-xs font-semibold text-[#64748b] tracking-wider uppercase">
            <span className="text-[#080B12] font-bold">0{activeIndex + 1}</span>
            <span className="mx-1 text-[#cbd5e1]">/</span>
            <span>0{total}</span>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
