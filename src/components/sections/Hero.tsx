import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.jpg)',
      }}
    >
      {/* Centered Symbol at Top */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-10">
        <div className="text-[200px] font-serif font-bold text-navy-950 select-none pointer-events-none">
          DNego<span className="text-blue-600">●</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl">
          <ScrollAnimation animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-navy-950 text-sm font-medium">
                {t('hero.badge', '100% Risk-Free Consultation')}
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              {t('hero.title', 'The art of negotiation at your service, for a fair deal')}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={300}>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-8" />
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={400}>
            <p className="text-xl md:text-2xl text-navy-950 mb-10 leading-relaxed font-light">
              {t('hero.subtitle', 'Our compensation is solely a share of the savings we deliver')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                {t('hero.cta', 'Free Consultation')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/services"
                className="border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
              >
                {t('hero.secondary', 'View Services')}
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="flex items-center gap-6 text-navy-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">{t('hero.feature1', 'No upfront costs')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">{t('hero.feature2', 'Pay only if you save')}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollAnimation animation="fade-in" delay={800}>
          <a
            href="#services"
            className="flex flex-col items-center text-navy-950 hover:text-blue-600 transition-all duration-300 group animate-bounce"
          >
            <span className="text-sm mb-2 font-medium">
              {t('hero.scroll', 'Discover More')}
            </span>
            <div className="w-6 h-10 border-2 border-navy-950/60 rounded-full flex justify-center group-hover:border-blue-600/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-navy-950/80 rounded-full mt-2 animate-pulse" />
            </div>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;