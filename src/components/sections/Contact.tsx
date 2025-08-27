import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-gradient-modern relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          title={t('contact.title', 'Get Your Free Consultation')}
          subtitle={t('contact.subtitle', 'Ready to start saving? Contact us today for a no-obligation consultation and see how much we can help you save.')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="card-premium p-8">
                  <h3 className="text-2xl font-bold text-navy-950 mb-6">
                    {t('contact.methods.title', 'Get In Touch')}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center icon-floating">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                          {t('contact.email.label', 'Email Us')}
                        </div>
                        <div className="text-gray-600">negotiation@dnego.com</div>
                        <div className="text-sm text-gray-500">
                          {t('contact.email.response', 'Response within 24 hours')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center icon-floating">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-950 group-hover:text-green-700 transition-colors duration-300">
                          {t('contact.phone.label', 'Call Us')}
                        </div>
                        <div className="text-gray-600">+39 3275859000</div>
                        <div className="text-sm text-gray-500">
                          {t('contact.phone.hours', 'Mon-Fri 9AM-6PM CET')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center icon-floating">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-950 group-hover:text-purple-700 transition-colors duration-300">
                          {t('contact.location.label', 'Location')}
                        </div>
                        <div className="text-gray-600">Parma, Italy</div>
                        <div className="text-sm text-gray-500">
                          {t('contact.location.note', 'Global consultations available')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Section */}
                <div className="card-premium p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <h4 className="text-xl font-bold text-navy-950 mb-4">
                    {t('contact.why.title', 'Why Start With Us?')}
                  </h4>
                  <div className="space-y-4">
                    {[
                      { text: t('contact.why.free', '100% Free consultation'), icon: CheckCircle },
                      { text: t('contact.why.risk', 'No upfront costs or risks'), icon: CheckCircle },
                      { text: t('contact.why.expert', 'Expert negotiation analysis'), icon: CheckCircle },
                      { text: t('contact.why.results', 'Pay only for results'), icon: CheckCircle },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="slide-in-right">
              <div className="card-premium p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-950">
                      {t('contact.form.title', 'Schedule Your Free Consultation')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact.form.subtitle', 'Tell us about your situation and we\'ll get back to you within 24 hours')}
                    </p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-950 mb-2">
                        {t('contact.form.firstName', 'First Name')} *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                        placeholder={t('contact.form.firstNamePlaceholder', 'Your first name')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-950 mb-2">
                        {t('contact.form.lastName', 'Last Name')} *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                        placeholder={t('contact.form.lastNamePlaceholder', 'Your last name')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-950 mb-2">
                        {t('contact.form.email', 'Email Address')} *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                        placeholder={t('contact.form.emailPlaceholder', 'your.email@example.com')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-950 mb-2">
                        {t('contact.form.phone', 'Phone Number')}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                        placeholder={t('contact.form.phonePlaceholder', '+1 (555) 123-4567')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      {t('contact.form.service', 'Type of Negotiation')}
                    </label>
                    <select
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                    >
                      <option value="">{t('contact.form.selectService', 'Select a service...')}</option>
                      <option value="real-estate">{t('servicesPreview.realEstate.title', 'Real Estate Negotiation')}</option>
                      <option value="salary">{t('servicesPreview.salary.title', 'Salary & Benefits Negotiation')}</option>
                      <option value="business">{t('servicesPreview.consulting.title', 'Business Consultation Services')}</option>
                      <option value="other">{t('contact.form.other', 'Other')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      {t('contact.form.message', 'Tell us about your situation')} *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 resize-vertical"
                      placeholder={t('contact.form.messagePlaceholder', 'Please describe your negotiation situation, goals, and any relevant details...')}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    fullWidth
                    className="shadow-xl hover:shadow-blue-500/25"
                  >
                    {t('contact.form.submit', 'Send My Request')}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">
                      {t('contact.guarantee.title', 'Our Response Guarantee')}
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">
                    {t('contact.guarantee.text', 'We respond to all inquiries within 24 hours during business days. Your consultation is completely free with no obligations.')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;