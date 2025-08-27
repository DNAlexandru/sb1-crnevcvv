import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";

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

  const contactFaqItems = [
    { q: ['contactFaq.q1', 'How quickly will you respond to my inquiry?'], a: ['contactFaq.a1', 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.'] },
    { q: ['contactFaq.q2', 'What happens during the initial consultation?'], a: ['contactFaq.a2', "During your free 30-minute consultation, we'll discuss your specific negotiation needs, review any relevant contracts or issues, and outline potential savings opportunities. This is completely non-binding and at no cost to you."] },
    { q: ['contactFaq.q3', 'Do I need to prepare anything for our first call?'], a: ['contactFaq.a3', "While not required, having any relevant contracts or documentation ready can help us provide more specific guidance during the initial consultation. However, we're happy to start with just a conversation about your needs."] },
    { q: ['contactFaq.q4', 'Can you accommodate international clients in different time zones?'], a: ['contactFaq.a4', 'Absolutely! We work with clients globally and can schedule consultations to accommodate your time zone. Our online booking system shows availability in your local time.'] },
  ];

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
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-modern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-navy-950 text-sm font-medium">Contattaci</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-950 leading-tight">
                {t('contact.heroTitle', 'Contact Us')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <p className="text-xl md:text-2xl text-navy-950 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                {t('contact.heroSubtitle', 'Ready to start saving? Get in touch for your free consultation.')}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Contact Info */}
            <ScrollAnimation animation="slide-up">
              <div className="card-premium p-8 lg:p-12 h-full group hover:shadow-floating transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center icon-floating">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                  {t('contact.getInTouch', 'Get In Touch')}
                  </h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-8" />

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center icon-floating shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-navy-950">{t('contact.email', 'Email')}</h4>
                      <a
                        href="mailto:negotiation@dnego.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                      >
                        negotiation@dnego.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center icon-floating shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-navy-950">{t('contact.phone', 'Phone')}</h4>
                      <a
                        href="tel:+393275859000"
                        className="text-gray-600 hover:text-green-600 transition-colors text-lg"
                      >
                        +39 3275859000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center icon-floating shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-navy-950">{t('contact.location', 'Location')}</h4>
                      <p className="text-gray-600 text-lg">Parma, Italy</p>
                      <p className="text-gray-500">
                        {t('contact.locationNote', '(Consultations available globally)')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950">
                    {t('contact.ourPromiseTitle', 'Our Promise')}
                    </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                    {t('contact.ourPromiseText', 'Remember, our consultation is completely free with no obligation. We only get paid if we save you money, charging 50% of the verified savings.')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="card-premium p-8 lg:p-12 group hover:shadow-floating transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center icon-floating">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-950 group-hover:text-purple-700 transition-colors duration-300">
                  {t('contact.formTitle', 'Send us a Message')}
                  </h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6" />

                {submitted ? (
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700 p-6 rounded-xl mb-6 shadow-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    {t('contact.success', "Thank you for reaching out! We'll be in touch shortly.")}
                    </div>
                  </div>
                ) : null}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t('contact.nameLabel', 'Full Name')} *
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
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 shadow-sm"
                        placeholder={t('contact.namePlaceholder', 'Your name')}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t('contact.emailLabel', 'Email Address')} *
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
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 shadow-sm"
                        placeholder={t('contact.emailPlaceholder', 'your.email@example.com')}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t('contact.messageLabel', 'Your Message')} *
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
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 resize-vertical shadow-sm"
                      placeholder={t('contact.messagePlaceholder', "Tell us about your negotiation needs or any specific contracts you'd like us to review.")}
                      required
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
                    type="submit"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : ArrowRight}
                    iconPosition="right"
                  >
                    {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.submit', 'Send Message')}
                  </Button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gradient-modern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <SectionHeading
            title={t('contactFaq.title', 'Contact FAQs')}
            subtitle={t('contactFaq.subtitle', 'Common questions about getting in touch and scheduling consultations')}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            {contactFaqItems.map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                <div className="card-premium p-8 mb-6 group hover:shadow-floating transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 icon-floating">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {t(faq.q[0], faq.q[1])}
                    </h3>
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 ml-14 group-hover:w-20 transition-all duration-500" />
                  <p className="text-gray-600 leading-relaxed ml-14">{t(faq.a[0], faq.a[1])}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
