import React from 'react';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center text-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6">Courses</h1>
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <p className="text-2xl mb-4">🚧 Coming Soon 🚧</p>
          <p className="text-gray-300 mb-6">
            I'm currently preparing some exciting courses to help you level up your skills. 
            Stay tuned for comprehensive learning resources!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact"
              className="bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Get Notified
            </a>
            <a 
              href="mailto:your-email@example.com"
              className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
