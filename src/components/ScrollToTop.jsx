import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white 
          w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 
          hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
          transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
