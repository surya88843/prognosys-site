import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#001a33] to-[#000d1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-[#003366] to-[#0077b6] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Subscribe to our newsletter for product updates, industry news, and more.</p>
            </div>
            {subscribed ? (
              <div className="bg-white/20 rounded-full px-6 py-3 text-white font-medium">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 md:w-72 px-6 py-3 rounded-l-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 placeholder-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-[#003366] rounded-r-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  Subscribe <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-xl font-bold">Prognosys</span>
                <span className="text-xs block text-gray-400 -mt-1">Medical Systems</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              India's leading manufacturer of advanced medical imaging solutions. US FDA & CE certified, serving healthcare institutions globally since 2006.
            </p>
            <div className="space-y-3 text-gray-400">
              <a href="tel:+918026625765" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#0077b6]" />
                +91 80 2662 5765
              </a>
              <a href="mailto:info@prognosysmedical.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-[#0077b6]" />
                info@prognosysmedical.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0077b6] mt-1 flex-shrink-0" />
                <span>Plot No. 35, KIADB Industrial Area, Electronic City Phase 1, Bengaluru, Karnataka 560100, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products/radiology" className="text-gray-400 hover:text-white transition-colors">Radiology</Link></li>
              <li><Link to="/products/veterinary" className="text-gray-400 hover:text-white transition-colors">Veterinary</Link></li>
              <li><Link to="/products/prodigi-health" className="text-gray-400 hover:text-white transition-colors">ProDigi Health</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
            </ul>
            <h4 className="font-semibold text-lg mb-4 mt-6">Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/tools/3d-viewer" className="text-gray-400 hover:text-white transition-colors">3D Product Viewer</Link></li>
              <li><Link to="/tools/compare" className="text-gray-400 hover:text-white transition-colors">Compare Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/global-presence" className="text-gray-400 hover:text-white transition-colors">Global Presence</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Service & Support</Link></li>
              <li><Link to="/support#warranty" className="text-gray-400 hover:text-white transition-colors">Warranty</Link></li>
              <li><Link to="/support#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">FDA</div>
              <span className="text-sm text-gray-400">US FDA Registered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">CE</div>
              <span className="text-sm text-gray-400">CE Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">ISO</div>
              <span className="text-sm text-gray-400">ISO 13485:2016</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">BIS</div>
              <span className="text-sm text-gray-400">BIS Certified</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prognosys Medical Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/privacy-policy#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy#accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077b6] transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077b6] transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077b6] transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077b6] transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
