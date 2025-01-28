import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[name="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10">
        <div className="flex flex-col justify-center h-full max-w-lg">
          {/* Animated Greeting */}
          <div className="flex items-center mb-4">
            <span className="text-2xl sm:text-3xl mr-4 text-gray-300">👋</span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-300">
              Hello, I'm
            </h2>
          </div>

          {/* Name with Dynamic Typing Effect */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">
            Muhammad Sumair Khan
          </h1>

          {/* Dynamic Role Typing */}
          <div className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-4">
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

          {/* Enhanced Professional Summary */}
          <p className="text-gray-400 py-4 max-w-xl text-lg leading-relaxed">
            🚀 Transforming complex challenges into elegant digital solutions, I'm a passionate Senior Full Stack Software Engineer 
            with a knack for crafting robust web applications that push technological boundaries. My expertise spans the entire 
            software development lifecycle, from conceptualization to deployment, with a laser focus on .NET technologies, 
            cloud-native architectures, and cutting-edge frontend frameworks.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-400 font-bold">🏆</span>
            <span className="text-gray-300 text-md">
              Proven track record of leading high-performance teams and delivering scalable solutions across education, 
              healthcare, and enterprise domains.
            </span>
          </div>

          {/* Action and Social Links */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={scrollToProjects}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform"
            >
              View Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <HiArrowNarrowRight size={25} />
              </span>
            </button>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/muhammad-sumair-khan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={30} />
              </a>
              <a 
                href="https://github.com/sumairkhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                title="GitHub Profile"
              >
                <FaGithub size={30} />
              </a>
              <a 
                href="mailto:sumairk801@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                title="Send Email"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <img
              src={profileImg}
              alt="My Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-2 border-cyan-500"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
