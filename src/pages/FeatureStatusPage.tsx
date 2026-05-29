import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, ArrowRight } from 'lucide-react';

// This is an internal page to show feature implementation status
const FeatureStatusPage = () => {
  const categories = [
    {
      name: 'A. World-Class Homepage Features',
      features: [
        { name: '1. Cinematic Hero Section', status: 'partial', details: 'Has gradient + basic animations. Missing: WebGL, Three.js, GSAP, Lenis, 3D renders' },
        { name: '2. Scroll-Based Storytelling', status: 'partial', details: 'Has sections with InView animations. Missing: Scroll-triggered story, 3D rotations' },
        { name: '3. Interactive 3D Product Viewer', status: 'missing', details: 'Not implemented. Need: Three.js/Spline for 360° rotation, zoom, hotspots' },
      ],
    },
    {
      name: 'B. Product Page Upgrades',
      features: [
        { name: '4. Clinical Workflow Simulation', status: 'partial', details: 'ProDigi Health has workflow steps. Missing: Animated simulation' },
        { name: '5. Comparison Engine', status: 'missing', details: 'Not implemented. CTA exists but no actual comparison tool' },
        { name: '6. AI Feature Visualization', status: 'missing', details: 'Text mentions AI. Missing: Interactive visualizations' },
        { name: '7. Real Clinical Image Gallery', status: 'missing', details: 'Using stock photos. Missing: DICOM viewer, before/after sliders' },
      ],
    },
    {
      name: 'C. Trust & Global Branding',
      features: [
        { name: '8. Global Presence Map', status: 'partial', details: 'Has regional stats cards. Missing: Actual interactive world map' },
        { name: '9. Hospital Success Stories', status: 'partial', details: 'Case studies in News. Missing: Dedicated pages with ROI details' },
        { name: '10. Certifications Hub', status: 'partial', details: 'Badges displayed. Missing: Downloadable PDFs' },
      ],
    },
    {
      name: 'D. Sales & Conversion Features',
      features: [
        { name: '11. Smart Demo Booking System', status: 'partial', details: 'Contact form exists. Missing: Product selection, calendar, auto-routing' },
        { name: '12. WhatsApp + Live Chat', status: 'partial', details: 'Chat widget UI exists. Missing: WhatsApp, actual backend' },
        { name: '13. Distributor Portal', status: 'missing', details: 'Not implemented. Need: Auth, login, protected materials' },
        { name: '14. Tender Intelligence Portal', status: 'missing', details: 'Not implemented at all. Huge competitive opportunity' },
      ],
    },
    {
      name: 'E. SEO & Digital Marketing',
      features: [
        { name: '15. SEO Optimization', status: 'partial', details: 'Basic meta tags. Missing: Schema markup (Product, FAQ, MedicalDevice)' },
        { name: '16. Knowledge Center / Blog', status: 'partial', details: 'News section exists. Missing: Individual articles, search' },
        { name: '17. Video Hub', status: 'partial', details: 'Placeholder exists. Missing: Actual videos, YouTube integration' },
      ],
    },
    {
      name: 'F. Advanced International Features',
      features: [
        { name: '18. AI Assistant', status: 'missing', details: 'Not implemented. Need: OpenAI/LangChain integration' },
        { name: '19. AR Visualization', status: 'missing', details: 'Not implemented. Need: AR.js/WebXR' },
        { name: '20. Multi-Language Support', status: 'partial', details: 'Selector exists. Missing: Actual translations (i18next)' },
        { name: '21. Investor / Corporate Section', status: 'partial', details: 'About page has leadership. Missing: IR section, R&D roadmap' },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'partial':
        return <AlertCircle className="text-yellow-500" size={20} />;
      case 'missing':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'missing':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  const stats = {
    complete: 0,
    partial: categories.reduce((acc, cat) => acc + cat.features.filter(f => f.status === 'partial').length, 0),
    missing: categories.reduce((acc, cat) => acc + cat.features.filter(f => f.status === 'missing').length, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Feature Implementation Audit</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comparison of requested features vs. current implementation status
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200">
            <p className="text-4xl font-bold text-green-600">{stats.complete}</p>
            <p className="text-green-700 font-medium">Fully Complete</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 text-center border border-yellow-200">
            <p className="text-4xl font-bold text-yellow-600">{stats.partial}</p>
            <p className="text-yellow-700 font-medium">Partially Done</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-200">
            <p className="text-4xl font-bold text-red-600">{stats.missing}</p>
            <p className="text-red-700 font-medium">Not Implemented</p>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#003366] to-[#0077b6] px-6 py-4">
                <h2 className="text-lg font-bold text-white">{category.name}</h2>
              </div>
              <div className="divide-y">
                {category.features.map((feature, index) => (
                  <div key={index} className="px-6 py-4 flex items-start gap-4">
                    <div className="mt-1">{getStatusIcon(feature.status)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(feature.status)}`}>
                          {feature.status === 'complete' ? 'Complete' : feature.status === 'partial' ? 'Partial' : 'Missing'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Priority Recommendations */}
        <div className="mt-12 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">🎯 Priority Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-300 mb-3">🔴 CRITICAL (Phase 1)</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Interactive 3D Product Viewer</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Product Comparison Engine</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> SEO Schema Markup</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Real Clinical Image Gallery</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-300 mb-3">🟠 HIGH PRIORITY (Phase 2)</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Scroll-Based Storytelling (GSAP)</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Smart Demo Booking System</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Tender Intelligence Portal</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Video Hub with Real Content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Requirements */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🛠️ Technologies Required for Missing Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { feature: '3D Product Viewer', tech: 'Three.js, React Three Fiber, Spline' },
              { feature: 'Scroll Storytelling', tech: 'GSAP, ScrollTrigger, Lenis' },
              { feature: 'AR Visualization', tech: 'AR.js, 8th Wall, WebXR' },
              { feature: 'AI Assistant', tech: 'OpenAI API, LangChain' },
              { feature: 'Multi-Language', tech: 'i18next, react-intl' },
              { feature: 'Portals/Auth', tech: 'Backend + Database' },
            ].map((item) => (
              <div key={item.feature} className="bg-gray-50 rounded-xl p-4">
                <p className="font-medium text-gray-900">{item.feature}</p>
                <p className="text-sm text-gray-500">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureStatusPage;
