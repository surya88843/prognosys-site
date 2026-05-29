import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Headphones, FileText, Download, ChevronDown, ChevronUp, 
  Shield, Clock, Wrench, Phone, Mail, MessageCircle, Search,
  CheckCircle, AlertCircle, HelpCircle
} from 'lucide-react';
import { SupportPageSchema } from '../components/SEOSchema';

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      icon: <Headphones size={32} />,
      title: 'Technical Support',
      description: '24/7 technical assistance for all ProRad products',
      action: 'Call Support',
      contact: '+91 80 2662 5766',
      available: '24/7',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Service Request',
      description: 'Schedule installation, maintenance, or repair',
      action: 'Submit Request',
      contact: 'service@prognosysmedical.com',
      available: 'Mon-Sat',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Live Chat',
      description: 'Chat with our support team online',
      action: 'Start Chat',
      contact: 'Chat Now',
      available: '9 AM - 6 PM',
    },
  ];

  const faqs = [
    {
      question: 'What is the warranty period for ProRad products?',
      answer: 'All ProRad products come with a standard 2-year comprehensive warranty covering parts and labor. Extended warranty options up to 5 years are available for purchase.',
    },
    {
      question: 'How do I schedule a preventive maintenance visit?',
      answer: 'You can schedule preventive maintenance by calling our support hotline, emailing service@prognosysmedical.com, or submitting a request through our online portal. We recommend quarterly preventive maintenance for optimal performance.',
    },
    {
      question: 'What is the typical response time for service requests?',
      answer: 'For critical issues, we guarantee a response within 4 hours and on-site visit within 24 hours. For non-critical issues, response time is typically within 24-48 hours.',
    },
    {
      question: 'Do you provide training for new equipment?',
      answer: 'Yes, comprehensive training is included with every installation. We provide hands-on training for operators, radiographers, and biomedical engineers. Additional training sessions can be arranged upon request.',
    },
    {
      question: 'How can I order spare parts?',
      answer: 'Spare parts can be ordered through your regional service representative or by contacting our parts department at parts@prognosysmedical.com. Most common parts are available from stock with same-day dispatch.',
    },
    {
      question: 'Is remote diagnostics available?',
      answer: 'Yes, our ProDigi Health connected systems support remote diagnostics. Our technical team can remotely access system logs, run diagnostics, and even perform software updates with your permission.',
    },
    {
      question: 'What certifications do your service engineers hold?',
      answer: 'All our service engineers are factory-trained and certified. They undergo regular training on new products and technologies. Many hold additional certifications in radiation safety and biomedical engineering.',
    },
    {
      question: 'How do I check the status of my service request?',
      answer: 'You can check the status of your service request by calling our support hotline with your ticket number, or by logging into the customer portal at support.prognosysmedical.com.',
    },
  ];

  const warrantyInfo = [
    { title: 'Standard Warranty', period: '2 Years', includes: 'Parts & Labor' },
    { title: 'Extended Warranty', period: 'Up to 5 Years', includes: 'Parts, Labor & PM' },
    { title: 'Response Time', period: '4-24 Hours', includes: 'Based on Priority' },
    { title: 'PM Schedule', period: 'Quarterly', includes: 'Recommended' },
  ];

  const resources = [
    { title: 'User Manuals', description: 'Product operation guides', icon: <FileText size={24} /> },
    { title: 'Quick Start Guides', description: 'Setup instructions', icon: <FileText size={24} /> },
    { title: 'Training Videos', description: 'How-to tutorials', icon: <FileText size={24} /> },
    { title: 'Safety Guidelines', description: 'Radiation safety docs', icon: <Shield size={24} /> },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-hidden">
      {/* SEO Schema for FAQs */}
      <SupportPageSchema />
      
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
              Service & Support
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to Help
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert technical support, schedule service visits, and access resources for your ProRad equipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918026625766"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <Phone size={20} /> Call Support Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Submit a Ticket
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#0077b6]/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock size={14} />
                  Available: {option.available}
                </div>
                <button className="w-full py-3 bg-[#003366]/10 text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Info */}
      <section id="warranty" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Warranty
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Service & Warranty Coverage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {warrantyInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-2xl font-bold text-[#0077b6] mb-2">{info.period}</p>
                <p className="text-sm text-gray-500">{info.includes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
            />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="text-[#0077b6] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <HelpCircle className="text-gray-300 mx-auto mb-4" size={48} />
              <p className="text-gray-500">No FAQs match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Documentation & Guides
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[#003366]/10 rounded-xl flex items-center justify-center text-[#003366] mb-4 group-hover:bg-[#003366] group-hover:text-white transition-all">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <span className="inline-flex items-center gap-2 text-[#0077b6] font-medium text-sm">
                  <Download size={16} /> Download
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Agreement */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#0077b6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Service Commitment
              </h2>
              <p className="text-white/80 mb-8">
                We understand that medical equipment uptime is critical. Our service level agreement ensures you get the support you need, when you need it.
              </p>
              <div className="space-y-4">
                {[
                  { status: 'Critical Issues', time: '4-hour response, 24-hour resolution' },
                  { status: 'High Priority', time: '8-hour response, 48-hour resolution' },
                  { status: 'Standard Request', time: '24-hour response, 72-hour resolution' },
                ].map((item) => (
                  <div key={item.status} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <AlertCircle className="text-cyan-300" size={24} />
                    <div>
                      <p className="font-semibold text-white">{item.status}</p>
                      <p className="text-white/70 text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Annual Maintenance Contract</h3>
              <p className="text-gray-600 mb-6">
                Ensure maximum uptime and optimal performance with our comprehensive AMC plans.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Quarterly preventive maintenance',
                  'Priority response times',
                  'Discounted spare parts',
                  'Software updates included',
                  'Extended warranty coverage',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="block text-center py-4 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Get AMC Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-8">
            Our support team is always ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918026625766"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-semibold"
            >
              <Phone size={20} /> +91 80 2662 5766
            </a>
            <a
              href="mailto:support@prognosysmedical.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#003366] text-[#003366] rounded-full font-semibold"
            >
              <Mail size={20} /> support@prognosysmedical.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
