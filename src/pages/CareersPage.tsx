import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Lightbulb, Users, Zap, GraduationCap, Coffee } from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'sales', label: 'Sales & Marketing' },
    { id: 'service', label: 'Service' },
    { id: 'operations', label: 'Operations' },
  ];

  const benefits = [
    { icon: <Heart size={24} />, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and your family' },
    { icon: <GraduationCap size={24} />, title: 'Learning & Development', description: 'Continuous training and certification programs' },
    { icon: <Coffee size={24} />, title: 'Work-Life Balance', description: 'Flexible hours and remote work options' },
    { icon: <Zap size={24} />, title: 'Performance Bonuses', description: 'Competitive rewards for outstanding performance' },
    { icon: <Users size={24} />, title: 'Team Events', description: 'Regular team outings and celebration events' },
    { icon: <Lightbulb size={24} />, title: 'Innovation Culture', description: 'Opportunity to work on cutting-edge technology' },
  ];

  const openings = [
    {
      id: 1,
      title: 'Senior Software Engineer - AI/ML',
      department: 'engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop next-generation diagnostic algorithms for medical imaging.',
    },
    {
      id: 2,
      title: 'Regional Sales Manager - North India',
      department: 'sales',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Lead sales operations across North India for our radiology product portfolio.',
    },
    {
      id: 3,
      title: 'Field Service Engineer',
      department: 'service',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Provide installation, maintenance, and support for medical imaging equipment.',
    },
    {
      id: 4,
      title: 'Product Manager - Digital Health',
      department: 'engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Drive product strategy and roadmap for our ProDigi Health platform.',
    },
    {
      id: 5,
      title: 'Quality Assurance Engineer',
      department: 'operations',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Ensure product quality and regulatory compliance in our manufacturing processes.',
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'sales',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead marketing initiatives and brand communications across all channels.',
    },
  ];

  const values = [
    { title: 'Innovation', description: 'We push boundaries and embrace new technologies' },
    { title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
    { title: 'Integrity', description: 'We act with honesty and transparency' },
    { title: 'Collaboration', description: 'We work together to achieve shared goals' },
  ];

  const filteredOpenings = selectedDepartment === 'all'
    ? openings
    : openings.filter(job => job.department === selectedDepartment);

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
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shape the Future of Healthcare
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join 200+ passionate professionals working to transform medical imaging and healthcare delivery worldwide.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              View Open Positions <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work at Prognosys?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Prognosys, we're building something meaningful. Every day, our work helps doctors 
                diagnose diseases earlier, enabling better patient outcomes worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We foster an environment of innovation, collaboration, and continuous learning. 
                Our diverse team brings together the best minds in engineering, healthcare, and business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=400&auto=format&fit=crop"
                alt="Office environment"
                className="rounded-2xl h-48 w-full object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop"
                alt="Team meeting"
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&auto=format&fit=crop"
                alt="Innovation"
                className="rounded-2xl h-48 w-full object-cover mt-8"
              />
            </motion.div>
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
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-xl flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect role and join our mission
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-[#003366] to-[#0077b6] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredOpenings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0077b6]/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0077b6] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mt-1 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase size={14} /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all whitespace-nowrap">
                    Apply Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No open positions in this department at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Submit Your Resume <ArrowRight size={20} />
            </Link>
            <a
              href="mailto:careers@prognosysmedical.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              careers@prognosysmedical.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
