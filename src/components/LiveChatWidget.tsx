import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#003366] to-[#0077b6] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow ${isOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003366] to-[#0077b6] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Prognosys Support</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 p-4 bg-gray-50 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-700">
                      Hello! 👋 Welcome to Prognosys Medical. How can we help you today?
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">Just now</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-700">
                      You can ask about:
                    </p>
                    <div className="mt-2 space-y-1">
                      {['Product Information', 'Get a Quote', 'Technical Support', 'Schedule a Demo'].map((option) => (
                        <button
                          key={option}
                          className="block w-full text-left text-sm px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#003366]/10 hover:text-[#003366] transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage('');
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-gradient-to-r from-[#003366] to-[#0077b6] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center mt-2">
                Powered by Prognosys Support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;
