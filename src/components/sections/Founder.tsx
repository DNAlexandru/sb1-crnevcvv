import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Founder = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title={t('founder.about', 'About the Founder')}
          centered={false}
        />

        <div className="flex flex-col md:flex-row items-start gap-8">
          <ScrollAnimation animation="fade-in" className="md:flex-none flex justify-center">
            <div className="relative flex justify-center">
              <img
                src="/Profile_Photo.jpg"
                alt="Alexandru Buruiana, Founder of DNego"
                className="max-w-md w-full h-auto object-cover md:max-h-[20rem]" />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md font-medium">
                {t('founder.tagline', 'Alexandru Buruiana, Founder')}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" className="flex-1">
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-4 text-navy-950">Alexandru Buruiana</h3>
              <p className="text-gray-600 mb-6">
                {t(
                  'founder.bio1', 'I am a Mechanical Engineer specialized in energy, and I have always believed in the importance of recognizing and defending the true value of things. I discovered that negotiation is my real passion thanks to the energy and enthusiasm I feel every time I sit down to bargain, seek an agreement, and find common ground.'
                )}
              </p>
              <p className="text-gray-600 mb-6">
                {t(
                  'founder.bio2', 'Over the years, I refined this skill while working in the purchasing departments of various companies, handling raw materials and services. But I soon realized that for me it was more than just a job: it was a way of living, guided by principles such as fairness, mutual respect, and the pursuit of solutions that create value for everyone.'
                )}
              </p>
              <p className="text-gray-600 mb-6">
                {t(
                  'founder.bio3', 'With time, this desire for justice and balance took me beyond the corporate world, leading me to help people outside of my professional circle as well: friends, family, acquaintances, and anyone in need of support in an important negotiation.'
                )}
              </p>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Bio4 paragraph - full width below the image and text */}
        <ScrollAnimation animation="slide-up" delay={200}>
          <div className="mt-8">
            <p className="text-gray-700 font-medium">
              {t(
                'founder.bio4', 'I love finding the right balance between quality and price, because I believe that every agreement should reflect not just a good economic outcome, but also the values of those who sign it: transparency, integrity, and respect. I\'m convinced that a good negotiation is never about one side winning over the other, but about building an agreement where both parties feel acknowledged and fulfilled.'
              )}
            </p>
          </div>
        </ScrollAnimation>

        {/* Stats blocks - left aligned below bio4 */}
        <ScrollAnimation animation="slide-up" delay={300}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-500">{t('founder.experienceLabel', 'Experience')}</span>
              <p className="text-navy-900 font-bold">{t('founder.experienceValue', '5+ Years')}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-500">{t('founder.specializationLabel', 'Specialization')}</span>
              <p className="text-navy-900 font-bold">{t('founder.specializationValue', 'Business Negotiation')}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-500">{t('founder.languagesLabel', 'Languages')}</span>
              <p className="text-navy-900 font-bold">{t('founder.languagesValue', 'English, Italian')}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-500">{t('founder.industriesLabel', 'Industries')}</span>
              <p className="text-navy-900 font-bold">{t('founder.industriesValue', 'Multiple')}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Founder;
