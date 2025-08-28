import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const faqItems = [
  { q: ['faq.q1', 'What does "no risk, pay from results" mean?'], a: ['faq.a1', 'It means you never pay upfront fees. We only charge 50% of the money we actually save you on your deals. If we find no savings, you owe us nothing.'] },
  { q: ['faq.q2', 'What happens during the free consultation?'], a: ['faq.a2', "We'll have a detailed discussion about your needs and review relevant contracts or issues. We identify opportunities and outline a strategy – all at no cost. You'll get a clear picture of how much you could save before deciding to move forward."] },
  { q: ['faq.q3', 'Which industries do you serve?'], a: ['faq.a3', 'We serve organizations and individuals across all sectors, from manufacturing and tech to healthcare and real estate. Any scenario where negotiation can improve outcomes is in scope.'] },
  { q: ['faq.q4', 'How are savings calculated?'], a: ['faq.a4', 'We compare the costs or terms before and after our negotiation. Your share of savings is straightforward – exactly 50% of the improvement we secure.'] },
  { q: ['faq.q5', 'What if a negotiation fails or takes too long?'], a: ['faq.a5', "We set clear timelines and metrics. If we can't achieve better terms or if talks stall, you still pay nothing – our fee is entirely performance-based. We focus on realistic goals from the start."] },
  { q: ['faq.q6', 'How do I get started?'], a: ['faq.a6', "It's easy: fill out the contact form below or book a time on our Calendly page. We'll schedule your free consultation and get the process going."] },
];

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          title={t('faq.title', 'Frequently Asked Questions')}
          subtitle={t('faq.subtitle', 'Find answers to common questions about our services and process')}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* FAQ Icon Section */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="slide-in-left">
                <div className="card-premium p-8 text-center lg:sticky lg:top-32">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl mb-6 icon-floating">
                    <HelpCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950 mb-4">
                    {t('faq.helpTitle', 'Need Help?')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('faq.helpText', "Can't find the answer you're looking for? We're here to help.")}
                  </p>
                  <button className="btn btn-outline w-full">
                    <a href="/#contact" className="btn btn-outline w-full">
                      {t('faq.contact', 'Contact Us Directly')}
                    </a>
                  </button>
                </div>
              </ScrollAnimation>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-2 space-y-4">
              {faqItems.map((faq, index) => (
                <ScrollAnimation
                  key={index}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="card-modern overflow-hidden transition-all duration-300 hover:shadow-modern">
                    <button
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                    >
                      <span className="text-lg font-bold pr-8 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                        {t(faq.q[0], faq.q[1])}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                        openIndex === index ? 'bg-blue-100 rotate-180' : 'group-hover:bg-gray-200'
                      }`}>
                        {openIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                        <p className="text-gray-600 leading-relaxed">
                          {t(faq.a[0], faq.a[1])}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Still have questions CTA */}
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="text-center">
              <div className="card-premium p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                  {t('faq.stillQuestions', 'Still Have Questions?')}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  {t('faq.contactText', "Our team is ready to provide personalized answers and guide you through our process. Let's discuss your specific situation.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#contact" className="btn btn-primary shadow-xl hover:shadow-blue-500/25">
                    {t('faq.freeConsultation', 'Schedule Free Consultation')}
                  </a>
                  <a href="/#contact" className="btn btn-outline">
                    {t('faq.emailUs', 'Send Us An Email')}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;