import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const faqItems = [
  { q: ['faq.q1', 'What does "no risk, pay from results" mean?'], a: ['faq.a1', 'It means you never pay upfront fees. We only charge 40% of the money we actually save you on your deals. If we find no savings, you owe us nothing.'] },
  { q: ['faq.q2', 'What happens during the free consultation?'], a: ['faq.a2', "We'll have a detailed discussion about your needs and review relevant contracts or issues. We identify opportunities and outline a strategy – all at no cost. You'll get a clear picture of how much you could save before deciding to move forward."] },
  { q: ['faq.q3', 'Which industries do you serve?'], a: ['faq.a3', 'We serve organizations and individuals across all sectors, from manufacturing and tech to healthcare and real estate. Any scenario where negotiation can improve outcomes is in scope.'] },
  { q: ['faq.q4', 'How are savings calculated?'], a: ['faq.a4', 'We compare the costs or terms before and after our negotiation. You keep 60% of the improvement we secure, and we earn the remaining 40%.'] },
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
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title={t('faq.title', 'Frequently Asked Questions')}
          subtitle={t('faq.subtitle', 'Find answers to common questions about our services and process')}
        />
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="mb-4">
                <button
                  className={`w-full flex justify-between items-center p-6 rounded-lg text-left focus:outline-none transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-lg'
                      : 'bg-white hover:bg-gray-100 shadow'
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                    <span className="text-lg font-bold pr-8">{t(faq.q[0], faq.q[1])}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-midnight-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-navy-900 flex-shrink-0" />
                  )}
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-2 bg-white rounded-b-lg shadow-lg">
                    <p className="text-gray-600">{t(faq.a[0], faq.a[1])}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;