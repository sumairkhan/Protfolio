import React, { useRef } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "CDA Portal",
      description: "Comprehensive web application for ticket management and inventory tracking",
      technologies: [".NET Core MVC", "HTML", "CSS", "Bootstrap", "jQuery", "SQL Server", "RDLC", "IIS"],
      githubLink: "#",
      liveLink: "#",
      keyFeatures: [
        "Ticket Management Module with real-time updates and status tracking",
        "Inventory Module for asset tracking and stock level management",
        "Comprehensive reporting system for workflow optimization"
      ]
    },
    {
      id: 2,
      title: "H-Prime2 (ERP)",
      description: "Enterprise Resource Planning system tailored for hospital clients",
      technologies: ["ASP.NET Web Forms", "HTML", "CSS", "Bootstrap", "jQuery", "SQL Server", "Azure Key Vault", "Azure Logic App"],
      githubLink: "#",
      liveLink: "#",
      keyFeatures: [
        "Custom ERP features for hospital operational efficiency",
        "Production environment troubleshooting and system stability maintenance"
      ]
    },
    {
      id: 3,
      title: "H-Prime3 (ERP)",
      description: "Advanced ERP system for dynamic hospital client needs",
      technologies: [".NET Core", "Angular", "Material UI", "SQL Server", "Azure Key Vault", "Azure Logic App"],
      githubLink: "#",
      liveLink: "#",
      keyFeatures: [
        "Design and development of new ERP features",
        "Ongoing debugging and production support"
      ]
    },
    {
      id: 4,
      title: "DOTDOCX",
      description: "Secure medical file sharing web application for hospital networks",
      technologies: ["ASP.NET Web Forms", "HTML", "CSS", "Bootstrap", "jQuery", "SQL Server", "Azure Key Vault", "Azure Logic App"],
      githubLink: "#",
      liveLink: "#",
      keyFeatures: [
        "Secure medical file upload and sharing within hospital network"
      ]
    }
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 relative">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="relative group">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {projects.map(({ id, title, description, technologies, githubLink, liveLink }) => (
              <SwiperSlide key={id}>
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105">
                  <div className="flex items-center justify-center">
                    <img 
                      src={`/project${id}.jpg`} 
                      alt={title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">{title}</h3>
                    <p className="text-gray-400 text-center mb-4">{description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-800 text-white rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Link
                        to={`/projects/${id}`}
                        className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
                      >
                        Details
                      </Link>
                      {githubLink !== "#" && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
                        >
                          <FaGithub className="mr-2" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div 
            className="custom-prev-button absolute top-1/2 left-0 z-10 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="bg-cyan-500/50 hover:bg-cyan-500/75 text-white p-3 rounded-full shadow-lg transform transition-all hover:scale-110"
            >
              <FaChevronLeft size={24} />
            </button>
          </div>
          <div 
            className="custom-next-button absolute top-1/2 right-0 z-10 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="bg-cyan-500/50 hover:bg-cyan-500/75 text-white p-3 rounded-full shadow-lg transform transition-all hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 transition-transform inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
