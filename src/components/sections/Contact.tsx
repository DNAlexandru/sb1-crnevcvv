import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ScrollAnimation from "../utils/ScrollAnimation";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        console.log(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          formRef.current,
        );
        console.log(new FormData(formRef.current));
        try {
          await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          );
        } catch (error) {
          console.error(error);
        }
      }

      setSubmitted(true);
      setFormData({
        user_name: "",
        user_email: "",
        user_message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title={t('contact.title', 'Contact & Booking')}
          subtitle={t(
            'contact.subtitle',
            'Ready to start saving? Get in touch for your free consultation'
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimation animation="slide-up">
            <div className="bg-navy-950 text-white p-8 lg:p-12 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-white">
                {t('contact.getInTouch', 'Get In Touch')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">
                      {t('contact.email', 'Email')}
                    </h4>
                    <a
                      href="mailto:negotiation@dnego.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      negotiation@dnego.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">
                      {t('contact.phone', 'Phone')}
                    </h4>
                    <a
                      href="tel:+393275859000"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      +39 3275859000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">
                      {t('contact.location', 'Location')}
                    </h4>
                    <p className="text-gray-300">Parma, Italy</p>
                    <p className="text-gray-400">
                      {t('contact.locationNote', '(Consultations available globally)')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4 text-white">
                  {t('contact.upcoming', 'Upcoming Courses')}
                </h4>
                <p className="text-gray-300 mb-4">
                  {t(
                    'contact.upcomingDesc',
                    'DNego is developing online courses to train you in negotiation excellence. Enter your email in the form to receive updates and early access.'
                  )}
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>{t('contact.course1', 'Advanced Negotiation Techniques')}</li>
                  <li>{t('contact.course2', 'Negotiation for Project Managers')}</li>
                  <li>{t('contact.course3', 'Supplier Management & Strategy')}</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation animation="slide-up" delay={200}>
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-navy-950">
                {t('contact.formTitle', 'Send us a Message')}
              </h3>

              {submitted ? (
                <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-4">
                  {t('contact.success', "Thank you for your message! We'll be in touch shortly.")}
                </div>
              ) : null}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('contact.nameLabel', 'Full Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        t('contact.nameInvalid', 'Please enter your full name')
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder={t('contact.namePlaceholder', 'Your name')}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('contact.emailLabel', 'Email Address')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        t('contact.emailInvalid', 'Please enter a valid email address')
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder={t('contact.emailPlaceholder', 'your.email@example.com')}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('contact.messageLabel', 'Your Message')}
                  </label>
                  <textarea
                    id="message"
                    name="user_message"
                    value={formData.user_message}
                    onChange={handleChange}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        t('contact.messageInvalid', 'Please enter your message')
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder={t('contact.messagePlaceholder', 'How can we help you?')}
                    required
                  />
                </div>

                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700"
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        t('contact.privacyInvalid', 'You must agree to the privacy policy')
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t('contact.privacyText', 'I agree to the ')}{" "}
                    <a href="/privacy" className="text-blue-700 underline">
                      {t('contact.privacyPolicy', 'privacy policy')}
                    </a>{" "}
                    {t('contact.privacyContinue', 'and consent to being contacted regarding my inquiry.')}
                  </label>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {isSubmitting
                    ? t('contact.sending', 'Sending...')
                    : t('contact.submit', 'Send Message')}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
