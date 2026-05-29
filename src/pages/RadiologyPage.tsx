import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, CheckCircle, Download, Play, ChevronDown, ChevronUp } from 'lucide-react';

const RadiologyPage = () => {
  const [activeTab, setActiveTab] = useState('fixed');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const tabs = [
    { id: 'fixed', label: 'Fixed X-Ray' },
    { id: 'mobile', label: 'Mobile DR' },
    { id: 'ultraportable', label: 'Ultraportable' },
    { id: 'carm', label: 'C-Arm' },
    { id: 'detectors', label: 'Detectors' },
  ];

  const products = {
    fixed: [
      {
        id: 'prorad-2fc-ftc',
        name: 'PRORAD 2FC FTC',
        tagline: 'Floor-to-Ceiling System',
        description: 'Exceptionally versatile floor-to-ceiling system enabling all general radiographic procedures with ease.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
        features: ['Single and dual detector options', 'Automatic exposure control', 'Floating table top option', 'Easy calibration'],
        specs: {
          kW: '22 kW / 32 kW / 40 kW / 50 kW',
          mA: '300 mA / 400 mA / 500 mA / 630 mA',
          kV: '40 kV – 125 kV / 40 kV – 150 kV',
        },
      },
      {
        id: 'prorad-2fc',
        name: 'PRORAD 2FC',
        tagline: 'Floor Mounted System',
        description: 'Very versatile and robust floor-mounted system with lightweight design and electromagnetic brakes.',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop',
        features: ['Smaller footprint', 'Large travel range', 'No ceiling support required', 'Quick patient positioning'],
        specs: {
          kW: '32 kW / 50 kW / 65 kW',
          mA: '500 mA / 630 mA / 800 mA',
          kV: '40 kV – 125 kV / 40 kV – 150 kV',
        },
      },
      {
        id: 'prorad-3nc',
        name: 'PRORAD 3NC',
        tagline: 'Ceiling Suspended System',
        description: 'Fully automated ceiling-suspended radiography system for high-volume imaging requirements.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
        features: ['Auto tracking & centering', 'Auto positioning & stitching', 'Lightweight & durable', 'Smooth operation'],
        specs: {
          kW: '50 kW / 65 kW / 80 kW',
          mA: '630 mA / 800 mA / 1000 mA',
          kV: '40 kV – 125 kV / 40 kV – 150 kV',
        },
      },
    ],
    mobile: [
      {
        id: 'prorad-atlas',
        name: 'PRORAD Atlas',
        tagline: 'Mobile Digital X-Ray',
        description: 'Compact, portable device for bedside radiology in orthopaedics, paediatrics, operating rooms, and emergencies.',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
        features: ['Touchscreen console', 'Instant image inspection', 'Maximum mobility', 'Confined space operation'],
        specs: {
          kW: '4 kW / 6 kW / 32 kW',
          mA: '100 mA / 150 mA / 420 mA',
          kV: '40 kV – 110 kV / 40 kV – 125 kV',
        },
      },
    ],
    ultraportable: [
      {
        id: 'prorad-ultraportable',
        name: 'PRORAD Atlas ULTRAPORTABLE',
        tagline: 'State-of-the-Art Portable Solution',
        description: 'Microprocessor controlled ultraportable X-ray system with LCD touchscreen and APR settings.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
        features: ['Remote switch exposure', 'DICOM integration', '14 x 17 digital detector', 'Ultra lightweight'],
        specs: {
          kV: '70 kV',
          mA: '2.0 mA',
          Weight: 'Ultra Lightweight',
        },
      },
    ],
    carm: [
      {
        id: 'prorad-premium-i',
        name: 'PRORAD PREMIUM I',
        tagline: 'C-ARM Image Intensifier',
        description: 'Designed for optimal surgical imaging with 9" image intensifier, digital processing, and dose management.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
        features: ['Stationary anode X-ray tube', 'High-resolution imaging', 'Ergonomic control panel', 'Smooth movements'],
        specs: {
          kW: '3.5 kW / 5.0 kW',
          kV: '40 – 110 kV',
          Intensifier: '9" Triple Field',
        },
      },
      {
        id: 'prorad-premium-ii',
        name: 'PRORAD PREMIUM II',
        tagline: 'Advanced C-ARM',
        description: 'Premium C-Arm with rotating anode X-ray tube for superior imaging quality.',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop',
        features: ['Rotating anode tube', 'Digital image processing', 'Large immersion depth', 'LCD display'],
        specs: {
          kW: '3.5 kW / 5.0 kW',
          kV: '40 – 120 kV',
          Intensifier: '9" Triple Field',
        },
      },
      {
        id: 'prorad-premium-ii-fpd',
        name: 'PRORAD PREMIUM II (R9+)',
        tagline: 'Flat Panel Detector C-ARM',
        description: 'Advanced Flat Panel Detector C-arm for orthopedics, cardiology, neurology, and pain management.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
        features: ['Flat Panel Detector', 'DICOM integration', 'Wireless keyboard/mouse', '10" Touch screen console'],
        specs: {
          kW: '3.5 kW / 5.0 kW',
          kV: '40 – 120 kV',
          Detector: 'High-Resolution FPD',
        },
      },
    ],
    detectors: [
      {
        id: 'detector-wired',
        name: 'ProRad Digital Detector (Wired)',
        tagline: 'High-Resolution Flat Panel',
        description: 'Premium wired flat panel detectors for fixed installations with exceptional image quality.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
        features: ['14x17 inch active area', 'High DQE', 'Fast image preview', 'DICOM compatible'],
        specs: {
          Size: '14" x 17"',
          Resolution: '3.6 lp/mm',
          DQE: '>70%',
        },
      },
      {
        id: 'detector-wireless',
        name: 'ProRad Digital Detector (Wireless)',
        tagline: 'Portable Wireless Panel',
        description: 'Wireless flat panel detectors for mobile and portable radiography applications.',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
        features: ['Battery powered', 'Lightweight design', 'Auto-trigger', 'Long battery life'],
        specs: {
          Size: '14" x 17" / 10" x 12"',
          Weight: '< 3.5 kg',
          Battery: '8+ hours',
        },
      },
    ],
  };

  const currentProducts = products[activeTab as keyof typeof products] || [];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d80]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Radiology Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Radiography Systems
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Built for seamless clinical integration and high-throughput settings, delivering ultra-clear imaging on robust hardware.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tools/3d-viewer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                View in 3D
              </Link>
              <Link
                to="/tools/compare"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Compare Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#003366] to-[#0077b6] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {currentProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t"></div>
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="text-white ml-1" size={28} />
                    </button>
                  </div>
                  <div className="p-8">
                    <span className="text-sm font-medium text-[#0077b6] uppercase tracking-wider">{product.tagline}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                      className="flex items-center gap-2 text-[#0077b6] font-medium mb-4"
                    >
                      Technical Specifications
                      {expandedProduct === product.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {expandedProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-gray-50 rounded-xl p-4 mb-6"
                      >
                        <table className="w-full text-sm">
                          <tbody>
                            {Object.entries(product.specs).map(([key, value]) => (
                              <tr key={key} className="border-b border-gray-200 last:border-0">
                                <td className="py-2 font-medium text-gray-700">{key}</td>
                                <td className="py-2 text-gray-600">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all"
                      >
                        Request Quote <ArrowRight size={18} />
                      </Link>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-all">
                        <Download size={18} /> Datasheet
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Help Comparing Products?
          </h2>
          <p className="text-gray-600 mb-8">
            Use our comparison tool to find the perfect system for your clinical requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Schedule a Demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RadiologyPage;
