import ScrollAnimation from '../components/utils/ScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-premium text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/20">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm font-medium">Termini di Servizio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                {t('terms.title', 'Terms of Service')}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                {t('terms.subtitle', 'Please read these terms carefully before using our services.')}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container max-w-3xl">
          <ScrollAnimation animation="fade-in">
            <div className="card-premium p-8 md:p-12 relative z-10">
              <article className="prose lg:prose-lg text-gray-700 max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using DNego&apos;s website or services, you
                agree to be bound by these Terms of Service. If you do not agree
                with any part of the terms, you should not use our site or
                engage our services.
              </p>

              <h2>2. Services Provided</h2>
              <p>
                DNego offers professional negotiation and consulting
                services. Specific deliverables and timelines will be outlined in
                our written agreement or proposal.
              </p>

              <h2>3. Performance-Based Fee</h2>
              <p>
                Unless otherwise agreed, our compensation equals fifty percent of
                the verified savings or improvements that we achieve for you. If
                we are unable to demonstrate measurable savings, no fee is due.
              </p>

              <h2>4. Client Responsibilities</h2>
              <p>
                You agree to provide accurate information, cooperate in good
                faith, and respond to requests in a timely manner so that we can
                negotiate effectively on your behalf.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content on this site, including text, images, and graphics,
                is the property of DNego. You may not reproduce or
                distribute any materials without prior written consent.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                We strive to provide accurate advice, but we cannot guarantee any
                specific outcome. To the fullest extent permitted by law, DNego
                Consulting shall not be liable for indirect or consequential
                damages arising from the use of our services or website.
              </p>

              <h2>7. Termination</h2>
              <p>
                Either party may terminate our engagement at any time. Fees for
                completed negotiations or services delivered prior to
                termination remain payable.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Italy. Any disputes will
                be handled exclusively in the courts of Parma, Italy.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                For questions about these Terms of Service, please email us at
                negotiation@dnego.com.
              </p>
            </article>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Terms;
