import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, DollarSign, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollAnimation from '../components/utils/ScrollAnimation';
import Button from '../components/ui/Button';

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
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
              <p className="text-xl text-gray-300 mb-6">
                Specialized negotiation expertise across real estate, career advancement, and business consulting. We only succeed when you save money.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                href="/contact"
              >
                Get Your Free Consultation
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
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
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mr-4">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-navy-950">{service.title}</h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-6 text-navy-950">Specific Services:</h3>
                      <div className="space-y-4">
                        {service.detailedServices.map((detailService, serviceIndex) => (
                          <div key={serviceIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-navy-950 mb-1">{detailService.title}</h4>
                                <p className="text-gray-600">{detailService.description}</p>
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
                      Get Free Consultation
                    </Button>
                  </div>

                  {/* Case Study */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-white rounded-lg shadow-lg border p-8 sticky top-8">
                      <h3 className="text-xl font-bold mb-6 text-navy-950">Success Story</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-red-700 mb-2 flex items-center">
                            <span className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                            Challenge:
                          </h4>
                          <p className="text-gray-600 ml-8">{service.caseStudy.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                            <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                            Solution:
                          </h4>
                          <p className="text-gray-600 ml-8">{service.caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-green-700 mb-2 flex items-center">
                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                            Result:
                          </h4>
                          <p className="text-gray-600 ml-8">{service.caseStudy.result}</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">
                          💡 Remember: We only get paid 50% of your verified savings. No savings = no fee.
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
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="How We Work"
            subtitle="Our proven process ensures you get results with zero risk"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We analyze your situation at no cost' },
              { step: '2', title: 'Strategy Development', desc: 'Create a tailored negotiation plan' },
              { step: '3', title: 'Expert Negotiation', desc: 'We handle the negotiation process' },
              { step: '4', title: 'Results & Payment', desc: 'You pay 50% of verified savings only' }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-navy-950">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Saving?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for your free consultation. We only get paid when you save money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/contact"
                >
                  Schedule Your Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="/"
                  className="border-white text-white hover:bg-white hover:text-navy-950"
                >
                  Back to Home
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
