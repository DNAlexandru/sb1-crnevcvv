import ScrollAnimation from '../components/utils/ScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
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
                <span className="text-white text-sm font-medium">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                {t('privacy.title', 'Privacy Policy')}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                {t('privacy.subtitle', 'Effective Date: 3 luglio 2025')}
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
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
