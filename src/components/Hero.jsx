import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { Link, useNavigate } from 'react-router-dom';
import profileImg from '/profile.jpg';

const Hero = () => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const navigate = useNavigate();

  const toggleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[name="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative overflow-hidden">
      {/* Header */}

      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between h-full pt-16">
        {/* Text Content */}
        <div className="w-2/3 pr-12">
          <div className="flex items-center mb-4">
            <span className="text-2xl sm:text-3xl mr-4 text-gray-300">👋</span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-300">
              Hello, I'm
            </h2>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Muhammad Sumair Khan
          </h1>

          <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
            <TypeAnimation
              sequence={[
                'Senior Full Stack Software Engineer',
                2000,
                '.NET Core Specialist',
                2000,
                'Cloud Solutions Architect',
                2000,
                'Angular & React Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            🚀 Transforming complex challenges into elegant digital solutions. 
            Passionate about crafting robust web applications that push technological boundaries.
          </p>

          <div className="flex space-x-6 items-center">
            <button
              onClick={scrollToProjects}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center"
            >
              View Portfolio
              <HiArrowNarrowRight className="ml-2" />
            </button>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/muhammad-sumair-khan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/sumairkhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-1/3 flex justify-center">
          <div 
            className="relative cursor-pointer group"
            onClick={toggleImageZoom}
          >
            <div className="absolute -inset-2 bg-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative z-10 rounded-full w-80 h-80 object-cover border-4 border-cyan-500 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isImageZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8"
          onClick={toggleImageZoom}
        >
          <div className="relative max-w-4xl max-h-screen">
            <button 
              onClick={toggleImageZoom}
              className="absolute -top-10 right-0 text-white text-4xl hover:text-cyan-500"
            >
              <FaTimes />
            </button>
            <img 
              src={profileImg} 
              alt="Zoomed Profile" 
              className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
