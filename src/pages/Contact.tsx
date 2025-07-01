import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ScrollAnimation from '../components/utils/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    company: '',
    user_message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      }

      setSubmitted(true);
      setFormData({ user_name: '', user_email: '', phone: '', company: '', user_message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-6">
                Ready to start saving? Get in touch for your free consultation.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Contact & Booking */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollAnimation animation="slide-up">
              <div className="bg-navy-950 text-white p-8 lg:p-12 rounded-lg shadow-xl h-full">
                <h2 className="text-2xl font-bold mb-8 text-white">Get In Touch</h2>
                
                <div className="space-y-6 mb-12">
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
                
                <div className="pt-8 border-t border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-white">Our Promise</h3>
                  <p className="text-gray-300">
                    Remember, our consultation is completely free with no obligation. We only get paid if we save you money, charging 50% of the verified savings.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Contact Form */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-6 text-navy-950">Send us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-6">
                    <p className="font-medium">Thank you for reaching out!</p>
                    <p>We've received your message and will be in touch shortly to schedule your free consultation.</p>
                  </div>
                ) : null}
                
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
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
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="user_message"
                      value={formData.user_message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                      placeholder="Tell us about your negotiation needs or any specific contracts you'd like us to review."
                      required
                    />
                  </div>
                  
                  <div className="flex items-center mb-8">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-700 underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : ArrowRight}
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
      
      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Contact FAQs"
            subtitle="Common questions about getting in touch and scheduling consultations"
          />
          
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation animation="fade-in">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-navy-950">How quickly will you respond to my inquiry?</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-navy-950">What happens during the initial consultation?</h3>
                  <p className="text-gray-600">
                    During your free 30-minute consultation, we'll discuss your specific negotiation needs, review any relevant contracts or issues, and outline potential savings opportunities. This is completely non-binding and at no cost to you.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-navy-950">Do I need to prepare anything for our first call?</h3>
                  <p className="text-gray-600">
                    While not required, having any relevant contracts or documentation ready can help us provide more specific guidance during the initial consultation. However, we're happy to start with just a conversation about your needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-navy-950">Can you accommodate international clients in different time zones?</h3>
                  <p className="text-gray-600">
                    Absolutely! We work with clients globally and can schedule consultations to accommodate your time zone. Our online booking system shows availability in your local time.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
