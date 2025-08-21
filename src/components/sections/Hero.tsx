import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Modern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/70 to-blue-900/60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-navy-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="max-w-2xl">
          <ScrollAnimation animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm font-medium">
                {t('hero.badge', '100% Risk-Free Consultation')}
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {t('hero.title', 'The art of negotiation at your service, for a fair deal')}
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={300}>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-8" />
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={400}>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
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
                variant="ghost"
                size="lg"
                href="/services"
                className="hover:bg-white/20"
              >
                {t('hero.secondary', 'View Services')}
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">{t('hero.feature1', 'No upfront costs')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">{t('hero.feature2', 'Pay only if you save')}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Right side - Stats or additional content */}
        <div className="hidden lg:block">
          <ScrollAnimation animation="slide-in-right" delay={700}>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">{t('hero.stat1', 'Your share of savings')}</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">{t('hero.stat2', 'Years experience')}</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">{t('hero.stat3', 'Risk-free model')}</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                <div className="text-sm text-gray-600">{t('hero.stat4', 'Languages')}</div>
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
            className="flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 group animate-bounce"
          >
            <span className="text-sm mb-2 font-medium">
              {t('hero.scroll', 'Discover More')}
            </span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;