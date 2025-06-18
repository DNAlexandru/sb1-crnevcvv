import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../utils/ScrollAnimation';

const Founder = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="About the Founder"
          centered={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fade-in">
            <div className="relative flex justify-center">
              <img 
                src="/Profile_Photo.jpg" 
                alt="Alexandru Buruiana, Founder of Nego" 
                className="max-w-md w-full h-auto" />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md font-medium">
                Alexandru Buruiana, Founder
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-navy-950">Alexandru Buruiana</h3>
              <p className="text-gray-600 mb-6">
                Alexandru Buruiana has over a decade of international negotiation experience. He began his career in the procurement department of a major Italian multinational, where he led critical supplier negotiations and cost-saving initiatives.
              </p>
              <p className="text-gray-600 mb-6">
                After a successful corporate tenure, he founded his own consulting practice, helping clients worldwide achieve better deals and significant savings. Alexandru has years of specialized experience in business negotiation and combines analytical rigor with a personal touch to guide clients to success.
              </p>
              <p className="text-gray-700 font-medium">
                His commitment to integrity and client success means you always get straightforward advice and honest negotiations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Experience</span>
                  <p className="text-navy-900 font-bold">10+ Years</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Specialization</span>
                  <p className="text-navy-900 font-bold">Business Negotiation</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Languages</span>
                  <p className="text-navy-900 font-bold">English, Italian</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Industries</span>
                  <p className="text-navy-900 font-bold">Multiple</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Founder;
