import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Users, Building, Globe, ArrowRight } from 'lucide-react';

const GlobalPresencePage = () => {
  const stats = [
    { value: '5000+', label: 'Installations', icon: <Building size={24} /> },
    { value: '30+', label: 'Countries', icon: <Globe size={24} /> },
    { value: '500+', label: 'Partner Hospitals', icon: <Users size={24} /> },
    { value: '50+', label: 'Distributors', icon: <MapPin size={24} /> },
  ];

  const regions = [
    {
      name: 'South Asia',
      countries: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka', 'Pakistan', 'Bhutan'],
      installations: '3500+',
      highlight: true,
    },
    {
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
      installations: '500+',
    },
    {
      name: 'Africa',
      countries: ['Kenya', 'Nigeria', 'South Africa', 'Ethiopia', 'Tanzania', 'Ghana'],
      installations: '400+',
    },
    {
      name: 'Southeast Asia',
      countries: ['Indonesia', 'Malaysia', 'Philippines', 'Vietnam', 'Thailand', 'Myanmar'],
      installations: '350+',
    },
    {
      name: 'Central Asia',
      countries: ['Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Tajikistan'],
      installations: '150+',
    },
    {
      name: 'Latin America',
      countries: ['Brazil', 'Mexico', 'Colombia', 'Argentina', 'Chile'],
      installations: '100+',
    },
  ];

  const keyClients = [
    { name: 'Apollo Hospitals', type: 'Hospital Chain', location: 'Pan India' },
    { name: 'AIIMS', type: 'Government Hospital', location: 'New Delhi' },
    { name: 'Fortis Healthcare', type: 'Hospital Chain', location: 'Pan India' },
    { name: 'Max Healthcare', type: 'Hospital Chain', location: 'North India' },
    { name: 'Manipal Hospitals', type: 'Hospital Chain', location: 'South India' },
    { name: 'Narayana Health', type: 'Hospital Chain', location: 'Pan India' },
    { name: 'World Bank Projects', type: 'Government', location: 'Multiple States' },
    { name: 'Government of India', type: 'Government', location: 'National TB Program' },
  ];

  const offices = [
    {
      city: 'Bengaluru',
      type: 'Global Headquarters',
      address: 'Plot No. 35, KIADB Industrial Area, Electronic City Phase 1, Bengaluru, Karnataka 560100',
      phone: '+91 80 2662 5765',
      email: 'info@prognosysmedical.com',
    },
    {
      city: 'Mumbai',
      type: 'Regional Office',
      address: 'Trade Center, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      phone: '+91 22 4567 8900',
      email: 'mumbai@prognosysmedical.com',
    },
    {
      city: 'Delhi',
      type: 'Regional Office',
      address: 'Nehru Place, New Delhi 110019',
      phone: '+91 11 4567 8900',
      email: 'delhi@prognosysmedical.com',
    },
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
              Global Presence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trusted Worldwide
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From our headquarters in Bengaluru, we serve healthcare institutions across 30+ countries with localized support and service networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-[#003366]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#003366]">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#003366]">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Footprint
            </h2>
            <p className="text-lg text-gray-600">
              Serving healthcare institutions across 6 continents
            </p>
          </motion.div>

          {/* Stylized Map Representation */}
          <div className="relative bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path d="M150,200 Q300,150 400,200 T600,180 T800,220 T900,180" fill="none" stroke="white" strokeWidth="2" />
                <path d="M100,300 Q250,250 350,300 T550,280 T750,320 T850,280" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            
            <div className="relative grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-4 ${region.highlight ? 'bg-white text-gray-900' : 'bg-white/10 text-white'}`}
                >
                  <h3 className={`font-bold mb-2 ${region.highlight ? 'text-[#003366]' : ''}`}>{region.name}</h3>
                  <p className={`text-2xl font-bold mb-3 ${region.highlight ? 'text-[#0077b6]' : 'text-cyan-300'}`}>
                    {region.installations}
                  </p>
                  <div className="space-y-1">
                    {region.countries.slice(0, 4).map((country) => (
                      <p key={country} className={`text-xs ${region.highlight ? 'text-gray-600' : 'text-white/70'}`}>
                        {country}
                      </p>
                    ))}
                    {region.countries.length > 4 && (
                      <p className={`text-xs ${region.highlight ? 'text-[#0077b6]' : 'text-cyan-300'}`}>
                        +{region.countries.length - 4} more
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Institutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyClients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-xl flex items-center justify-center text-white font-bold mb-4">
                  {client.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-sm text-[#0077b6]">{client.type}</p>
                <p className="text-sm text-gray-500">{client.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-semibold mb-4">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us Near You
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
                className={`rounded-3xl p-8 ${i === 0 ? 'bg-gradient-to-br from-[#003366] to-[#0077b6] text-white' : 'bg-white'}`}
              >
                <span className={`text-sm font-medium ${i === 0 ? 'text-cyan-300' : 'text-[#0077b6]'}`}>
                  {office.type}
                </span>
                <h3 className={`text-2xl font-bold mt-1 mb-4 ${i === 0 ? '' : 'text-gray-900'}`}>
                  {office.city}
                </h3>
                <div className={`space-y-3 text-sm ${i === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                  <p className="flex items-start gap-3">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className={`w-[18px] text-center ${i === 0 ? '' : 'text-[#0077b6]'}`}>📞</span>
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-[18px] text-center">✉️</span>
                    {office.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0077b6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Distribution Partner
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join our global network of distributors and bring world-class medical imaging to your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003366] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Partner With Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresencePage;
