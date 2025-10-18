'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function EmailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('emailModalSeen');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Save to backend or just localStorage for now
    try {
      // TODO: Send to your backend or Mailchimp
      console.log('Email submitted:', email);
      
      localStorage.setItem('emailModalSeen', 'true');
      setSubmitted(true);
      
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        
        <button
          onClick={() => {
            setIsOpen(false);
            localStorage.setItem('emailModalSeen', 'true');
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Get 5 Extra Free Comparisons
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for contract review tips + 5 bonus comparisons
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get My Bonus Comparisons
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              You're All Set!
            </h3>
            <p className="text-gray-600">
              Check your email for your bonus comparisons
            </p>
          </div>
        )}
      </div>
    </div>
  );
          }
