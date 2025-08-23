import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, DollarSign, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import HowItWorks from '../components/sections/HowItWorks';
import ScrollAnimation from '../components/utils/ScrollAnimation';
import Button from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  {
    id: 'real-estate',
    icon: Home,
    title: 'Real Estate Negotiation',
    description: 'Expert negotiation services for all your real estate needs. From property purchases to mortgage terms and rental agreements, we ensure you get the best possible deals in the real estate market.',
    detailedServices: [
      {
        title: 'Residential Property Purchase Negotiation',
        description: 'Professional support in negotiating purchase prices, terms, and conditions for your dream home'
      },
      {
        title: 'Mortgage Analysis and Negotiation',
        description: 'Comprehensive analysis and negotiation of mortgage terms, interest rates, and loan conditions'
      },
      {
        title: 'Rental Contract Analysis',
        description: 'Detailed review and negotiation of rental agreements to protect your interests'
      }
    ],
    caseStudy: {
      challenge: 'A family was looking to purchase their first home but felt overwhelmed by the negotiation process and market prices.',
      solution: 'We conducted market analysis, identified comparable properties, and negotiated with the seller on their behalf.',
      result: 'Secured the property at 8% below asking price and negotiated favorable mortgage terms, saving €25,000 total.'
    }
  },
  {
    id: 'salary-benefits',
    icon: DollarSign,
    title: 'Salary & Benefits Negotiation',
    description: 'Professional career advancement through strategic salary and benefits negotiations. Whether you\'re starting a new position or seeking advancement, we help you maximize your compensation package.',
    detailedServices: [
      {
        title: 'Initial Salary Negotiation',
        description: 'Expert guidance for negotiating starting salaries in new positions'
      },
      {
        title: 'Salary Increases and Promotions',
        description: 'Strategic approach to securing raises and career advancement'
      },
      {
        title: 'Bonus and Benefit Packages',
        description: 'Optimization of complete compensation packages including bonuses, benefits, and perks'
      }
    ],
    caseStudy: {
      challenge: 'A software engineer received a job offer but suspected the salary was below market rate for their experience level.',
      solution: 'We conducted salary benchmarking, prepared negotiation strategy, and coached them through the process.',
      result: 'Secured 22% higher salary plus additional benefits worth €12,000 annually.'
    }
  },
  {
    id: 'consultation',
    icon: Handshake,
    title: 'Business Consultation Services',
    description: 'Strategic negotiation consulting for businesses and professionals. From commercial agreements to skill development, we provide comprehensive negotiation support for your business success.',
    detailedServices: [
      {
        title: 'Commercial Agreements',
        description: 'Professional negotiation of business contracts and commercial deals'
      },
      {
        title: 'Strategic Negotiation Consulting',
        description: 'Expert consultation on complex negotiation strategies and approaches'
      },
      {
        title: 'Negotiation Skills Training',
        description: 'Comprehensive training programs to develop internal negotiation capabilities'
      }
    ],
    caseStudy: {
      challenge: 'A small business needed to renegotiate supplier contracts but lacked internal negotiation expertise.',
      solution: 'We provided strategic consultation and directly negotiated with key suppliers on their behalf.',
      result: 'Reduced supply costs by 18% and improved payment terms, saving €45,000 annually.'
    }
  },
];

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -120; // Compensa navbar fissa
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300); // Tempo per assicurarsi che il rendering sia completato
      }
    }
  }, [location]);

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
                <span className="text-navy-950 text-sm font-medium">I Nostri Servizi</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-950 leading-tight">
                {t('services.heroTitle', 'Our Services')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <p className="text-xl md:text-2xl text-navy-950 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                {t(
                  'services.heroSubtitle',
                  'Specialized negotiation expertise across real estate, career advancement, and business consulting. We only succeed when you save money.'
                )}
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={400}>
              <Button variant="primary" size="lg" href="/contact" className="shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                {t('services.heroCta', 'Get Your Free Consultation')}
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="space-y-20 relative z-10">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                delay={index * 100}
              >
                <div
                  id={service.id}
                  className={`scroll-mt-[140px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg icon-floating">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
                          {t(`services.${service.id}.title`, service.title)}
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2" />
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                      {t(`services.${service.id}.desc`, service.description)}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-6 text-navy-950">
                        {t('services.specificServices', 'Specific Services:')}
                      </h3>
                      <div className="space-y-4">
                        {service.detailedServices.map((detailService, serviceIndex) => (
                          <div key={serviceIndex} className="card-modern p-6 group hover:shadow-modern transition-all duration-300">
                            <div className="flex items-start">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 icon-floating">
                                <CheckCircle className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-bold text-navy-950 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                  {t(
                                    `services.${service.id}.detailed.${serviceIndex}.title`,
                                    detailService.title
                                  )}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {t(
                                    `services.${service.id}.detailed.${serviceIndex}.desc`,
                                    detailService.description
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      href="/contact"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="mb-8"
                    >
                      {t('services.freeConsultation', 'Get Free Consultation')}
                    </Button>
                  </div>

                  {/* Case Study */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="card-premium p-8 sticky top-8 group hover:shadow-floating transition-all duration-500">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center icon-floating">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-950 group-hover:text-green-700 transition-colors duration-300">
                        {t('services.successStory', 'Success Story')}
                        </h3>
                      </div>
                      <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6" />
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-red-700 mb-2 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                            {t('services.challengeLabel', 'Challenge:')}
                          </h4>
                          <p className="text-gray-600 ml-8">
                            {t(
                              `services.${service.id}.case.challenge`,
                              service.caseStudy.challenge
                            )}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                            {t('services.solutionLabel', 'Solution:')}
                          </h4>
                          <p className="text-gray-600 ml-8">
                            {t(
                              `services.${service.id}.case.solution`,
                              service.caseStudy.solution
                            )}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-green-700 mb-2 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                            {t('services.resultLabel', 'Result:')}
                          </h4>
                          <p className="text-gray-600 ml-8">
                            {t(
                              `services.${service.id}.case.result`,
                              service.caseStudy.result
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200/50">
                        <p className="text-sm text-blue-800 font-medium leading-relaxed">
                          {t(
                            'services.remember',
                            '💡 Remember: We only get paid 50% of your verified savings. No savings = no fee.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <hr className="border-gray-200 my-20" />
                )}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <HowItWorks />

      {/* CTA */}
      <section className="py-20 bg-gradient-premium text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                {t('services.ctaTitle', 'Ready to Start Saving?')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                {t(
                  'services.ctaSubtitle',
                  'Contact us today for your free consultation. We only get paid when you save money.'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/contact"
                  className="shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  {t(
                    'services.ctaSchedule',
                    'Schedule Your Free Consultation'
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="/"
                  className="border-white text-white hover:bg-white hover:text-navy-950 shadow-lg hover:shadow-white/25"
                >
                  {t('services.backHome', 'Back to Home')}
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
