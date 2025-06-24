import ScrollAnimation from '../components/utils/ScrollAnimation';

const Terms = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Please read these terms carefully before using our services.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollAnimation animation="fade-in">
            <article className="prose lg:prose-lg text-gray-700">
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
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Terms;
