import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Calendar, Download, Play, ChevronRight } from 'lucide-react';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All News' },
    { id: 'product', label: 'Product Launches' },
    { id: 'partnership', label: 'Partnerships' },
    { id: 'event', label: 'Events' },
    { id: 'award', label: 'Awards' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Prognosys Launches Next-Gen ProRad Atlas 3.0 with AI Integration',
      excerpt: 'The new Atlas 3.0 features enhanced AI-powered image processing, 40% faster acquisition times, and improved battery life for mobile applications.',
      date: 'March 15, 2025',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Strategic Partnership Expansion in Middle East & Africa',
      excerpt: 'Prognosys establishes strategic partnerships with leading distributors across UAE, Saudi Arabia, and Kenya to strengthen regional presence.',
      date: 'February 28, 2025',
      category: 'partnership',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'TB Screening Initiative Reaches 200+ Health Centers',
      excerpt: 'ProRad MediMag deployed across 200+ primary health centers in partnership with Government of India for AI-assisted TB detection.',
      date: 'January 10, 2025',
      category: 'partnership',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Prognosys Wins Best Medical Device Manufacturer Award 2024',
      excerpt: 'Recognized for excellence in innovation, quality, and customer service at the Annual Healthcare Excellence Awards.',
      date: 'December 5, 2024',
      category: 'award',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'RSNA 2024: Showcasing Latest Innovations in Radiology',
      excerpt: 'Prognosys exhibited the complete ProRad range at the Radiological Society of North America annual meeting in Chicago.',
      date: 'November 25, 2024',
      category: 'event',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Launch of Veterinary Imaging Division',
      excerpt: 'Expanding our portfolio with specialized imaging solutions for veterinary practices, from companion animals to large livestock.',
      date: 'October 15, 2024',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: 'Apollo Hospitals: Transforming Bedside Imaging',
      client: 'Apollo Hospitals',
      results: '40% faster diagnosis, 30% improved workflow',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
    },
    {
      title: 'Government TB Screening Program',
      client: 'Ministry of Health',
      results: '200+ centers deployed, 1M+ screenings',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    },
    {
      title: 'Rural Healthcare Transformation in Karnataka',
      client: 'Government of Karnataka',
      results: '50 PHCs equipped, remote diagnosis enabled',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
    },
  ];

  const resources = [
    { title: 'ProRad Product Catalog 2025', type: 'PDF', size: '12 MB' },
    { title: 'Radiology Solutions Brochure', type: 'PDF', size: '5 MB' },
    { title: 'Veterinary Imaging Guide', type: 'PDF', size: '3 MB' },
    { title: 'ProDigi Health Overview', type: 'PDF', size: '4 MB' },
  ];

  const filteredNews = activeFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const featuredNews = newsItems.find(item => item.featured);

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
              News & Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest Updates
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about product launches, partnerships, events, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden"
            >
              <div className="relative h-64 lg:h-full">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#0077b6] text-white rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-xs font-medium uppercase">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-[#0077b6] font-semibold hover:gap-3 transition-all">
                  Read Full Story <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#003366] to-[#0077b6] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* News Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.filter(item => !item.featured).map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-xs font-medium uppercase">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0077b6] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-[#0077b6] font-medium text-sm hover:gap-2 transition-all">
                    Read More <ChevronRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden h-80"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-cyan-400 text-sm font-medium">{study.client}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{study.title}</h3>
                  <p className="text-white/80 text-sm">{study.results}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all">
                    Read Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Downloads */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                Downloads
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Brochures & Resources
              </h2>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div
                    key={resource.title}
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">{resource.type}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-500">{resource.size}</p>
                      </div>
                    </div>
                    <Download size={20} className="text-[#0077b6]" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                Featured Video
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Watch Our Latest
              </h2>
              <div className="relative rounded-3xl overflow-hidden h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="text-white ml-1" size={36} />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Company Overview: Discover how Prognosys is transforming medical imaging across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Subscribe to our newsletter for the latest product updates, industry news, and exclusive insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
