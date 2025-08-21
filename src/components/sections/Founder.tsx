import { Award, Languages, MapPin, Briefcase, Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

const Founder = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          title={t('founder.about', 'About the Founder')}
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image and credentials */}
          <ScrollAnimation animation="slide-in-left" className="lg:sticky lg:top-32">
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="card-premium p-6 text-center">
                  <div className="relative inline-block">
                    <img
                      src="/Profile_Photo.jpg"
                      alt="Alexandru Buruiana, Founder of DNego"
                      className="w-64 h-64 object-cover rounded-2xl shadow-xl mx-auto"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl shadow-lg">
                      <div className="text-sm font-semibold">Founder & Lead Negotiator</div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-navy-950 mt-8 mb-2">Alexandru Buruiana</h3>
                  <p className="text-blue-600 font-semibold text-lg">Mechanical Engineer & Negotiation Expert</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card-modern p-6 text-center group hover:shadow-premium transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-3 icon-floating">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-500">{t('founder.experienceLabel', 'Experience')}</div>
                  <div className="text-xl font-bold text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                    {t('founder.experienceValue', '5+ Years')}
                  </div>
                </div>

                <div className="card-modern p-6 text-center group hover:shadow-premium transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl mb-3 icon-floating">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-500">{t('founder.specializationLabel', 'Specialization')}</div>
                  <div className="text-xl font-bold text-navy-950 group-hover:text-green-700 transition-colors duration-300">
                    {t('founder.specializationValue', 'Business Negotiation')}
                  </div>
                </div>

                <div className="card-modern p-6 text-center group hover:shadow-premium transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl mb-3 icon-floating">
                    <Languages className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-500">{t('founder.languagesLabel', 'Languages')}</div>
                  <div className="text-xl font-bold text-navy-950 group-hover:text-purple-700 transition-colors duration-300">
                    {t('founder.languagesValue', 'English, Italian')}
                  </div>
                </div>

                <div className="card-modern p-6 text-center group hover:shadow-premium transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl mb-3 icon-floating">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-500">{t('founder.industriesLabel', 'Industries')}</div>
                  <div className="text-xl font-bold text-navy-950 group-hover:text-orange-700 transition-colors duration-300">
                    {t('founder.industriesValue', 'Multiple')}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right side - Biography */}
          <ScrollAnimation animation="slide-in-right" className="space-y-8">
            {/* Personal Story */}
            <div className="card-premium p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-950 mb-2">My Journey in Negotiation</h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                </div>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    'founder.bio1', 
                    'I am a Mechanical Engineer specialized in energy, and I have always believed in the importance of recognizing and defending the true value of things. I discovered that negotiation is my real passion thanks to the energy and enthusiasm I feel every time I sit down to bargain, seek an agreement, and find common ground.'
                  )}
                </p>
                
                <p>
                  {t(
                    'founder.bio2', 
                    'Over the years, I refined this skill while working in the purchasing departments of various companies, handling raw materials and services. But I soon realized that for me it was more than just a job: it was a way of living, guided by principles such as fairness, mutual respect, and the pursuit of solutions that create value for everyone.'
                  )}
                </p>
                
                <p>
                  {t(
                    'founder.bio3', 
                    'With time, this desire for justice and balance took me beyond the corporate world, leading me to help people outside of my professional circle as well: friends, family, acquaintances, and anyone in need of support in an important negotiation.'
                  )}
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="card-premium p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-950 mb-2">My Philosophy</h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
                </div>
              </div>
              
              <blockquote className="text-gray-700 font-medium text-lg leading-relaxed italic">
                {t(
                  'founder.bio4', 
                  'I love finding the right balance between quality and price, because I believe that every agreement should reflect not just a good economic outcome, but also the values of those who sign it: transparency, integrity, and respect. I'm convinced that a good negotiation is never about one side winning over the other, but about building an agreement where both parties feel acknowledged and fulfilled.'
                )}
              </blockquote>
            </div>

            {/* Call to Action */}
            <div className="card-modern p-8 text-center bg-gradient-to-r from-navy-50 to-blue-50">
              <h4 className="text-2xl font-bold text-navy-950 mb-4">
                {t('founder.cta.title', 'Ready to Work Together?')}
              </h4>
              <p className="text-gray-600 mb-6">
                {t('founder.cta.subtitle', "Let's discuss your negotiation needs and see how I can help you achieve better outcomes.")}
              </p>
              <button className="btn btn-primary shadow-xl hover:shadow-blue-500/25">
                {t('founder.cta.button', 'Schedule a Free Consultation')}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Founder;