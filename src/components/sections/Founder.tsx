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

        <div className="flex flex-col md:flex-row gap-12 md:items-stretch">
          <ScrollAnimation animation="fade-in" className="md:flex-1 flex justify-center">
            <div className="relative flex justify-center">
              <img 
                src="/Profile_Photo.jpg" 
                alt="Alexandru Buruiana, Founder of Nego" 
                className="max-w-md w-full h-auto object-cover md:max-h-[30rem]" />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md font-medium">
                Alexandru Buruiana, Founder
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" className="md:flex-1 flex">
            <div className="flex flex-col justify-between h-full md:max-h-[30rem] md:overflow-auto">
              <h3 className="text-2xl font-bold mb-4 text-navy-950">Alexandru Buruiana</h3>
              <p className="text-gray-600 mb-6">
                Alexandru Buruiana has over five years of international negotiation experience. He began his career in the procurement department of a major Italian multinational, where he led critical supplier negotiations and cost-saving initiatives.
              </p>
              <p className="text-gray-600 mb-6">
                After a successful corporate tenure, he founded his own consulting practice to help clients secure better deals and meaningful savings. Alexandru applies his specialized knowledge to craft tailored strategies and blends analytical rigor with a personal touch to guide clients to success.
              </p>
              <p className="text-gray-600 mb-6">
                Nego was born from the idea that expert negotiation skills should be available to everyone. Most people negotiate only a handful of high-value agreements in their lifetime, so mistakes can be costly. By leaving those negotiations to a professional—with no upfront cost—you safeguard your interests when it matters most.
              </p>
              <p className="text-gray-700 font-medium">
                His commitment to integrity and client success means you always get straightforward advice and honest negotiations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Experience</span>
                  <p className="text-navy-900 font-bold">5+ Years</p>
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
