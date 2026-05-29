import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, HeartPulse, Zap, Stethoscope, Download, CheckCircle } from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      id: 'radiology',
      title: 'Radiology',
      subtitle: 'Digital X-Ray Systems',
      description: 'Complete range of digital radiography systems from fixed installations to mobile and ultraportable solutions. Built for seamless clinical integration and high-throughput settings.',
      icon: <Microscope size={40} />,
      href: '/products/radiology',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
      features: ['Fixed X-Ray Systems', 'Mobile DR', 'Ultraportable X-Ray', 'Digital Detectors'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'fluoroscopy',
      title: 'Fluoroscopy',
      subtitle: 'C-Arm Systems',
      description: 'Advanced C-Arm systems with image intensifier and flat panel detector options for surgical precision. Designed for orthopedics, cardiology, neurology, and pain management.',
      icon: <HeartPulse size={40} />,
      href: '/products/radiology',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
      features: ['Image Intensifier C-Arms', 'Flat Panel C-Arms', 'Mobile Surgical Imaging', 'Dose Management'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      id: 'prodigi',
      title: 'ProDigi Health',
      subtitle: 'Digital Healthcare Platform',
      description: 'Cloud-based healthcare platform integrating AI diagnostics, teleradiology, and patient management. Revolutionary point-of-care solutions for modern healthcare.',
      icon: <Zap size={40} />,
      href: '/products/prodigi-health',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      features: ['AI-Powered TB Screening', 'Teleradiology', 'E-Clinic Solutions', 'Cloud PACS'],
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      id: 'veterinary',
      title: 'Veterinary',
      subtitle: 'Animal Imaging Solutions',
      description: 'Specialized imaging solutions designed for veterinary practices. From companion animals to large livestock, our systems deliver exceptional diagnostic capabilities.',
      icon: <Stethoscope size={40} />,
      href: '/products/veterinary',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop',
      features: ['Companion Animals', 'Equine', 'Bovine', 'Exotic & Avian'],
      color: 'from-green-500 to-green-700',
    },
  ];

  const keyBenefits = [
    { title: 'US FDA Registered', description: 'All products meet stringent FDA requirements' },
    { title: 'CE Certified', description: 'European conformity for quality assurance' },
    { title: 'ISO 13485', description: 'International quality management standards' },
    { title: 'Global Support', description: '24/7 technical support worldwide' },
  ];

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
              Our Products
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The ProRad™ Range
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive medical imaging solutions designed for diverse clinical environments. 
              From fixed installations to ultraportable systems, we have you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {keyBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <CheckCircle size={16} className="text-cyan-400" />
                  <span className="text-white text-sm">{benefit.title}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tools/3d-viewer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Explore in 3D
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

      {/* Product Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${category.color} rounded-3xl blur-2xl opacity-20`}></div>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{category.subtitle}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={category.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-full font-semibold hover:shadow-lg transition-all`}
                    >
                      Explore Products <ArrowRight size={18} />
                    </Link>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-all">
                      <Download size={18} /> Download Brochure
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Our team of experts can help you find the perfect imaging solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Request a Consultation
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Product Comparison Tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
