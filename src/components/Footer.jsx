import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const socialLinks = [
    { 
      id: 1, 
      child: <FaLinkedin size={30} />, 
      href: 'https://linkedin.com/in/yourusername',
      style: 'hover:text-blue-500'
    },
    { 
      id: 2, 
      child: <FaGithub size={30} />, 
      href: 'https://github.com/yourusername',
      style: 'hover:text-gray-500'
    },
    { 
      id: 3, 
      child: <FaTwitter size={30} />, 
      href: 'https://twitter.com/yourusername',
      style: 'hover:text-blue-400'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement actual newsletter subscription logic
    if (email) {
      setSubscribed(true);
      // You might want to add actual email submission logic here
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Social Links and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map(({ id, child, href, style }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${style}`}
              >
                {child}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            {year} Your Name. All rights reserved.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Tech Insights Delivered to Your Inbox
          </h3>
          <p className="text-gray-400 text-center mb-6">
            Stay ahead of the curve with my monthly tech newsletter. Get the latest insights, 
            coding tips, and industry trends directly in your inbox.
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-cyan-600 text-white rounded-r-md hover:bg-cyan-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-green-400">
              Thanks for subscribing! You'll receive tech updates soon.
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
