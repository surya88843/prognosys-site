import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductViewer3D from '../components/ProductViewer3D';
import { ArrowRight, Download, Phone, ChevronRight } from 'lucide-react';

const Product3DViewerPage = () => {
  const [activeProduct, setActiveProduct] = useState<'c-arm' | 'x-ray'>('c-arm');

  const products = [
    {
      id: 'c-arm',
      name: 'PRORAD PREMIUM II (R9+)',
      category: 'C-ARM Flat Panel Detector',
      description: 'Advanced Flat Panel Detector C-arm system engineered for orthopedics, cardiology, neurology, and pain management.',
      features: [
        'High-Resolution Flat Panel Detector',
        '10" Touchscreen Console',
        'DICOM Integration',
        'Dose Management Software',
        'Smooth Noiseless Movement',
      ],
      specs: {
        'Generator Power': '3.5 kW / 5.0 kW',
        'kV Range': '40 – 120 kV',
        'Detector Type': 'Flat Panel',
      },
    },
    {
      id: 'x-ray',
      name: 'PRORAD 3NC',
      category: 'Ceiling Suspended Digital Radiography',
      description: 'Fully automated ceiling-suspended radiography system for high-volume daily imaging with auto tracking and positioning.',
      features: [
        'Auto Tracking & Centering',
        'Auto Positioning & Stitching',
        'Dual Detector Options',
        'High Precision Alignment',
        'Smooth & Quiet Operation',
      ],
      specs: {
        'Generator Power': '50 kW / 65 kW / 80 kW',
        'kV Range': '40 kV – 150 kV',
        'Detector Size': '14" x 17" / 17" x 17"',
      },
    },
  ];

  const currentProduct = products.find(p => p.id === activeProduct)!;

  return (
    <div className="overflow-hidden min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d80]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Interactive 3D Experience
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Explore Our Products in 3D
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Rotate, zoom, and discover key components with our interactive 3D product viewer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selector */}
      <section className="py-6 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id as 'c-arm' | 'x-ray')}
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  activeProduct === product.id
                    ? 'bg-gradient-to-r from-[#003366] to-[#0077b6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{product.name}</span>
                {activeProduct === product.id && <ChevronRight size={16} />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Viewer + Product Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* 3D Viewer */}
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <ProductViewer3D
                productType={activeProduct}
                productName={currentProduct.name}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              key={`info-${activeProduct}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Product Details Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <span className="text-sm font-medium text-[#0077b6]">{currentProduct.category}</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{currentProduct.name}</h2>
                <p className="text-gray-600 mb-6">{currentProduct.description}</p>

                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {currentProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#0077b6] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  {Object.entries(currentProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Interested in this product?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Get a personalized quote or schedule a live demonstration.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#003366] rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Request Quote <ArrowRight size={18} />
                  </Link>
                  <button className="flex items-center justify-center gap-2 w-full py-3 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all">
                    <Download size={18} /> Download Brochure
                  </button>
                  <a
                    href="tel:+918026625765"
                    className="flex items-center justify-center gap-2 w-full py-3 text-white/80 hover:text-white text-sm"
                  >
                    <Phone size={16} /> Or call +91 80 2662 5765
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Products CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore More Products
          </h2>
          <p className="text-gray-600 mb-6">
            View our complete range of digital radiography and fluoroscopy systems
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products/radiology"
              className="px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              View All Radiology Products
            </Link>
            <Link
              to="/tools/compare"
              className="px-6 py-3 border-2 border-[#003366] text-[#003366] rounded-full font-medium hover:bg-[#003366] hover:text-white transition-all"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product3DViewerPage;
