import { SITE } from '@/lib/constants';

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 2026">
      <Section heading="Introduction">
        <p>{SITE.companyName} ("we", "us", "our") is committed to protecting the privacy of visitors
        to our website and users of our consulting services. This Privacy Policy explains how we
        collect, use and protect your personal information when you interact with our website or
        engage our services.</p>
      </Section>
      <Section heading="Information We Collect">
        <p>We collect information that you provide directly to us through our website forms,
        including your name, email address, phone number, company name, business details and any
        other information you choose to share. We also collect usage data such as pages visited
        and time spent on our website through standard analytics tools.</p>
      </Section>
      <Section heading="How We Use Your Information">
        <p>We use the information you provide to respond to your enquiries, schedule consultations,
        prepare business assessments and proposals, deliver consulting services, and communicate
        with you about our services. We do not sell, rent or trade your personal information to
        third parties.</p>
      </Section>
      <Section heading="Data Storage and Security">
        <p>Your information is stored securely using industry-standard encryption and access controls.
        We use Supabase (a managed PostgreSQL database) for storing form submissions. Access to
        your data is restricted to authorised personnel only. We retain submitted information for
        as long as necessary to provide our services and respond to your requests.</p>
      </Section>
      <Section heading="Cookies">
        <p>Our website may use cookies and similar technologies to improve your browsing experience
        and analyse website traffic. You can control cookies through your browser settings.</p>
      </Section>
      <Section heading="Third-Party Links">
        <p>Our website may contain links to third-party websites. We are not responsible for the
        privacy practices or content of these external sites. We encourage you to review their
        privacy policies before providing any personal information.</p>
      </Section>
      <Section heading="Your Rights">
        <p>You have the right to request access to, correction of, or deletion of your personal
        information. To exercise these rights or if you have questions about our privacy practices,
        please contact us at {SITE.email}.</p>
      </Section>
      <Section heading="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated revision date.</p>
      </Section>
      <Section heading="Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us at {SITE.email}
        or {SITE.phone}.</p>
      </Section>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="October 2026">
      <Section heading="Introduction">
        <p>These Terms and Conditions govern your use of the {SITE.website} website and the
        consulting services provided by {SITE.companyName}. By accessing our website or engaging
        our services, you agree to these terms.</p>
      </Section>
      <Section heading="Consulting Services">
        <p>We provide business consulting services including strategy, sales, operations, financial
        planning, technology advisory, market expansion and ongoing advisory support. The scope,
        deliverables, fees and timeline of each engagement are defined in a separate client proposal
        or engagement agreement.</p>
      </Section>
      <Section heading="No Guaranteed Outcomes">
        <p>Business outcomes depend on many factors including the client's circumstances, market
        conditions, and the extent to which recommendations are implemented. We do not guarantee
        specific results, revenue growth or business performance. Our role is to provide expert
        analysis, practical strategies and implementation support.</p>
      </Section>
      <Section heading="Professional Services Disclaimer">
        <p>Our consulting services do not constitute statutory audit, tax filing, legal advice or
        other regulated professional services. Where such services are required, they must be
        provided by appropriately qualified and authorised professionals.</p>
      </Section>
      <Section heading="Pricing">
        <p>Prices displayed on our website are indicative starting prices. Final fees depend on
        business size, scope, complexity and engagement duration, and are specified in the client
        proposal. Applicable taxes and payment terms are also specified in the proposal.</p>
      </Section>
      <Section heading="Intellectual Property">
        <p>All content on this website, including text, articles, designs and logos, is the property
        of {SITE.companyName} and is protected by intellectual property laws. You may not reproduce,
        distribute or use our content without prior written permission.</p>
      </Section>
      <Section heading="Website Use">
        <p>You agree to use our website lawfully and not to disrupt, damage or interfere with its
        operation. We reserve the right to modify or discontinue any part of the website at any time.</p>
      </Section>
      <Section heading="Limitation of Liability">
        <p>To the maximum extent permitted by law, {SITE.companyName} shall not be liable for any
        indirect, incidental or consequential damages arising from your use of our website or
        consulting services.</p>
      </Section>
      <Section heading="Governing Law">
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the
        jurisdiction of the courts in Hyderabad, Telangana.</p>
      </Section>
      <Section heading="Contact">
        <p>For questions about these Terms and Conditions, contact us at {SITE.email} or {SITE.phone}.</p>
      </Section>
    </LegalLayout>
  );
}

export function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="October 2026">
      <Section heading="General Information">
        <p>The information provided on this website and through our consulting services is for
        general informational purposes only. It is not intended to constitute professional advice
        of any kind, and should not be relied upon as such.</p>
      </Section>
      <Section heading="No Guaranteed Results">
        <p>While we strive to provide high-quality consulting services, business outcomes depend
        on numerous factors including client implementation, market conditions and external
        circumstances. We do not guarantee specific results, revenue figures, or business performance
        outcomes. Any references to potential growth or improvement are illustrative and not promises.</p>
      </Section>
      <Section heading="Regulated Services">
        <p>Our consulting services do not include statutory audit, tax filing, legal advice, or other
        regulated professional services. These must be provided by appropriately qualified and
        authorised professionals. We can help identify when such services are needed and recommend
        engaging the appropriate professionals.</p>
      </Section>
      <Section heading="No False Claims">
        <p>We do not claim professional accreditations, certifications, awards or client endorsements
        that we do not possess. All information about our services, pricing and approach is presented
        in good faith and is accurate to the best of our knowledge.</p>
      </Section>
      <Section heading="Website Content">
        <p>The articles and insights published on our website are original content created to provide
        helpful business guidance. They do not constitute professional advice and should not be the
        sole basis for business decisions. We do not fabricate statistics, research citations or
        author credentials.</p>
      </Section>
      <Section heading="External Links">
        <p>Our website may contain links to external websites. We do not control and are not
        responsible for the content, accuracy or practices of these external sites.</p>
      </Section>
      <Section heading="Contact">
        <p>For any questions about this disclaimer, contact us at {SITE.email} or {SITE.phone}.</p>
      </Section>
    </LegalLayout>
  );
}

function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10" />
        <div className="container-base relative">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-3 text-sm text-navy-300">Last updated: {lastUpdated}</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-base max-w-3xl">
          <div className="space-y-6">{children}</div>
        </div>
      </section>
    </>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-xl font-bold text-navy-900 mb-2">{heading}</h2>
      <div className="text-navy-600 leading-relaxed text-[0.95rem]">{children}</div>
    </div>
  );
}
