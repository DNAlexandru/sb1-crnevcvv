import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-950 text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 text-white font-bold text-2xl mb-4">
              <div className="flex items-center">
                <span className="text-white font-serif">NEGO</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Expert negotiation services with a no-risk, performance-based model. We only succeed when you save money.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transition-transform transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services#real-estate"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Real Estate Negotiation
                </a>
              </li>
              <li>
                <a
                  href="/services#salary-benefits"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Salary & Benefits Negotiation
                </a>
              </li>
              <li>
                <a
                  href="/services#consultation"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Business Consultation Services
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">alexandru.buruiana@outlook.it</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">+39 3275859000</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">Parma, Italy<br />(Consultations available globally)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Nego Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
