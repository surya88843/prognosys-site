import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import ProductComparison from '../components/ProductComparison';
import ClinicalImageGallery from '../components/ClinicalImageGallery';
import { HomePageSchema } from '../components/SEOSchema';

const ComparisonPage = () => {
  return (
    <div className="overflow-hidden">
      <HomePageSchema />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d80]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Product Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compare & Explore
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Use our interactive tools to compare products side-by-side and explore clinical imaging examples
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ProductComparison />
          </motion.div>
        </div>
      </section>

      {/* Clinical Image Gallery */}
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ClinicalImageGallery />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to See More?
            </h2>
            <p className="text-white/80 mb-8">
              Explore our products in 3D or schedule a personalized demonstration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tools/3d-viewer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <Box size={20} /> View in 3D
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Request a Demo <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;
