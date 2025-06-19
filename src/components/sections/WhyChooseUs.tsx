import { CreditCard, Shield, Target } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';

const features = [
  {
    icon: CreditCard,
    title: '100% No-Risk Model',
    description: 'We only succeed when you succeed. You pay nothing unless we reduce your costs (we earn 50% of the savings we negotiate).',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We build trust through clear, ethical processes. Transparency is a cornerstone of our professionalism, so you always know how and why we make decisions.',
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    description: 'Every negotiation is unique. We design personalized plans focused on your goals, backed by proven methodologies that deliver measurable outcomes.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We combine expertise, transparency and a risk-free approach to deliver exceptional value"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <div className="bg-white rounded-lg shadow-md p-8 h-full border-t-4 border-blue-700 hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-blue-700 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-navy-950">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;