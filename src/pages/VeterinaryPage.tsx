import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Download, Heart, Shield, Headphones, Award } from 'lucide-react';

const VeterinaryPage = () => {
  const animalCategories = [
    {
      title: 'Companion Animals',
      description: 'Supporting the unique diagnostic demands of pets, our portable X-ray solutions offer quick and accurate diagnosis to enhance pet health management.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop',
      applications: ['Dogs & Cats', 'Small Mammals', 'Orthopedic Imaging', 'Dental Radiography'],
    },
    {
      title: 'Equine',
      description: 'Our robust and highly mobile X-ray systems provide precise diagnostic imaging for practitioners working with horses.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop',
      applications: ['Lameness Evaluation', 'Pre-Purchase Exams', 'Fracture Detection', 'Dental Imaging'],
    },
    {
      title: 'Bovine',
      description: 'Tailored specifically to meet the challenges of bovine veterinary practice. Combines portability with power for efficient field diagnostics.',
      image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop',
      applications: ['Dairy Cattle', 'Beef Cattle', 'Field Diagnostics', 'Herd Health'],
    },
    {
      title: 'Exotic & Avian',
      description: 'Specialized imaging for wildlife, zoological, and specialty practices providing gentle yet effective diagnostic care.',
      image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop',
      applications: ['Zoo Animals', 'Birds & Reptiles', 'Wildlife Rehabilitation', 'Research Facilities'],
    },
  ];

  const products = [
    {
      name: 'ProRad Vet Ultraportable',
      description: 'Ultra-lightweight portable X-ray system perfect for field work and mobile veterinary practices.',
      features: ['Battery Operated', 'Lightweight Design', 'Wireless Detector', 'DICOM Compatible'],
      bestFor: 'Mobile practices, equine, farm visits',
    },
    {
      name: 'ProRad Vet Mobile',
      description: 'Mobile X-ray system with superior image quality for clinic-based veterinary diagnostics.',
      features: ['High Output Generator', 'Touchscreen Interface', 'Multiple Detector Options', 'Easy Positioning'],
      bestFor: 'Veterinary clinics, animal hospitals',
    },
    {
      name: 'ProRad Vet Fixed',
      description: 'Full-featured fixed installation system for high-volume veterinary imaging centers.',
      features: ['Ceiling/Floor Mounted', 'Auto-Positioning', 'High Throughput', 'Specialized Tables'],
      bestFor: 'Large animal hospitals, referral centers',
    },
  ];

  const benefits = [
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: 'Dedicated Veterinary Focus',
      description: 'Systems engineered for the specific anatomical and diagnostic needs of animals.',
    },
    {
      icon: <Award className="text-yellow-500" size={24} />,
      title: 'Superior Image Quality',
      description: 'Supreme clarity for detecting subtle changes in bone structure and soft tissue.',
    },
    {
      icon: <Headphones className="text-blue-500" size={24} />,
      title: 'Expert Support',
      description: 'Exceptional customer support and technical service for maximum uptime.',
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: 'Built to Last',
      description: 'Rugged construction designed for the demanding veterinary environment.',
    },
  ];

  const faqs = [
    {
      question: 'What is the expected image quality across animal sizes?',
      answer: 'Our veterinary X-ray systems use high resolution detectors, automatic exposure settings and advanced algorithms for consistently sharp images spanning from small pets to large livestock.',
    },
    {
      question: 'How do I choose the right X-ray system for my practice?',
      answer: 'Ultraportable and Mobile Vet X-ray solutions are best for those who require mobility for on-site imaging, while fixed systems offer specialized configurations for high-volume clinical needs.',
    },
    {
      question: 'What kind of support do you offer after purchase?',
      answer: 'We offer comprehensive warranties, installation assistance, hands-on training and clinical support. We also provide on-site service options and regular preventative maintenance.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Veterinary Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Veterinary Imaging Solutions
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Empowering veterinarians with ultraportable, high-quality digital X-ray systems for fast, reliable, and accurate animal diagnostics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animal Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive X-ray solutions tailored for veterinary practices of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {animalCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.applications.map((app) => (
                      <span key={app} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProRad Vet?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ProRad Vet Product Range
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-green-100">
                  <span className="text-sm text-gray-500">Best for:</span>
                  <p className="text-sm text-green-700 font-medium">{product.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Veterinary Practice?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Contact us for a personalized consultation and demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-800 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Request a Demo <ArrowRight size={20} />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              <Download size={20} /> Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeterinaryPage;
