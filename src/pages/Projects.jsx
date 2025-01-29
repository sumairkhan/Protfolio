import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 'h-prime-2',
    title: 'H-Prime2 (ERP)',
    description: 'ERP system tailored for hospital clients with enhanced operational features.',
    technologies: ['ASP.NET Web Forms', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'Azure Key Vault', 'Azure Logic App'],
    features: [
      'Designed and developed new features for hospital ERP system',
      'Troubleshot and resolved production environment issues'
    ],
    image: '/H-Prime%202/dashboard.png',
    link: '/projects/h-prime-2'
  },

  {
    id: 'h-prime-3',
    title: 'H-Prime 3',
    description: 'Advanced Hospital Management System leveraging cutting-edge technologies',
    technologies: ['.NET Core', 'Angular', 'Azure Cloud Services', 'Microservices Architecture', 'SignalR', 'Entity Framework Core'],
    features: [
      'Modernized architecture using .NET Core and Angular',
      'Implemented scalable microservices design',
      'Enhanced real-time communication with SignalR',
      'Advanced cloud-native application with Azure integration'
    ],
    image: '/H-Prime%203/dashboard.png',
    link: '/projects/h-prime-3'
  },
  {
    id: 'dotdocx',
    title: 'DOTDOCX',
    description: 'Secure medical file sharing web application for hospital networks.',
    technologies: ['ASP.NET Web Forms', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'Azure Key Vault', 'Azure Logic Apps'],
    features: [
      'Developed comprehensive web application for medical file sharing',
      'Delivered production support and implemented new features'
    ],
    image: '/docs/Image 1.webp',
    link: '/projects/dotdocx'
  },
  {
    id: 'cda-portal',
    title: 'CDA Portal',
    description: 'Comprehensive management system with ticket tracking and inventory modules.',
    technologies: ['.NET Core MVC', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'RDLC', 'IIS'],
    features: [
      'Ticket Management Module: Create, assign, and track support tickets with real-time updates',
      'Inventory Module: Asset tracking and stock level management',
      'Detailed Reporting: Comprehensive insights on ticket resolution and inventory status'
    ],
    image: '/path/to/cda-portal-image.jpg',
    link: '/projects/cda-portal'
  },

  {
    id: 'meta-curricular',
    title: 'Meta-Curricular Activities Reporting System',
    description: 'Digital system to streamline student life department operations at Habib University.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Angular', 'Material UI', 'Typescript', '.NET Core API', 'SQL Server 2017', 'Crystal Reports', 'Azure DevOps', 'Blob Storage', 'Azure Active Directory', 'Email Service'],
    features: [
      'Led development of digital system for student life department',
      'Managed entire software lifecycle',
      'Provided comprehensive support and training',
      'Enhanced data-driven decision making'
    ],
    image: '/path/to/meta-curricular-image.jpg',
    link: '/projects/meta-curricular'
  },
  {
    id: 'e-application',
    title: 'E-Application',
    description: 'Web application supporting the university admission process.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'ASP.NET MVC', 'Azure DevOps', 'Blob Storage', 'Azure Active Directory', 'Email Service', 'HABALL Payment Integration'],
    features: [
      'Collaborated with Admission department',
      'Developed and maintained web application',
      'Delivered high-quality, well-documented code'
    ],
    image: '/path/to/e-application-image.jpg',
    link: '/projects/e-application'
  },
  {
    id: 'scholarship-financial-aid',
    title: 'Scholarship & Financial Aid',
    description: 'Digital system for student finance department\'s scholarship and financial aid processes.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'ASP.NET 5', 'MVVM', 'Knockout.js', 'Azure DevOps', 'Blob Storage', 'Azure Active Directory', 'Email Service'],
    features: [
      'Developed system to digitize scholarship processes',
      'Worked on entire software lifecycle',
      'Ensured user-friendly experience'
    ],
    image: '/path/to/scholarship-image.jpg',
    link: '/projects/scholarship-financial-aid'
  },
  {
    id: 'alumni-management',
    title: 'Alumni Management Portal',
    description: 'Digitalized process management for student alumni department.',
    technologies: ['ASP.NET 5', 'Azure DevOps', 'Blob Storage', 'Azure Active Directory', 'Email Service', 'Etisalat API Payment Integration'],
    features: [
      'Developed Alumni Management System (AMS)',
      'Analyzed business requirements',
      'Delivered web application lifecycle from concept to support'
    ],
    image: '/path/to/alumni-management-image.jpg',
    link: '/projects/alumni-management'
  },
  {
    id: 'tasblock',
    title: 'TasBlock',
    description: 'Web-based ERP system for sales management and stock control.',
    technologies: ['ASP.NET MVC 5', 'SQL Server', 'RDLC Reports'],
    features: [
      'Developed ERP system for sales management',
      'Enhanced business processes through automation',
      'Deployed in secure internal data center'
    ],
    image: '/path/to/tasblock-image.jpg',
    link: '/projects/tasblock'
  },
  {
    id: 'davis-erp',
    title: 'Davis ERP',
    description: 'ERP system with advanced inventory and production control features.',
    technologies: ['ASP.NET MVC 5', 'SQL Server', 'RDLC Reports', 'MQTT Protocol'],
    features: [
      'Developed ERP functionalities for inventory and sales',
      'Integrated MQTT protocol for machine production control',
      'Deployed in secure internal data center'
    ],
    image: '/path/to/davis-erp-image.jpg',
    link: '/projects/davis-erp'
  },
  {
    id: 'meta-curricular',
    title: 'Meta-Curricular Activities Reporting System (MCT)',
    description: 'Comprehensive platform for tracking student extracurricular achievements',
    technologies: ['.NET Core', 'Angular', 'Azure', 'Azure Blob Storage', 'Azure Key Vault'],
    image: '/MCT/admin-protal/dashboard.png',
    category: 'Web Development',
    tags: ['Education', 'Enterprise', 'Management System'],
    link: '/projects/meta-curricular'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          My Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={project.id === 'h-prime-2' ? "w-full h-64 object-cover hover:scale-110 transition-transform duration-300" : "w-full h-48 object-cover"}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link 
                  to={project.link} 
                  className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
