import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ScrollAnimation from '../utils/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Contact & Booking"
          subtitle="Ready to start saving? Get in touch for your free consultation"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimation animation="slide-up">
            <div className="bg-navy-950 text-white p-8 lg:p-12 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Email</h4>
                    <a href="mailto:negotiation@dnego.com" className="text-gray-300 hover:text-blue-400 transition-colors">negotiation@dnego.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Phone</h4>
                    <a href="tel:+393275859000" className="text-gray-300 hover:text-blue-400 transition-colors">+39 3275859000</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Location</h4>
                    <p className="text-gray-300">Parma, Italy</p>
                    <p className="text-gray-400">(Consultations available globally)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4 text-white">Upcoming Courses</h4>
                <p className="text-gray-300 mb-4">
                  DNego is developing online courses to train you in negotiation excellence. Enter your email in the form to receive updates and early access.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Advanced Negotiation Techniques</li>
                  <li>Negotiation for Project Managers</li>
                  <li>Supplier Management & Strategy</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Contact Form */}
          <ScrollAnimation animation="slide-up" delay={200}>
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-navy-950">Send us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-4">
                  Thank you for your message! We'll be in touch shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;