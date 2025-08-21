import { MessageCircle, PieChart, Users, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    description: 'We discuss your needs and review current contracts at no charge. We ask questions and listen carefully to understand your objectives and pain points.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: PieChart,
    title: 'Analysis & Strategy',
    description: 'We audit your agreements and market conditions, then develop a negotiation plan. This involves thorough research, benchmarking, and setting clear targets for improvement.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Expert Negotiation',
    description: 'Our seasoned negotiators engage with the other party, armed with a data-driven strategy. We use proven tactics and clear communication to steer talks toward the best outcome.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: CheckCircle,
    title: 'Results & Payment',
    description: 'We finalize the improved deal and quantify the savings. You keep half of the gains and pay us the other half. If no savings are achieved, you owe us nothing.',
    gradient: 'from-orange-500 to-orange-600',
  },
];

const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-gradient-modern relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          title={t('how.title', 'How It Works')}
          subtitle={t('how.subtitle', 'Our proven four-step process delivers measurable results with no upfront costs')}
        />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Modern Timeline */}
          <div className="hidden md:block">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                delay={index * 200}
              >
                <div className={`flex items-center mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'} last:mb-0`}>
                  {/* Content Card */}
                  <div className="w-5/12">
                    <div className="card-premium p-8 group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} text-white rounded-2xl mb-6 icon-floating shadow-lg`}>
                          <step.icon className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                          {t(`how.step${index+1}.title`, step.title)}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {t(`how.step${index+1}.desc`, step.description)}
                        </p>
                        
                        {/* Step indicator */}
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                            {index + 1}
                          </div>
                          <div className={`h-1 w-12 bg-gradient-to-r ${step.gradient} rounded-full`} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 relative`}>
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 timeline-connector rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12" />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={index}
                animation="slide-up"
                delay={index * 150}
              >
                <div className="card-premium p-6 group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center font-bold shadow-lg`}>
                        {index + 1}
                      </div>
                      <step.icon className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                      {t(`how.step${index+1}.title`, step.title)}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {t(`how.step${index+1}.desc`, step.description)}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="fade-in" delay={800}>
          <div className="mt-20 text-center">
            <div className="card-modern p-8 md:p-12 bg-gradient-to-r from-blue-50 to-green-50 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                {t('how.cta.title', 'Ready to Experience Our Process?')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                {t('how.cta.subtitle', 'Start with a completely free consultation. No commitments, no hidden fees – just expert advice tailored to your situation.')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary shadow-xl hover:shadow-blue-500/25 group">
                  <span>{t('how.cta.button', 'Book Your Free Consultation')}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="btn btn-outline">
                  {t('how.cta.secondary', 'Learn More About Our Services')}
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;