import React, { useState } from 'react';
import { FaBriefcase, FaCode, FaCloudUploadAlt, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(1); // Set first experience as default active

  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Software Engineer",
      company: "GCS PTV LTD",
      duration: "Oct 2024 - Present",
      icon: FaBriefcase,
      highlights: [
        "Lead full-stack development of enterprise-level applications",
        "Architect scalable microservices and cloud-native solutions",
        "Drive technical innovation and team performance"
      ]
    },
    {
      id: 2,
      role: "Senior Software Developer",
      company: "Nasfia PTV LTD",
      duration: "Jun 2023 - Oct 2024",
      icon: FaCode,
      highlights: [
        "Developed custom web applications using .NET Core and Angular",
        "Implemented advanced cloud integration strategies",
        "Optimized application performance and user experience"
      ]
    },
    {
      id: 3,
      role: "Senior Officer Software Development",
      company: "Habib University",
      duration: "Aug 2021 - Jun 2023",
      icon: FaCloudUploadAlt,
      highlights: [
        "Migrated core applications to cloud platforms",
        "Integrated secure payment gateways",
        "Restructured applications using modern frameworks"
      ]
    },
    {
      id: 4,
      role: "Software Engineer",
      company: "IOT Software & Solution",
      duration: "Jan 2020 - May 2021",
      icon: FaTrophy,
      highlights: [
        "Developed comprehensive ERP systems",
        "Integrated MQTT protocol for machine production control",
        "Implemented end-to-end software solutions"
      ]
    }
  ];

  return (
    <div name="experience" className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center animate-fade-in-down">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Professional Journey
          </p>
          <p className="py-4 text-gray-400">
            Explore the evolution of my professional expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}
                className={`
                  bg-gray-900 rounded-lg p-6 cursor-pointer 
                  transition-all duration-300 transform 
                  hover:scale-105 
                  ${activeExperience === exp.id ? 'ring-4 ring-cyan-500' : 'hover:shadow-xl'}
                  animate-fade-in-up
                  relative
                  overflow-hidden
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Icon className="text-cyan-400 mr-4 text-3xl" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>

                {(activeExperience === exp.id || activeExperience === 1) && (
                  <ul 
                    className="list-disc list-inside text-gray-300 space-y-2 mt-4 animate-slide-in-right"
                  >
                    {exp.highlights.map((highlight, index) => (
                      <li 
                        key={index}
                        className="text-base"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          opacity: 0,
                          animation: 'slideInRight 0.5s forwards'
                        }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Subtle background effect */}
                <div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;
