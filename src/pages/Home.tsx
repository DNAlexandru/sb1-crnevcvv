import Hero from '../components/sections/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HowItWorks from '../components/sections/HowItWorks';
import Founder from '../components/sections/Founder';
// import Testimonials from '../components/sections/Testimonials'
import Blog from '../components/sections/Blog';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <Founder />
      {/* <Testimonials /> */}
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
