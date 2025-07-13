import { MessageCircle, PieChart, Users, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
  {
    icon: MessageCircle,             // ← sostituito FileQuestion con MessageCircle
    title: 'Free Consultation',
    description: 'We discuss your needs and review current contracts at no charge. We ask questions and listen carefully to understand your objectives and pain points.',
  },
  {
    icon: PieChart,
    title: 'Analysis & Strategy',
    description: 'We audit your agreements and market conditions, then develop a negotiation plan. This involves thorough research, benchmarking, and setting clear targets for improvement.',
  },
  {
    icon: Users,
    title: 'Expert Negotiation',
    description: 'Our seasoned negotiators engage with the other party, armed with a data-driven strategy. We use proven tactics and clear communication to steer talks toward the best outcome.',
  },
  {
    icon: CheckCircle,
    title: 'Results & Payment',
    description: 'We finalize the improved deal and quantify the savings. You keep half of the gains and pay us the other half. If no savings are achieved, you owe us nothing.',
  },
];

const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title={t('how.title', 'How It Works')}
          subtitle={t('how.subtitle', 'Our proven four-step process delivers measurable results with no upfront costs')}
        />
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                delay={index * 200}
              >
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Spacer for alternating sides */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Timeline dot */}
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 z-10 mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border">
                      <div className={`flex items-center mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                        <step.icon className={`h-8 w-8 text-blue-700 ${index % 2 === 0 ? 'mr-4' : 'md:order-2 md:ml-4'}`} />
                        <h3 className="text-xl font-bold text-navy-950">{t(`how.step${index+1}.title`, step.title)}</h3>
                      </div>
                      <p className="text-gray-600">{t(`how.step${index+1}.desc`, step.description)}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
