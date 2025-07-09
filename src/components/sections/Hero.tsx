// Hero.tsx
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Rimosso overlay per rendere visibile l'immagine senza trasparenze */}

      {/* Contenuto centrato verticalmente */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="max-w-lg text-shadow">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
              <span className="bg-blue-900/40 px-2 py-1 rounded inline-block leading-relaxed">
                {t('hero.title', 'The art of negotiation at your service, for a fair deal')}
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <hr className="w-16 border-t-2 border-navy-950 mb-6" />
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={300}>
            <p className="text-sm md:text-base text-white mb-8">
              <span className="bg-blue-900/40 px-2 py-1 rounded inline-block leading-relaxed">
                {t('hero.subtitle', 'Our compensation is solely a share of the savings we deliver')}
              </span>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={400}>
            <div className="flex flex-wrap gap-4">
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
                variant="primary"
                size="lg"
                href="/services"
                className="bg-blue-900/40 hover:bg-blue-900/60"
              >
                {t('hero.secondary', 'View Services')}
              </Button>
            </div>
          </ScrollAnimation>
        </div>
        <div /> {/* Vuoto per mantenere due colonne */}
      </div>

      {/* Scroll indicator sempre visibile in basso */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#why-choose-us"
          className="flex flex-col items-center text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-sm mb-1">{t('hero.scroll', 'Scroll')}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
