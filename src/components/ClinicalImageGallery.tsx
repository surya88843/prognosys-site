import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, X, Grid, List } from 'lucide-react';

interface ClinicalImage {
  id: string;
  title: string;
  specialty: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  equipment: string;
  technique?: string;
}

// Before/After Image Comparison Slider
const ImageComparisonSlider = ({ 
  beforeImage, 
  afterImage, 
  title 
}: { 
  beforeImage: string; 
  afterImage: string; 
  title: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={`${title} - After Processing`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
          After Processing
        </div>
      </div>

      {/* Before Image (Top Layer with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Before Processing`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-700 text-white text-sm font-medium rounded-full">
          Original Capture
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <ChevronLeft size={14} className="text-gray-600" />
            <ChevronRight size={14} className="text-gray-600" />
          </div>
        </div>
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white shadow-md" />
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
        ← Drag to Compare →
      </div>
    </div>
  );
};

const ClinicalImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<ClinicalImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const clinicalImages: ClinicalImage[] = [
    {
      id: '1',
      title: 'Hip Replacement Planning',
      specialty: 'Orthopaedics',
      description: 'High-resolution imaging for precise hip replacement surgery planning with enhanced bone detail visualization.',
      beforeImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD PREMIUM II (R9+)',
      technique: 'AP Pelvis',
    },
    {
      id: '2',
      title: 'Spinal Fusion Assessment',
      specialty: 'Orthopaedics',
      description: 'Clear visualization of spinal hardware and fusion progress with noise reduction processing.',
      beforeImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD 3NC',
      technique: 'Lateral Spine',
    },
    {
      id: '3',
      title: 'Chest X-Ray TB Screening',
      specialty: 'Pulmonology',
      description: 'AI-enhanced chest imaging for early tuberculosis detection with automated CAD analysis.',
      beforeImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD Atlas + MediMag AI',
      technique: 'PA Chest',
    },
    {
      id: '4',
      title: 'Cardiac Catheterization',
      specialty: 'Cardiology',
      description: 'Real-time fluoroscopy imaging during cardiac intervention with low-dose protocol.',
      beforeImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD PREMIUM II',
      technique: 'Fluoroscopy',
    },
    {
      id: '5',
      title: 'Kidney Stone Localization',
      specialty: 'Urology',
      description: 'Precise stone localization with enhanced contrast for lithotripsy planning.',
      beforeImage: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD PREMIUM I',
      technique: 'KUB',
    },
    {
      id: '6',
      title: 'Trauma Assessment',
      specialty: 'Emergency',
      description: 'Rapid bedside imaging for trauma assessment with portable digital radiography.',
      beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60',
      afterImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80',
      equipment: 'PRORAD Atlas Mobile',
      technique: 'Portable AP',
    },
  ];

  const specialties = ['all', ...new Set(clinicalImages.map(img => img.specialty))];

  const filteredImages = activeFilter === 'all'
    ? clinicalImages
    : clinicalImages.filter(img => img.specialty === activeFilter);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077b6] px-6 py-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Clinical Image Gallery</h2>
        <p className="text-white/80">
          Explore real-world imaging examples with before/after processing comparison
        </p>
      </div>

      {/* Filters & View Toggle */}
      <div className="p-4 border-b flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setActiveFilter(specialty)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === specialty
                  ? 'bg-[#003366] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {specialty === 'all' ? 'All Specialties' : specialty}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
          >
            <Grid size={18} className={viewMode === 'grid' ? 'text-[#003366]' : 'text-gray-500'} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
          >
            <List size={18} className={viewMode === 'list' ? 'text-[#003366]' : 'text-gray-500'} />
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className={`p-6 ${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all ${
              viewMode === 'list' ? 'flex gap-6' : ''
            }`}
          >
            <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'h-48' : 'h-48'}`}>
                <img
                  src={image.afterImage}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-white transition-colors"
                  >
                    <ZoomIn size={16} /> Compare Images
                  </button>
                </div>
              </div>
              <span className="absolute top-3 left-3 px-3 py-1 bg-[#003366] text-white text-xs font-medium rounded-full">
                {image.specialty}
              </span>
            </div>
            <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
              <h3 className="font-bold text-gray-900 mb-1">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">
                  📷 {image.equipment}
                </span>
                {image.technique && (
                  <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">
                    🎯 {image.technique}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Comparison Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 text-white">
              <div>
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-400 text-sm">{selectedImage.specialty} • {selectedImage.equipment}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Comparison */}
            <div className="flex-1 p-4">
              <div className="h-full rounded-2xl overflow-hidden">
                <ImageComparisonSlider
                  beforeImage={selectedImage.beforeImage}
                  afterImage={selectedImage.afterImage}
                  title={selectedImage.title}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 text-center text-white">
              <p className="text-sm text-gray-400 mb-2">{selectedImage.description}</p>
              <div className="flex justify-center gap-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Equipment: {selectedImage.equipment}
                </span>
                {selectedImage.technique && (
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    Technique: {selectedImage.technique}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClinicalImageGallery;
