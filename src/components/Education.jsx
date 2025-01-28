import React from 'react';

const Education = () => {
  const certificates = [
    'Net on AWS',
    'AWS Technical Essentials',
    'Architecting Serverless Applications',
    'ChatGPT Prompt Engineering for Developers'
  ];

  return (
    <div name="education" className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Professional Certifications
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-4 flex items-center justify-center text-center"
            >
              <span className="text-gray-300">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
