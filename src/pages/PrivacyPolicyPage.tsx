import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Privacy Policy Overview',
      content: `Prognosys Medical Systems Pvt. Ltd. ("Prognosys," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our products and services.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.`,
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      content: `We may collect information about you in a variety of ways:

**Personal Data**
- Name, email address, phone number, and company information when you fill out contact forms
- Billing and shipping addresses when placing orders
- Professional credentials and institutional affiliations

**Device Information**
- IP address, browser type, operating system
- Pages visited and time spent on our website
- Referring website addresses

**Cookies and Tracking Technologies**
We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.`,
    },
    {
      id: 'use',
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

- Respond to your inquiries and provide customer support
- Process orders and deliver products
- Send promotional communications (with your consent)
- Improve our website and services
- Comply with legal obligations
- Protect against fraudulent or illegal activity

We do not sell, trade, or rent your personal information to third parties.`,
    },
    {
      id: 'disclosure',
      title: 'Disclosure of Your Information',
      content: `We may share your information in the following situations:

- **Service Providers**: We may share your information with third-party vendors who perform services on our behalf (e.g., payment processing, shipping)
- **Business Transfers**: In connection with a merger, acquisition, or sale of assets
- **Legal Requirements**: When required by law or to protect our rights
- **With Your Consent**: When you have given us permission to share your information`,
    },
    {
      id: 'security',
      title: 'Security of Your Information',
      content: `We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.

Our security measures include:
- SSL/TLS encryption for data transmission
- Regular security assessments
- Access controls and authentication
- Employee training on data protection`,
    },
    {
      id: 'rights',
      title: 'Your Rights',
      content: `Depending on your location, you may have the following rights:

- **Access**: Request a copy of your personal data
- **Correction**: Request correction of inaccurate data
- **Deletion**: Request deletion of your personal data
- **Objection**: Object to certain processing activities
- **Portability**: Request transfer of your data
- **Withdraw Consent**: Withdraw previously given consent

To exercise these rights, please contact us at privacy@prognosysmedical.com.`,
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance (EU Users)',
      content: `For users in the European Union, we process your personal data in compliance with the General Data Protection Regulation (GDPR).

**Legal Basis for Processing:**
- Consent for marketing communications
- Contract performance for product orders
- Legitimate interests for website analytics
- Legal obligation for regulatory compliance

**Data Transfers:**
When we transfer data outside the EU, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses.`,
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance (Healthcare Data)',
      content: `Our medical imaging products and ProDigi Health platform are designed to support HIPAA compliance for healthcare providers in the United States.

We implement appropriate administrative, physical, and technical safeguards to protect Protected Health Information (PHI) in accordance with HIPAA requirements.

Note: This privacy policy applies to our website and general business operations. Specific HIPAA-related policies are provided separately to our healthcare customers.`,
    },
  ];

  const terms = [
    {
      id: 'terms',
      title: 'Terms of Use',
      content: `By accessing this website, you agree to be bound by these terms of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.

**Intellectual Property**
All content on this website, including text, graphics, logos, images, and software, is the property of Prognosys Medical Systems and is protected by intellectual property laws.

**Use License**
Permission is granted to temporarily download one copy of materials on this website for personal, non-commercial transitory viewing only.

**Disclaimer**
The materials on this website are provided on an 'as is' basis. Prognosys makes no warranties, expressed or implied, and hereby disclaims all other warranties.

**Limitations**
In no event shall Prognosys be liable for any damages arising out of the use or inability to use the materials on this website.`,
    },
  ];

  const accessibility = [
    {
      id: 'accessibility',
      title: 'Accessibility Statement',
      content: `Prognosys Medical Systems is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

**Conformance Status**
We aim to conform to WCAG 2.1 Level AA guidelines. This website has been designed to be perceivable, operable, understandable, and robust for all users.

**Accessibility Features**
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast ratios
- Resizable text support
- Alternative text for images

**Feedback**
We welcome your feedback on the accessibility of this website. Please contact us at accessibility@prognosysmedical.com if you encounter any accessibility barriers.`,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d80]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy & Terms
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Last Updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="#overview" className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-[#003366] hover:text-white transition-all">Privacy Policy</a>
            <a href="#terms" className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-[#003366] hover:text-white transition-all">Terms of Use</a>
            <a href="#accessibility" className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-[#003366] hover:text-white transition-all">Accessibility</a>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={24} />, title: 'Data Protection', desc: 'We protect your data with industry-standard security measures' },
              { icon: <Lock size={24} />, title: 'Encryption', desc: 'SSL/TLS encryption for all data transmission' },
              { icon: <Eye size={24} />, title: 'Transparency', desc: 'Clear information about how we use your data' },
              { icon: <Database size={24} />, title: 'Your Rights', desc: 'Access, correct, or delete your personal data' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#003366]/10 rounded-xl flex items-center justify-center text-[#003366] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="prose prose-gray max-w-none">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 mb-4 whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {terms.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="prose prose-gray max-w-none">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 mb-4 whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {accessibility.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="prose prose-gray max-w-none">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 mb-4 whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Questions About Our Policies?
          </h2>
          <p className="text-white/80 mb-8">
            If you have any questions or concerns about our privacy practices, please contact our Data Protection Officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@prognosysmedical.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003366] rounded-full font-semibold"
            >
              <Mail size={20} /> privacy@prognosysmedical.com
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <Globe size={20} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
