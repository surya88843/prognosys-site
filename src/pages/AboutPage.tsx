import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Calendar, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const milestones = [
    { year: '2006', title: 'Founded', description: 'Prognosys Medical Systems established in Bengaluru, India' },
    { year: '2008', title: 'First Export', description: 'Expanded operations to Southeast Asian markets' },
    { year: '2010', title: 'US FDA Registration', description: 'Achieved US FDA 510(k) clearance for medical devices' },
    { year: '2012', title: 'CE Certification', description: 'Received CE marking for European market access' },
    { year: '2014', title: 'Strategic Investment', description: 'Somerset Indus Capital partners with Prognosys' },
    { year: '2016', title: 'ISO 13485', description: 'Certified for Quality Management Systems' },
    { year: '2018', title: 'AI Integration', description: 'Launched AI-powered diagnostic solutions' },
    { year: '2020', title: 'ProDigi Health', description: 'Cloud-based healthcare platform launched' },
    { year: '2022', title: '5000+ Installations', description: 'Milestone of 5000 installations worldwide' },
    { year: '2024', title: 'Global Expansion', description: 'Presence in 30+ countries across 5 continents' },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&facepad=2',
      bio: 'Visionary leader with 25+ years in medical technology. Previously held senior positions at Siemens Healthcare and GE Medical.',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&facepad=2',
      bio: 'PhD in Biomedical Engineering from IIT. Leads R&D initiatives in AI-powered diagnostics and next-gen imaging systems.',
    },
    {
      name: 'Vikram Patel',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&facepad=2',
      bio: 'Operations expert with experience at Apollo Hospitals and Philips Healthcare. Ensures manufacturing excellence.',
    },
    {
      name: 'Anita Desai',
      role: 'Chief Commercial Officer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&facepad=2',
      bio: 'Drives global sales and partnerships. Former VP at Wipro GE Healthcare with expertise in emerging markets.',
    },
  ];

  const values = [
    { icon: <Target size={28} />, title: 'Innovation', description: 'Continuously pushing boundaries in medical imaging technology' },
    { icon: <Heart size={28} />, title: 'Patient First', description: 'Every decision centered around improving patient outcomes' },
    { icon: <Shield size={28} />, title: 'Quality', description: 'Uncompromising commitment to the highest standards' },
    { icon: <Users size={28} />, title: 'Partnership', description: 'Building lasting relationships with healthcare providers' },
  ];

  const certifications = [
    { name: 'US FDA', status: 'Registered', description: '510(k) Clearance' },
    { name: 'CE Mark', status: 'Certified', description: 'European Conformity' },
    { name: 'ISO 13485:2016', status: 'Certified', description: 'Quality Management' },
    { name: 'BIS', status: 'Certified', description: 'Bureau of Indian Standards' },
    { name: 'GMP', status: 'Compliant', description: 'Good Manufacturing Practice' },
    { name: 'CDSCO', status: 'Licensed', description: 'Central Drugs Standard Control' },
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering Medical Imaging
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Since 2006
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              India's leading manufacturer of US FDA & CE certified medical imaging solutions, 
              committed to making advanced healthcare accessible worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To democratize access to advanced medical imaging technology by developing innovative, 
                reliable, and affordable solutions that empower healthcare providers to deliver 
                exceptional patient care across all settings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-[#003366]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#003366]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in medical imaging innovation, recognized for excellence 
                in technology, quality, and service. We envision a world where every healthcare 
                facility has access to world-class diagnostic imaging capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003366] to-[#0077b6] hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 inline-block ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <span className="text-sm font-bold text-[#0077b6]">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-full items-center justify-center flex-shrink-0 z-10">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to advancing medical imaging technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#0077b6] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
                Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Facility
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our 50,000 sq.ft. manufacturing facility in Bengaluru combines Kaizen philosophy with 
                cutting-edge technology to produce world-class medical imaging equipment.
              </p>

              <div className="space-y-4">
                {[
                  'ISO 13485:2016 Certified Clean Room Assembly',
                  'In-house R&D and Design Center',
                  'Advanced Quality Testing Labs',
                  'Automated SMT Production Lines',
                  'Environmental Stress Testing',
                  '100% Quality Inspection Protocol',
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
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
                  alt="Manufacturing Facility"
                  className="rounded-2xl h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=400&auto=format&fit=crop"
                  alt="Quality Control"
                  className="rounded-2xl h-48 w-full object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&auto=format&fit=crop"
                  alt="R&D Lab"
                  className="rounded-2xl h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop"
                  alt="Assembly Line"
                  className="rounded-2xl h-48 w-full object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#003366] to-[#0077b6]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Regulatory Compliance
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Meeting the highest international standards for medical device manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{cert.name.split(' ')[0]}</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{cert.name}</h3>
                <p className="text-white/60 text-sm">{cert.status}</p>
                <p className="text-cyan-400 text-xs mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner with Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of healthcare institutions worldwide who trust Prognosys for their medical imaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Get in Touch
              </Link>
              <Link
                to="/global-presence"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#003366] text-[#003366] rounded-full font-semibold hover:bg-[#003366] hover:text-white transition-all"
              >
                View Global Presence
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
