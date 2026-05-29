import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Globe, Headphones } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    department: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      city: 'Bengaluru',
      type: 'Global Headquarters',
      address: 'Plot No. 35, KIADB Industrial Area, Electronic City Phase 1, Bengaluru, Karnataka 560100',
      phone: '+91 80 2662 5765',
      email: 'info@prognosysmedical.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    },
    {
      city: 'Mumbai',
      type: 'Regional Office',
      address: 'Trade Center, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      phone: '+91 22 4567 8900',
      email: 'mumbai@prognosysmedical.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    },
    {
      city: 'Delhi',
      type: 'Regional Office',
      address: 'Nehru Place, New Delhi 110019',
      phone: '+91 11 4567 8900',
      email: 'delhi@prognosysmedical.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    },
  ];

  const departments = [
    { id: 'sales', label: 'Sales Inquiry', icon: <Building size={20} /> },
    { id: 'support', label: 'Technical Support', icon: <Headphones size={20} /> },
    { id: 'partner', label: 'Partnership', icon: <Globe size={20} /> },
    { id: 'general', label: 'General Inquiry', icon: <Mail size={20} /> },
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our products? Need support? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-500" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been received. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#0077b6] font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Department Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What can we help you with?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {departments.map((dept) => (
                          <button
                            key={dept.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, department: dept.id })}
                            className={`p-4 rounded-xl border-2 transition-all text-center ${
                              formData.department === dept.id
                                ? 'border-[#0077b6] bg-[#0077b6]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className={`mx-auto mb-2 ${formData.department === dept.id ? 'text-[#0077b6]' : 'text-gray-400'}`}>
                              {dept.icon}
                            </div>
                            <span className={`text-sm font-medium ${formData.department === dept.id ? 'text-[#0077b6]' : 'text-gray-700'}`}>
                              {dept.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company / Hospital
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                          placeholder="ABC Hospital"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                      >
                        <option value="">Select Country</option>
                        <option value="IN">India</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="KE">Kenya</option>
                        <option value="NG">Nigeria</option>
                        <option value="BD">Bangladesh</option>
                        <option value="NP">Nepal</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+918026625765" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Call Us</p>
                      <p className="font-medium">+91 80 2662 5765</p>
                    </div>
                  </a>
                  <a href="mailto:info@prognosysmedical.com" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email Us</p>
                      <p className="font-medium">info@prognosysmedical.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Business Hours</p>
                      <p className="font-medium">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Support Hotline</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For urgent technical support, our team is available 24/7.
                </p>
                <a
                  href="tel:+918026625765"
                  className="inline-flex items-center gap-2 text-[#0077b6] font-semibold"
                >
                  <Headphones size={20} />
                  24/7 Support: +91 80 2662 5766
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Visit Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 hover:shadow-lg transition-all"
              >
                <span className="text-sm font-medium text-[#0077b6]">{office.type}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#0077b6] flex-shrink-0 mt-0.5" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={18} className="text-[#0077b6]" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail size={18} className="text-[#0077b6]" />
                    {office.email}
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock size={18} className="text-[#0077b6]" />
                    {office.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Interactive Map</p>
            <p className="text-sm text-gray-400">Electronic City, Bengaluru</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
