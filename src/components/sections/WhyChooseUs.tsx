import { CreditCard, Shield, Target, TrendingUp, Users2, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  {
    icon: CreditCard,
    title: '100% No-Risk Model',
    description: 'We only succeed when you succeed. You pay nothing unless we reduce your costs (we earn 50% of the savings we negotiate).',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We build trust through clear, ethical processes. Transparency is a cornerstone of our professionalism, so you always know how and why we make decisions.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    description: 'Every negotiation is unique. We design personalized plans focused on your goals, backed by proven methodologies that deliver measurable outcomes.',
    gradient: 'from-purple-500 to-purple-600',
  },
];

const stats = [
  { number: '50%', label: 'Your Share of Savings', icon: TrendingUp },
  { number: '100%', label: 'Success-Based Fees', icon: Award },
  { number: '5+', label: 'Years Experience', icon: Users2 },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  return (
    <section id="why-choose-us" className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          title={t('choose.title', 'Why Choose Us')}
          subtitle={t('choose.subtitle', 'We combine expertise, transparency and a risk-free approach to deliver exceptional value')}
        />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={index}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="text-center card-premium p-8 group hover:shadow-floating transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-4 icon-floating`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy-950 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              animation="slide-up"
              delay={index * 150 + 300}
              className="h-full"
            >
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl mb-6 icon-floating shadow-lg`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                    {t(`choose.feature${index+1}.title`, feature.title)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(`choose.feature${index+1}.desc`, feature.description)}
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 group-hover:w-20 transition-all duration-500`} />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Trust Indicators */}
        <ScrollAnimation animation="fade-in" delay={800}>
          <div className="mt-20 text-center">
            <div className="card-modern p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                {t('choose.trust.title', 'Trusted by Professionals Worldwide')}
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                {t('choose.trust.subtitle', 'Our ethical approach and proven results have earned the trust of clients across multiple industries and countries.')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-gray-400 font-semibold">Real Estate</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="text-gray-400 font-semibold">Corporate</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="text-gray-400 font-semibold">Individual</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="text-gray-400 font-semibold">Consulting</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyChooseUs;