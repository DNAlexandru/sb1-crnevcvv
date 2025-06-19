import ScrollAnimation from '../components/utils/ScrollAnimation';

const Privacy = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Your privacy is important to us. This policy explains how we
                handle your data.
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
              <h2>1. Introduction</h2>
              <p>
                Nego Consulting collects and processes personal data in
                accordance with this Privacy Policy and applicable laws. By
                using our website or services, you consent to this processing.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We collect the information you provide when contacting us or
                requesting services. This may include your name, email address,
                phone number, and any details you choose to share. We also gather
                basic usage data from our website.
              </p>

              <h2>3. How We Use Information</h2>
              <p>
                Your information is used to respond to inquiries, deliver our
                services, and improve our offerings. We may also send
                communications related to your request or our services.
              </p>

              <h2>4. Sharing of Information</h2>
              <p>
                We do not sell your personal data. Information may be shared with
                trusted service providers as necessary to operate our business or
                if required by law.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your data.
                However, no method of transmission over the Internet is
                completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal information. To exercise these rights, please contact us
                using the details below.
              </p>

              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with a revised date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                For questions about this Privacy Policy, please email
                alexandru.buruiana@outlook.it.
              </p>
            </article>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
