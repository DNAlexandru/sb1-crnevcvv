import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-premium text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block group mb-6">
                <span className="text-4xl font-serif font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  DNego<span className="text-blue-400 group-hover:text-blue-300">●</span>
                </span>
              </Link>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                {t('footer.companyInfo', 'Expert negotiation services with a no-risk, performance-based model. We only succeed when you save money.')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>negotiation@dnego.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+39 3275859000</span>
                </div>
                
                <div className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div>Parma, Italy</div>
                    <div className="text-sm text-gray-400">(Consultations available globally)</div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {t('footer.quickLinks', 'Quick Links')}
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{t(`nav.${item.name.toLowerCase().replace(/\s/g,'')}`, item.name)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Our Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {t('footer.ourServices', 'Our Services')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/services#real-estate"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{t('servicesPreview.realEstate.title', 'Real Estate Negotiation')}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services#salary-benefits"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{t('servicesPreview.salary.title', 'Salary & Benefits Negotiation')}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services#consultation"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{t('servicesPreview.consulting.title', 'Business Consultation Services')}</span>
                  </a>
                </li>
              </ul>

              {/* Legal Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{t('nav.termsofservice', 'Terms of Service')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{t('nav.privacypolicy', 'Privacy Policy')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('footer.newsletter.title', 'Stay Updated')}
            </h3>
            <p className="text-gray-300 mb-8">
              {t('footer.newsletter.subtitle', 'Get negotiation tips and insights delivered to your inbox.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder', 'Enter your email')}
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="btn btn-primary whitespace-nowrap">
                {t('footer.newsletter.button', 'Subscribe')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              &copy; {currentYear} DNego<span className="text-blue-400">●</span> 
              <span className="flex items-center gap-1">
                {t('footer.rights', 'All rights reserved. Made with')}
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                {t('footer.madeBy', 'for better negotiations')}
              </span>
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{t('footer.professional', 'Professional Negotiation Services')}</span>
              <span>•</span>
              <span>{t('footer.global', 'Global Consultations Available')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;