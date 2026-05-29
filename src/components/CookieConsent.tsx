import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0077b6] rounded-xl flex items-center justify-center flex-shrink-0">
            <Cookie className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">We value your privacy</h3>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <Link to="/privacy-policy" className="text-[#0077b6] underline hover:text-[#003366]">
                Privacy Policy
              </Link>{' '}
              for more information.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onAccept}
              className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              className="px-6 py-2.5 bg-gradient-to-r from-[#003366] to-[#0077b6] text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
