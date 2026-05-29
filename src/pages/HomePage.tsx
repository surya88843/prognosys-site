import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Award, Globe, Users, ChevronRight, Star, Zap, HeartPulse, Microscope, Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HomePageSchema } from '../components/SEOSchema';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: 5000, suffix: '+', label: 'Installations Worldwide' },
    { value: 30, suffix: '+', label: 'Countries Served' },
    { value: 500, suffix: '+', label: 'Partner Hospitals' },
    { value: 18, suffix: '', label: 'Years of Excellence' },
  ];

  const certifications = [
    { name: 'US FDA', description: 'Registered' },
    { name: 'CE', description: 'Certified' },
    { name: 'ISO 13485', description: '2016' },
    { name: 'BIS', description: 'Certified' },
  ];

  const products = [
    {
      title: 'Radiology',
      description: 'Complete range of digital radiography systems from fixed installations to mobile and ultraportable solutions.',
      icon: <Microscope size={32} />,
      href: '/products/radiology',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
    },
    {
      title: 'Fluoroscopy',
      description: 'Advanced C-Arm systems with image intensifier and flat panel detector options for surgical precision.',
      icon: <HeartPulse size={32} />,
      href: '/products/radiology',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',
    },
    {
      title: 'ProDigi Health',
      description: 'Cloud-based healthcare platform integrating AI diagnostics, teleradiology, and patient management.',
      icon: <Zap size={32} />,
      href: '/products/prodigi-health',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    },
    {
      title: 'Veterinary',
      description: 'Specialized imaging solutions for companion animals, equine, bovine, and exotic species.',
      icon: <Stethoscope size={32} />,
      href: '/products/veterinary',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop',
    },
  ];

  const testimonials = [
    {
      quote: "M/S Prognosys Medical Systems Pvt Ltd. has provided a high-quality Prorad Atlas Mobile Radiography System with excellent performance, reliability, ease of use, and exemplary after-sales support at Indira Gandhi Institute of Child Health, Karnataka.",
      author: "Administration",
      role: "Indira Gandhi Institute of Child Health",
      location: "Karnataka, India",
      logo: "IGICH",
    },
    {
      quote: "M/S Prognosys Medical Systems Pvt Ltd. provided an outstanding Prorad Atlas Mobile Radiography System with excellent image quality, speed, ease of use, and top-notch after-sales support at Apollo Hospitals Enterprises.",
      author: "Medical Director",
      role: "Apollo Hospitals",
      location: "Pan India",
      logo: "Apollo",
    },
    {
      quote: "The ProRad digital radiography system has transformed our diagnostic capabilities. The image quality is exceptional, and the support team is always responsive.",
      author: "Chief Radiologist",
      role: "AIIMS",
      location: "New Delhi, India",
      logo: "AIIMS",
    },
  ];

  const clients = [
    'Apollo Hospitals', 'AIIMS', 'Fortis Healthcare', 'Max Healthcare', 
    'Manipal Hospitals', 'Narayana Health', 'Columbia Asia', 'World Bank'
  ];

  const newsItems = [
    {
      title: 'Prognosys Launches Next-Gen ProRad Atlas 3.0',
      date: 'March 15, 2025',
      category: 'Product Launch',
      excerpt: 'The new Atlas 3.0 features enhanced AI-powered image processing and 40% faster acquisition times.',
    },
    {
      title: 'Expanding Presence in Middle East & Africa',
      date: 'February 28, 2025',
      category: 'Global Expansion',
      excerpt: 'Strategic partnerships established with leading distributors across UAE, Saudi Arabia, and Kenya.',
    },
    {
      title: 'TB Screening Initiative with Government of India',
      date: 'January 10, 2025',
      category: 'Partnership',
      excerpt: 'ProRad MediMag deployed across 200+ primary health centers for AI-assisted TB detection.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* SEO Schema */}
      <HomePageSchema />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d80]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/5 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Certifications Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <Shield size={14} className="text-cyan-400" />
                    <span className="text-white text-sm font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Clinical Excellence Through{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Advanced Imaging
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                India's leading manufacturer of US FDA & CE certified medical imaging solutions. 
                Transforming radiology with innovation, precision, and reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:-translate-y-1"
                >
                  Explore Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all">
                  <Play size={20} className="text-cyan-400" />
                  Watch Video
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop"
                  alt="Medical Imaging Equipment"
                  className="relative rounded-3xl shadow-2xl border border-white/10"
                />
                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Excellence Award</p>
                      <p className="text-sm text-gray-500">Best Medical Device 2024</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by Leading Healthcare Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div key={client} className="text-xl font-bold text-gray-300 hover:text-[#003366] transition-colors cursor-pointer">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section - NEW */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3D Product Viewer</h3>
              <p className="text-white/70 text-sm mb-4">Explore our equipment in 360° with interactive hotspots and detailed component views.</p>
              <Link to="/tools/3d-viewer" className="inline-flex items-center gap-2 text-cyan-300 font-medium text-sm hover:gap-3 transition-all">
                Explore in 3D <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Product Comparison</h3>
              <p className="text-white/70 text-sm mb-4">Compare specifications side-by-side to find the perfect system for your facility.</p>
              <Link to="/tools/compare" className="inline-flex items-center gap-2 text-cyan-300 font-medium text-sm hover:gap-3 transition-all">
                Compare Now <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clinical Gallery</h3>
              <p className="text-white/70 text-sm mb-4">View real imaging examples with before/after processing comparison.</p>
              <Link to="/tools/compare" className="inline-flex items-center gap-2 text-cyan-300 font-medium text-sm hover:gap-3 transition-all">
                View Gallery <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The ProRad™ Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical imaging solutions designed for diverse clinical environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={product.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0077b6]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      {product.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0077b6] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <span className="inline-flex items-center gap-1 text-[#0077b6] font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                Why Prognosys
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Prognosys Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                As India's leading radiology-focused brand, we combine cutting-edge technology with 
                deep clinical understanding to deliver solutions that make a real difference.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Shield className="text-[#0077b6]" size={24} />, title: 'Regulatory Excellence', description: 'US FDA registered, CE marked, ISO 13485 certified - meeting the highest global standards.' },
                  { icon: <Globe className="text-[#0077b6]" size={24} />, title: 'Global Presence', description: '5000+ installations across 30+ countries with localized support networks.' },
                  { icon: <Users className="text-[#0077b6]" size={24} />, title: 'Expert Support', description: 'Dedicated clinical and technical support teams ensuring maximum uptime.' },
                  { icon: <Award className="text-[#0077b6]" size={24} />, title: 'Made in India', description: 'State-of-the-art manufacturing facility in Bengaluru with Kaizen philosophy.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#0077b6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=400&auto=format&fit=crop"
                  alt="Manufacturing"
                  className="rounded-2xl h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop"
                  alt="Quality Control"
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-[80%]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#003366]">18+</p>
                    <p className="text-xs text-gray-500">Years Experience</p>
                  </div>
                  <div className="border-x border-gray-200">
                    <p className="text-2xl font-bold text-[#003366]">200+</p>
                    <p className="text-xs text-gray-500">Team Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#003366]">99%</p>
                    <p className="text-xs text-gray-500">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Leaders
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{testimonials[activeTestimonial].logo.charAt(0)}</span>
              </div>
              <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-white">{testimonials[activeTestimonial].author}</p>
              <p className="text-white/60 text-sm">{testimonials[activeTestimonial].role}</p>
              <p className="text-cyan-400 text-sm">{testimonials[activeTestimonial].location}</p>
            </motion.div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial ? 'bg-cyan-400 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                News & Updates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest from Prognosys
              </h2>
            </motion.div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-[#0077b6] font-medium hover:gap-3 transition-all mt-4 md:mt-0"
            >
              View All News <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#0077b6]/30 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0077b6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1 text-[#0077b6] font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#003366] to-[#0077b6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Imaging Capabilities?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to explore how ProRad™ solutions can elevate patient care at your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Request a Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
