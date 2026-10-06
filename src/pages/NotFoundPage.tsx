import { Link } from '@/lib/router';
import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/constants';

export function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-navy-50">
      <div className="container-base text-center">
        <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="font-serif font-bold text-3xl text-navy-300">404</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-navy-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Icon name="ArrowLeft" className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
