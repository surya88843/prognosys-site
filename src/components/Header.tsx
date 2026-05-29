import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Globe, Box, GitCompareArrows, Image, Headphones } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const productLinks = [
    { name: 'All Products', href: '/products', icon: null },
    { name: 'Radiology', href: '/products/radiology', icon: null },
    { name: 'Veterinary', href: '/products/veterinary', icon: null },
    { name: 'ProDigi Health', href: '/products/prodigi-health', icon: null },
  ];

  const toolsLinks = [
    { name: '3D Product Viewer', href: '/tools/3d-viewer', icon: <Box size={16} />, description: 'Explore products in 3D' },
    { name: 'Compare Products', href: '/tools/compare', icon: <GitCompareArrows size={16} />, description: 'Side-by-side comparison' },
    { name: 'Clinical Gallery', href: '/tools/compare#gallery', icon: <Image size={16} />, description: 'Before/after imaging' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Global Presence', href: '/global-presence' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+918026625765" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone size={14} />
              <span>+91 80 2662 5765</span>
            </a>
            <a href="mailto:info@prognosysmedical.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Mail size={14} />
              <span>info@prognosysmedical.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <select className="bg-transparent border-none text-white text-sm focus:outline-none cursor-pointer">
                <option value="en" className="text-gray-900">English</option>
                <option value="es" className="text-gray-900">Español</option>
                <option value="fr" className="text-gray-900">Français</option>
                <option value="ar" className="text-gray-900">العربية</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-white/10 rounded">US FDA</span>
              <span className="px-2 py-1 bg-white/10 rounded">CE</span>
              <span className="px-2 py-1 bg-white/10 rounded">ISO 13485</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-[#003366]">Prognosys</span>
                  <span className="text-xs block text-gray-500 -mt-1">Medical Systems</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === '/' ? 'text-[#0077b6]' : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                    location.pathname.includes('/products') ? 'text-[#0077b6]' : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                  }`}
                >
                  Products <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-transparent hover:text-[#0077b6] transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tools Dropdown - NEW */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                    location.pathname.includes('/tools') ? 'text-[#0077b6]' : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                  }`}
                >
                  Tools <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'tools' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {toolsLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="flex items-start gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-transparent hover:text-[#0077b6] transition-colors"
                        >
                          <span className="mt-0.5 text-[#0077b6]">{link.icon}</span>
                          <div>
                            <span className="font-medium block">{link.name}</span>
                            <span className="text-xs text-gray-500">{link.description}</span>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                    ['/about', '/global-presence', '/careers', '/news'].some(p => location.pathname.includes(p))
                      ? 'text-[#0077b6]'
                      : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                  }`}
                >
                  Company <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'company' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {companyLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-transparent hover:text-[#0077b6] transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/support"
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === '/support' ? 'text-[#0077b6]' : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                }`}
              >
                <Headphones size={16} />
                Support
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === '/contact' ? 'text-[#0077b6]' : 'text-gray-700 hover:text-[#0077b6] hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#003366] to-[#0077b6] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-[#0077b6]/25 transition-all hover:-translate-y-0.5"
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium">Home</Link>
                
                <div className="border-t pt-2 mt-2">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Products</p>
                  {productLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-2 mt-2">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Tools</p>
                  {toolsLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50">
                      <span className="text-[#0077b6]">{link.icon}</span>
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-2 mt-2">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Company</p>
                  {companyLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-2 mt-2">
                  <Link to="/support" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium">Support</Link>
                  <Link to="/contact" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium">Contact</Link>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block text-center bg-gradient-to-r from-[#003366] to-[#0077b6] text-white px-6 py-3 rounded-full font-medium"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
