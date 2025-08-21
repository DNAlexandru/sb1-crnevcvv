import { Home, DollarSign, Handshake, ArrowRight, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const services = [
  {
    key: "realEstate",
    icon: Home,
    title: 'Real Estate Negotiation',
    description: 'Expert support for property purchases, mortgage optimization, and rental agreements to secure the best terms and pricing.',
    gradient: 'from-blue-500 to-blue-600',
    hoverGradient: 'hover:from-blue-600 hover:to-blue-700',
  },
  {
    key: "salary",
    icon: DollarSign,
    title: 'Salary & Benefits Negotiation',
    description: 'Maximize your earning potential through strategic compensation negotiations and comprehensive benefits package optimization.',
    gradient: 'from-green-500 to-green-600',
    hoverGradient: 'hover:from-green-600 hover:to-green-700',
  },
  {
    key: "consulting",
    icon: Handshake,
    title: 'Business Consultation Services',
    description: 'Strategic negotiation consulting and training to enhance your business deals and commercial agreements.',
    gradient: 'from-purple-500 to-purple-600',
    hoverGradient: 'hover:from-purple-600 hover:to-purple-700',
  },
];

const ServicesPreview = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="section bg-gradient-modern">
      <div className="container">
        <SectionHeading
          title={t('servicesPreview.title', 'Our Core Services')}
          subtitle={t('servicesPreview.subtitle', 'Specialized negotiation expertise where you need it most')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation
              key={index}
              animation="slide-up"
              delay={index * 150}
              className="h-full"
            >
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl mb-6 icon-floating shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                    {t(`servicesPreview.${service.key}.title`, service.title)}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`servicesPreview.${service.key}.desc`, service.description)}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      href="/services"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="group-hover:bg-blue-50 group-hover:border-blue-300"
                    >
                      {t('servicesPreview.more', 'Learn More')}
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="card-modern p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                {t('servicesPreview.ready', 'Ready to start saving? We only get paid when you save money.')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('servicesPreview.subtitle2', 'Join successful clients who have saved thousands through our expert negotiation services.')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="shadow-xl hover:shadow-blue-500/25"
                >
                  {t('servicesPreview.contact', 'Schedule Your Free Consultation')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/about"
                >
                  {t('servicesPreview.about', 'Learn About Our Process')}
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;