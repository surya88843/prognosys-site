import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Brain, Smartphone, Shield, CheckCircle, Users, Activity, FileText, Database, Zap, Globe } from 'lucide-react';

const ProDigiHealthPage = () => {
  const solutions = [
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered TB Screening',
      subtitle: 'ProRad MediMag',
      description: 'Complete end-to-end TB detection solution with AI-powered chest X-ray analysis.',
      features: [
        'Auto-read chest X-rays using AI',
        'Results in under 90 seconds',
        'Integration with PCR systems',
        'National TB Registry integration',
        'Patient care continuum support',
      ],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud PACS',
      subtitle: 'ProRad PACS',
      description: 'Secure cloud-based picture archiving and communication system.',
      features: [
        'Secure image storage',
        'Remote access anywhere',
        'DICOM compliant',
        'Multi-site connectivity',
        'Advanced visualization tools',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'E-Clinic Solutions',
      subtitle: 'Digital Health Centers',
      description: 'Technology-enabled smart clinics with integrated diagnostics.',
      features: [
        'Patient registration system',
        'Integrated lab analyzers',
        'Teleradiology support',
        'Electronic health records',
        'Remote specialist consultation',
      ],
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: <Activity size={32} />,
      title: 'Teleradiology',
      subtitle: 'Remote Diagnosis',
      description: 'Connect with expert radiologists for remote image interpretation.',
      features: [
        '24/7 reporting services',
        'Expert panel of radiologists',
        'Quick turnaround time',
        'Second opinion service',
        'Quality assurance protocols',
      ],
      color: 'from-green-500 to-green-700',
    },
  ];

  const workflow = [
    { step: 1, title: 'Patient Registration', description: 'Capture demographics, vitals, symptoms, and medical history. Generate health cards.', icon: <Users size={24} /> },
    { step: 2, title: 'Digital X-Ray Capture', description: 'Integrated worklist with chest PA protocols and image processing tools.', icon: <FileText size={24} /> },
    { step: 3, title: 'AI Analysis', description: 'Real-time classification into Normal, Abnormal, or TB Presumptive in under 90 seconds.', icon: <Brain size={24} /> },
    { step: 4, title: 'Molecular Testing', description: 'Point-of-care PCR molecular testing for conclusive TB confirmation.', icon: <Activity size={24} /> },
    { step: 5, title: 'Cloud Storage', description: 'Images automatically sent to ProRad PACS for secure storage and retrieval.', icon: <Database size={24} /> },
    { step: 6, title: 'Reporting', description: 'Zoom, annotate, measure, and generate comprehensive reports within the platform.', icon: <FileText size={24} /> },
  ];

  const integrations = [
    'Digital Radiography', 'Bio Chemistry Analyzers', 'Haematology', 'Immunology',
    'Electrolytes', 'Urine Analyzer', 'Molecular Biology', 'Fundus Camera',
    'ECG', 'Digital Stethoscope', 'Spirometer', 'ENT Devices'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Digital Healthcare Platform
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ProDigi Health
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              A simple, cloud-based platform with a user-friendly interface that makes capturing patient data and managing diagnostics simpler and efficient.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Cloud size={18} className="text-cyan-300" />
                <span className="text-white text-sm">Cloud-Based</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Brain size={18} className="text-cyan-300" />
                <span className="text-white text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Shield size={18} className="text-cyan-300" />
                <span className="text-white text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Globe size={18} className="text-cyan-300" />
                <span className="text-white text-sm">Remote Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated solutions that connect medical devices with cloud-based technologies for better patient outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {solution.icon}
                    </div>
                    <div>
                      <span className="text-white/80 text-sm">{solution.subtitle}</span>
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Streamlined Clinical Workflow
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-700 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Device Integrations
            </h2>
            <p className="text-lg text-cyan-100">
              Seamlessly connects with a wide range of medical devices and analyzers
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TB Initiative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                Featured Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered TB Screening Initiative
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ProRad MediMag is deployed across 200+ primary health centers in partnership with 
                the Government of India for rapid TB detection using AI-assisted chest X-ray analysis.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Detects TB and 15+ other chest diseases',
                  'Results in under 90 seconds',
                  'Integration with National TB Registry',
                  'Medication adherence tracking',
                  'DOT center support tools',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-4xl font-bold text-purple-600">200+</p>
                    <p className="text-sm text-gray-600">Health Centers</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-4xl font-bold text-cyan-600">&lt;90s</p>
                    <p className="text-sm text-gray-600">Detection Time</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-4xl font-bold text-green-600">95%</p>
                    <p className="text-sm text-gray-600">Accuracy Rate</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <p className="text-4xl font-bold text-orange-600">15+</p>
                    <p className="text-sm text-gray-600">Diseases Detected</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-700 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Healthcare Facility
          </h2>
          <p className="text-lg text-cyan-100 mb-8">
            Join the digital healthcare revolution with ProDigi Health platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-700 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Schedule a Demo <ArrowRight size={20} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProDigiHealthPage;
