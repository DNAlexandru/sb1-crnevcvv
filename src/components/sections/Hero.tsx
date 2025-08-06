// Hero.tsx
import { ArrowRight, ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';
// import ValuationChat from './ValuationChat';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-24 pb-32 bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="relative w-28 h-28 md:w-44 md:h-44 mb-6">
          <div className="hexagon"></div>
          <img
            src="/hero.jpg"
            alt="DNego logo"
            className="w-full h-full object-contain"
          />
        </div>
        <ScrollAnimation animation="fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-950 mb-4">
            {t('hero.title', 'The art of negotiation at your service, for a fair deal')}
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={300}>
          <p className="text-sm md:text-base text-navy-950 mb-4">
            {t('hero.subtitle', 'Our compensation is solely a share of the savings we deliver')}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={400}>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-navy-950 hover:bg-navy-900"
            >
              {t('hero.cta', 'Free Consultation')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/services"
              className="border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
            >
              {t('hero.secondary', 'View Services')}
            </Button>
          </div>
        </ScrollAnimation>
        {/* <ValuationChat /> */}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-navy-950">
        <ArrowDown className="w-6 h-6 animate-bounce" />
        <span className="mt-1 text-sm">{t('hero.scroll', 'Scroll')}</span>
      </div>
    </section>
  );
};

export default Hero;
