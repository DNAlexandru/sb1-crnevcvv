import { Home, DollarSign, Handshake, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import Button from '../ui/Button';

const services = [
  {
    icon: Home,
    title: 'Real Estate Negotiation',
    description: 'Expert support for property purchases, mortgage optimization, and rental agreements to secure the best terms and pricing.',
  },
  {
    icon: DollarSign,
    title: 'Salary & Benefits Negotiation',
    description: 'Maximize your earning potential through strategic compensation negotiations and comprehensive benefits package optimization.',
  },
  {
    icon: Handshake,
    title: 'Business Consultation Services',
    description: 'Strategic negotiation consulting and training to enhance your business deals and commercial agreements.',
  },
];

const ServicesPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Our Core Services"
          subtitle="Specialized negotiation expertise where you need it most"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation
                key={index}
                animation="slide-up"
                delay={index * 100}
                className="h-full"
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-full border-t-4 border-blue-700 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-navy-950">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button
                    variant="outline"
                    href="/services"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <ScrollAnimation animation="fade-in" delay={400}>
            <p className="text-gray-600 mb-6">
              Ready to start saving? We only get paid when you save money.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              href="/contact"
            >
              Schedule Your Free Consultation
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;