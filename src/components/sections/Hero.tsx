// Hero.tsx
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 hero-smoke">
          <img
            src="/hero.jpg"
            alt="DNego hexagon"
            className="w-full h-full hero-logo"
          />
        </div>
        <ScrollAnimation animation="fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-950 mb-4">
            {t('hero.title', 'The art of negotiation at your service, for a fair deal')}
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={300}>
          <p className="text-sm md:text-base text-navy-950 mb-6">
            {t('hero.subtitle', 'Our compensation is solely a share of the savings we deliver')}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={400}>
          <div className="flex flex-wrap gap-4 justify-center">
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
      </div>
    </section>
  );
};

export default Hero;
