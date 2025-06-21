import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import ScrollAnimation from '../utils/ScrollAnimation';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay gradient meno sfumato */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/0"
      />

      {/* Contenuto centrato verticalmente */}
      <div className="relative container grid grid-cols-1 md:grid-cols-2 items-center px-6">
        <div className="max-w-xl">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 mb-6">
              The art of negotiation at your service, for a fair deal
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={200}>
            <hr className="w-20 border-t-2 border-navy-950 mb-8" />
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={300}>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Trust our expertise&nbsp;—&nbsp;our compensation is solely a share of the savings we deliver.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={400}>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" href="/contact" className="bg-navy-950 hover:bg-navy-900" >
                Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/services"
                className="border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
              >
                View Services
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
          className="flex flex-col items-center text-navy-950 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm mb-1">Scroll</span>
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
