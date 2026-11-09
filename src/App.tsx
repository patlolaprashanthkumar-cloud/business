import { RouterProvider, useRouter } from '@/lib/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Icon } from '@/components/Icon';
import { WHATSAPP_URL } from '@/lib/constants';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { ApproachPage } from '@/pages/ApproachPage';
import { PricingPage } from '@/pages/PricingPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ContactPage } from '@/pages/ContactPage';
import { AssessmentPage } from '@/pages/AssessmentPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PrivacyPage, TermsPage, DisclaimerPage } from '@/pages/LegalPages';

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#171D2B] hover:bg-[#2563EB] text-white rounded-full flex items-center justify-center border-2 border-[#2563EB]/50 hover:border-[#60A5FA] shadow-xl shadow-[#080B12]/30 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="WhatsApp" className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
      <span className="absolute right-16 bg-[#171D2B] text-[#F8FAFC] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#2563EB]/40 shadow-lg shadow-[#080B12]/20 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none -translate-x-1 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
    </a>
  );
}

function Routes() {
  const { path } = useRouter();
  const cleanPath = path.split('#')[0].split('?')[0];

  let page: React.ReactNode;
  if (cleanPath === '/') page = <HomePage />;
  else if (cleanPath === '/about') page = <AboutPage />;
  else if (cleanPath === '/services') page = <ServicesPage />;
  else if (cleanPath === '/industries') page = <IndustriesPage />;
  else if (cleanPath === '/approach') page = <ApproachPage />;
  else if (cleanPath === '/pricing') page = <PricingPage />;
  else if (cleanPath === '/insights') page = <InsightsPage />;
  else if (cleanPath.startsWith('/insights/')) {
    const slug = cleanPath.replace('/insights/', '');
    page = <ArticlePage slug={slug} />;
  }
  else if (cleanPath === '/contact') page = <ContactPage />;
  else if (cleanPath === '/assessment') page = <AssessmentPage />;
  else if (cleanPath === '/privacy') page = <PrivacyPage />;
  else if (cleanPath === '/terms') page = <TermsPage />;
  else if (cleanPath === '/disclaimer') page = <DisclaimerPage />;
  else page = <NotFoundPage />;

  return page;
}

function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <Navbar />
        <main className="flex-1">
          <Routes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </RouterProvider>
  );
}

export default App;
