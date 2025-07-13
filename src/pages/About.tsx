import SectionHeading from '../components/ui/SectionHeading';
import ScrollAnimation from '../components/utils/ScrollAnimation';
import Button from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t('about.heroTitle', 'About DNego')}
              </h1>
              <p className="text-xl text-gray-300 mb-3">
                {t(
                  'about.heroSubtitle',
                  'We are expert negotiators with a mission to help clients achieve better deals and significant savings with absolutely no risk.'
                )}
              </p>
              <Button variant="primary" size="lg" href="/contact">
                {t('about.heroCta', 'Get Started')}
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ScrollAnimation
              animation="fade-in"
              className="md:flex-none flex justify-center"
            >
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="DNego team discussing strategy"
                className="rounded-lg shadow-xl md:max-h-[20rem] w-full h-auto object-cover"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" className="flex-1">
              <div className="w-full text-left">
                <h2 className="text-3xl font-bold mb-6 text-navy-950">
                  {t('about.storyTitle', 'Our Story')}
                </h2>
                <p className="text-gray-600 mb-2">
                  {t(
                    'about.storyP1',
                    `We were born out of a desire to stand alongside people during the most important negotiations of their lives, those rare, meaningful moments when it's essential to feel prepared and supported. We believe that every negotiation is a unique opportunity to assert one's value and build a fair and balanced agreement.`
                  )}
                </p>
                <p className="text-gray-600 mb-2">
                  {t(
                    'about.storyP2',
                    `That's why we are committed to offering a strategic and mindful approach, based on careful analysis and a clear plan, enabling our clients to face each challenge with confidence and determination. At the core of our work are strong principles: transparency, integrity, mutual respect, and the belief that a good negotiation is one where both parties feel recognized and satisfied.`
                  )}
                </p>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Third paragraph - full width below image and text */}
          <ScrollAnimation animation="slide-up" delay={200}>
            <div className="mt-6">
              <p className="text-gray-700 font-medium leading-relaxed">
                  {t(
                    'about.storyP3',
                    `We guide every client with competence and passion, always keeping their interests at the center. And to demonstrate how much we believe in what we do, our compensation is tied exclusively to the results we achieve together, a concrete commitment to delivering real and tangible benefits to those who choose to trust us.`
                  )}
                </p>
              </div>
            </ScrollAnimation>
          </div>
      </section>
      
      {/* Our Mission */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title={t('about.missionTitle', 'Our Mission')}
            subtitle={t(
              'about.missionSubtitle',
              'To democratize access to expert negotiation services by removing financial risk'
            )}
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <ScrollAnimation animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission1Title', 'Make professional negotiation accessible')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission1Desc',
                      'We believe every organization, regardless of size or budget, deserves expert support in their negotiations.'
                    )}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission2Title', 'Align incentives with your goals')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission2Desc',
                      'Your savings and our fees are aligned: we benefit only when you generate tangible savings.'
                    )}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-950">
                    {t('about.mission3Title', 'Uphold the highest ethical standards')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'about.mission3Desc',
                      'We negotiate with integrity and determination, building lasting relationships rather than burning bridges.'
                    )}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title={t('about.valuesTitle', 'Our Values')}
            subtitle={t('about.valuesSubtitle', 'The principles that guide everything we do')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-up">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full border">
                <h3 className="text-xl font-bold mb-3 text-navy-950">
                  {t('about.value1Title', 'Transparency')}
                </h3>
                <p className="text-gray-600">
                  {t('about.value1Desc', "We believe in complete openness in our approach, methods, and fee structure. You'll always know exactly where you stand and how we're approaching your negotiation.")}
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full border">
                <h3 className="text-xl font-bold mb-3 text-navy-950">
                  {t('about.value2Title', 'Results-Focus')}
                </h3>
                <p className="text-gray-600">
                  {t('about.value2Desc', "We're obsessed with achieving measurable results. Everything we do is designed to maximize your savings and improve your deal terms.")}
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full border">
                <h3 className="text-xl font-bold mb-3 text-navy-950">
                  {t('about.value3Title', 'Integrity')}
                </h3>
                <p className="text-gray-600">
                  {t('about.value3Desc', 'We maintain the highest ethical standards in all negotiations. Our reputation and yours are equally important to us.')}
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full border">
                <h3 className="text-xl font-bold mb-3 text-navy-950">
                  {t('about.value4Title', 'Continuous Learning')}
                </h3>
                <p className="text-gray-600">
                  {t('about.value4Desc', "We're committed to constantly improving our knowledge and skills to deliver even better results for our clients.")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {t('about.ctaTitle', 'Ready to Start Saving?')}
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                {t(
                  'about.ctaSubtitle',
                  `We guide every client with competence and passion, always keeping their interests at the center. And to demonstrate how much we believe in what we do, our compensation is tied exclusively to the results we achieve together: a concrete commitment to delivering real and tangible benefits to those who choose to trust us.`
                )}
              </p>
              <Button variant="primary" size="lg" href="/contact">
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