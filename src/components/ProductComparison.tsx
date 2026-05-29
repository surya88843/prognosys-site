import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, Minus, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  price?: string;
  specs: {
    [key: string]: string | boolean;
  };
}

const allProducts: Product[] = [
  {
    id: 'prorad-premium-i',
    name: 'PRORAD PREMIUM I',
    tagline: 'C-ARM Image Intensifier',
    category: 'C-Arm',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '3.5 kW / 5.0 kW',
      'kV Range': '40 – 110 kV',
      'Detector Type': 'Image Intensifier',
      'Detector Size': '9" Triple Field',
      'X-Ray Tube': 'Stationary Anode',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': false,
      'Touchscreen Console': true,
      'Wireless Operation': false,
      'AI Features': false,
      'Best For': 'Orthopaedics, Urology',
    },
  },
  {
    id: 'prorad-premium-ii',
    name: 'PRORAD PREMIUM II',
    tagline: 'Advanced C-ARM',
    category: 'C-Arm',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '3.5 kW / 5.0 kW',
      'kV Range': '40 – 120 kV',
      'Detector Type': 'Image Intensifier',
      'Detector Size': '9" Triple Field',
      'X-Ray Tube': 'Rotating Anode',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': false,
      'Touchscreen Console': true,
      'Wireless Operation': false,
      'AI Features': false,
      'Best For': 'Cardiology, Neurology',
    },
  },
  {
    id: 'prorad-premium-ii-fpd',
    name: 'PRORAD PREMIUM II (R9+)',
    tagline: 'Flat Panel Detector C-ARM',
    category: 'C-Arm',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '3.5 kW / 5.0 kW',
      'kV Range': '40 – 120 kV',
      'Detector Type': 'Flat Panel Detector',
      'Detector Size': 'High Resolution FPD',
      'X-Ray Tube': 'Rotating Anode',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': true,
      'Touchscreen Console': true,
      'Wireless Operation': true,
      'AI Features': true,
      'Best For': 'All Specialties',
    },
  },
  {
    id: 'prorad-2fc',
    name: 'PRORAD 2FC',
    tagline: 'Floor Mounted System',
    category: 'Fixed X-Ray',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '32 kW / 50 kW / 65 kW',
      'kV Range': '40 kV – 150 kV',
      'Detector Type': 'Digital Flat Panel',
      'Detector Size': '14" x 17" / 17" x 17"',
      'X-Ray Tube': 'High Capacity',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': true,
      'Touchscreen Console': true,
      'Wireless Operation': false,
      'AI Features': false,
      'Best For': 'High Volume Clinics',
    },
  },
  {
    id: 'prorad-3nc',
    name: 'PRORAD 3NC',
    tagline: 'Ceiling Suspended System',
    category: 'Fixed X-Ray',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '50 kW / 65 kW / 80 kW',
      'kV Range': '40 kV – 150 kV',
      'Detector Type': 'Digital Flat Panel',
      'Detector Size': '14" x 17" / 17" x 17"',
      'X-Ray Tube': 'Premium High Capacity',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': true,
      'Touchscreen Console': true,
      'Wireless Operation': false,
      'AI Features': true,
      'Best For': 'Hospitals, Trauma Centers',
    },
  },
  {
    id: 'prorad-atlas',
    name: 'PRORAD Atlas',
    tagline: 'Mobile Digital X-Ray',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '4 kW / 6 kW / 32 kW',
      'kV Range': '40 kV – 125 kV',
      'Detector Type': 'Digital Flat Panel',
      'Detector Size': '14" x 17"',
      'X-Ray Tube': 'Compact',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': true,
      'Touchscreen Console': true,
      'Wireless Operation': true,
      'AI Features': false,
      'Best For': 'ICU, Emergency, OR',
    },
  },
  {
    id: 'prorad-ultraportable',
    name: 'PRORAD ULTRAPORTABLE',
    tagline: 'Ultraportable X-Ray',
    category: 'Portable',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop',
    specs: {
      'Generator Power': '2.0 mA / 70 kV',
      'kV Range': '70 kV',
      'Detector Type': 'Wireless Digital',
      'Detector Size': '14" x 17"',
      'X-Ray Tube': 'Ultra Compact',
      'Digital Processing': true,
      'Dose Management': true,
      'DICOM Compatible': true,
      'Flat Panel': true,
      'Touchscreen Console': true,
      'Wireless Operation': true,
      'AI Features': false,
      'Best For': 'Field Use, Home Care',
    },
  },
];

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showSelector, setShowSelector] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', ...new Set(allProducts.map(p => p.category))];

  const addProduct = (productId: string) => {
    if (selectedProducts.length < 4 && !selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
    }
    setShowSelector(false);
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
  };

  const selectedProductsData = selectedProducts.map(id => allProducts.find(p => p.id === id)!);

  // Group specs
  const specGroups: { [key: string]: string[] } = {
    'Power & Range': ['Generator Power', 'kV Range'],
    'Detector': ['Detector Type', 'Detector Size', 'Flat Panel'],
    'Features': ['X-Ray Tube', 'Digital Processing', 'Dose Management', 'DICOM Compatible', 'Touchscreen Console', 'Wireless Operation', 'AI Features'],
    'Application': ['Best For'],
  };

  const filteredProducts = filterCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === filterCategory);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077b6] px-6 py-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Product Comparison Tool</h2>
        <p className="text-white/80">Compare up to 4 products side-by-side to find the perfect solution</p>
      </div>

      {/* Selected Products */}
      <div className="p-6 border-b">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Selected Products Slots */}
          {[0, 1, 2, 3].map((index) => {
            const product = selectedProductsData[index];
            return (
              <div key={index} className="relative">
                {product ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-50 rounded-2xl p-4 h-full"
                  >
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                    >
                      <X size={14} />
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-24 object-cover rounded-xl mb-3"
                    />
                    <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.tagline}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-xs">
                      {product.category}
                    </span>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setShowSelector(true)}
                    className="w-full h-full min-h-[180px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#0077b6] hover:text-[#0077b6] transition-colors"
                  >
                    <Plus size={24} />
                    <span className="text-sm">Add Product</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Selector Modal */}
      <AnimatePresence>
        {showSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowSelector(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Select a Product</h3>
                <button onClick={() => setShowSelector(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={20} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="px-6 py-3 border-b bg-gray-50 flex gap-2 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      filterCategory === cat
                        ? 'bg-[#003366] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cat === 'all' ? 'All Products' : cat}
                  </button>
                ))}
              </div>

              {/* Product List */}
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                <div className="grid grid-cols-2 gap-4">
                  {filteredProducts
                    .filter(p => !selectedProducts.includes(p.id))
                    .map((product) => (
                      <button
                        key={product.id}
                        onClick={() => addProduct(product.id)}
                        className="text-left bg-gray-50 rounded-xl p-4 hover:bg-[#003366]/5 hover:ring-2 hover:ring-[#0077b6] transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-20 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                        <p className="text-xs text-gray-500">{product.tagline}</p>
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Table */}
      {selectedProducts.length >= 2 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {Object.entries(specGroups).map(([groupName, specs]) => (
                <>
                  <tr key={groupName} className="bg-gray-100">
                    <td colSpan={selectedProducts.length + 1} className="px-6 py-3 font-bold text-gray-700 text-sm uppercase tracking-wider">
                      {groupName}
                    </td>
                  </tr>
                  {specs.map((specKey) => (
                    <tr key={specKey} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-700 text-sm bg-gray-50 w-[200px]">
                        {specKey}
                      </td>
                      {selectedProductsData.map((product) => {
                        const value = product.specs[specKey];
                        return (
                          <td key={product.id} className="px-6 py-4 text-center">
                            {typeof value === 'boolean' ? (
                              value ? (
                                <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                  <Check size={14} className="text-green-600" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                                  <Minus size={14} className="text-gray-400" />
                                </span>
                              )
                            ) : (
                              <span className="text-sm text-gray-900">{value || '-'}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {selectedProducts.length < 2 && (
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Products to Compare</h3>
          <p className="text-gray-500 mb-6">Add at least 2 products to see a side-by-side comparison</p>
          <button
            onClick={() => setShowSelector(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            <Plus size={18} /> Add Products
          </button>
        </div>
      )}

      {/* Actions */}
      {selectedProducts.length >= 2 && (
        <div className="p-6 bg-gray-50 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-sm text-gray-600">
            Comparing {selectedProducts.length} products
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-white transition-all">
              <Download size={16} /> Download PDF
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              Request Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;
