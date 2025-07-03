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
              <p className="text-xl text-gray-300 mb-6">Effective Date: 3 luglio 2025</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollAnimation animation="fade-in">
            <article className="prose lg:prose-lg text-gray-700">
              <p>
                At DNego, we respect your privacy and are committed to protecting
                your personal data. This Privacy Policy explains how we collect,
                use, store, and protect your information when you use our
                website or services.
              </p>

              <h2>1. Introduction</h2>
              <p>
                DNego collects and processes personal data in accordance with
                this Privacy Policy and applicable privacy laws. By using our
                website or services, you acknowledge and consent to the
                practices described herein.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  Personal details you voluntarily provide when you contact us or
                  request our services, including your name, email address, phone
                  number, and any other information you choose to share.
                </li>
                <li>
                  Basic usage data (such as IP address, browser type, and pages
                  visited) collected automatically to help us understand and
                  improve your experience on our website.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Respond to your inquiries and provide the requested services.</li>
                <li>Manage and improve our website and services.</li>
                <li>
                  Communicate with you about your request or updates regarding our
                  offerings.
                </li>
              </ul>
              <p>
                We will not use your data for purposes incompatible with those
                outlined above without your consent.
              </p>

              <h2>4. Sharing of Information</h2>
              <p>We do not sell or rent your personal information to third parties.</p>
              <p>We may share your information only:</p>
              <ul>
                <li>
                  With trusted service providers who assist us in delivering our
                  services, under strict confidentiality obligations.
                </li>
                <li>
                  If required by law, legal process, or to protect our rights and
                  safety.
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                safeguard your personal data against loss, unauthorized access,
                or misuse. However, please note that no method of electronic
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccuracies.</li>
                <li>Request deletion of your personal data (where applicable).</li>
              </ul>
              <p>
                To exercise these rights, please contact us at the email address
                provided below. We will respond to your request in accordance
                with applicable laws.
              </p>

              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes
                in our practices or for other operational, legal, or regulatory
                reasons. The updated policy will be posted on this page with the
                revised date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p>📧 Email: negotiation@dnego.com</p>
            </article>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Privacy;