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
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="MessageCircle" className="w-7 h-7 text-white" />
      <span className="absolute right-16 bg-navy-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
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
      <div className="min-h-screen flex flex-col bg-white">
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
