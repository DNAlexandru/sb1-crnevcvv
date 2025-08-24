import SectionHeading from '../components/ui/SectionHeading';
import ScrollAnimation from '../components/utils/ScrollAnimation';
import Button from '../components/ui/Button';
import { CheckCircle, Users, Target, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-modern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-navy-950 text-sm font-medium">Chi Siamo</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-950 leading-tight">
                {t('about.heroTitle', 'About DNego')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <p className="text-xl md:text-2xl text-navy-950 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                {t(
                  'about.heroSubtitle',
                  'We are expert negotiators with a mission to help clients achieve better deals and significant savings with absolutely no risk.'
                )}
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={400}>
              <Button variant="primary" size="lg" href="/contact" className="shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                {t('about.heroCta', 'Get Started')}
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <div className="card-premium p-2 group hover:shadow-floating transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="DNego team discussing strategy" 
                  className="rounded-xl shadow-xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-950">
                    {t('about.storyTitle', 'Our Story')}
                  </h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-8" />
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t(
                      'about.storyP1',
                      'We were born out of a desire to stand alongside people during the most important negotiations of their lives, those rare, meaningful moments when it\'s essential to feel prepared and supported. We believe that every negotiation is a unique opportunity to assert one\'s value and build a fair and balanced agreement.'
                    )}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t(
                      'about.storyP2',
                      'That\'s why we are committed to offering a strategic and mindful approach, based on careful analysis and a clear plan, enabling our clients to face each challenge with confidence and determination. At the core of our work are strong principles: transparency, integrity, mutual respect, and the belief that a good negotiation is one where both parties feel recognized and satisfied.'
                    )}
                  </p>
                  <div className="card-modern p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <p className="text-gray-700 font-medium text-lg leading-relaxed">
                      {t(
                        'about.storyP3',
                        "We guide every client with competence and passion, always keeping their interests at the center. And to demonstrate how much we believe in what we do, our compensation is tied exclusively to the results we achieve together, a concrete commitment to delivering real and tangible benefits to those who choose to trust us."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="section bg-gradient-modern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <SectionHeading
            title={t('about.missionTitle', 'Our Mission')}
            subtitle={t(
              'about.missionSubtitle',
              'To democratize access to expert negotiation services by removing financial risk'
            )}
          />
          
          <div className="card-premium p-8 md:p-12 relative z-10">
            <ScrollAnimation animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full mb-4 shadow-lg">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission1Title', 'Make Expert Negotiation Accessible')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission1Desc',
                      'We believe everyone deserves access to professional negotiation support, regardless of size or budget.'
                    )}
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full mb-4 shadow-lg">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission2Title', 'Align Incentives Perfectly')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission2Desc',
                      'Our success is directly tied to yours. We only win when you save money, creating perfect alignment.'
                    )}
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full mb-4 shadow-lg">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission3Title', 'Maintain Highest Ethics')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission3Desc',
                      'We negotiate hard but ethically, building relationships rather than burning bridges.'
                    )}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <SectionHeading
            title={t('about.valuesTitle', 'Our Values')}
            subtitle={t('about.valuesSubtitle', 'The principles that guide everything we do')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <ScrollAnimation animation="slide-up">
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-4 icon-floating">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-blue-700 transition-colors duration-300">
                    {t('about.value1Title', 'Transparency')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.value1Desc', "We believe in complete openness in our approach, methods, and fee structure. You'll always know exactly where you stand and how we're approaching your negotiation.")}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={100}>
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl mb-4 icon-floating">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-green-700 transition-colors duration-300">
                    {t('about.value2Title', 'Results-Focus')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.value2Desc', "We're obsessed with achieving measurable results. Everything we do is designed to maximize your savings and improve your deal terms.")}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl mb-4 icon-floating">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-purple-700 transition-colors duration-300">
                    {t('about.value3Title', 'Integrity')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.value3Desc', 'We maintain the highest ethical standards in all negotiations. Our reputation and yours are equally important to us.')}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={300}>
              <div className="card-premium p-8 h-full group hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl mb-4 icon-floating">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-orange-700 transition-colors duration-300">
                    {t('about.value4Title', 'Continuous Learning')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.value4Desc', "We're committed to constantly improving our knowledge and skills to deliver even better results for our clients.")}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-premium text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                {t('about.ctaTitle', 'Ready to Start Saving?')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                {t(
                  'about.ctaSubtitle',
                  'Contact us today for your free consultation and see how much we can save you.'
                )}
              </p>
              <Button variant="primary" size="lg" href="/contact" className="shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                {t('about.ctaButton', 'Schedule Your Free Consultation')}
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;