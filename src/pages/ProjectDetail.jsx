import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const projectsData = {
  'dotdocx': {
    title: 'DOTDOCX',
    description: 'Secure Document Management System for Diverse Organizational Needs',
    fullDescription: `
Our document management system was first developed for James Cook University, but has taken on a life of its own as it has evolved to manage libraries of documents for various organisations. The system can operate stand-alone or as an integrated part of our .prime systems.

Key Features:
- Unique Low-Cost Storage Solution
- Efficient Document Management
- Role-Based Access Controls
- Secure Information Distribution

Advanced Security and Management:
- Secure file storage with comprehensive protection
- Automatic virus and integrity scanning during file upload
- Version control for all documents
- Automatic compression and decompression of archived materials

Supported File Types:
- Microsoft Office: 
  • Word: .doc, .docx
  • Excel: .xls, .xlsx
  • PowerPoint: .ppt, .pptx
- Adobe: .pdf
- eLearning Formats:
  • Captivate
  • HTML 5
- Media Files:
  • Images: .jpg, .gif
  • Audio: .mp3, .wav
  • Video: .mpg
- And many more custom file extensions

The system ensures optimized storage and seamless access, allowing users to work with documents effortlessly while maintaining the highest standards of security and efficiency.
    `,
    technologies: ['ASP.NET Web Forms', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'Azure Key Vault', 'Azure Logic Apps'],
    images: [
      '/docs/Image 1.webp',
      '/docs/image2.webp'
    ],
    liveLink: 'https://jamweb.com.au/products/docs',
    githubLink: '#'
  },
  'cda-portal': {
    title: 'CDA Portal',
    description: 'Comprehensive management system with ticket tracking and inventory modules.',
    fullDescription: `
      CDA Portal is an advanced enterprise management system designed to streamline organizational workflows through sophisticated ticket management and inventory tracking.

      Key Features:
      - Ticket Management Module: Create, assign, and track support tickets with real-time updates
      - Inventory Module: Comprehensive asset tracking and stock level management
      - Detailed Reporting: Generate insights on ticket resolution times and inventory status
      - Efficient workflow optimization
      - Real-time status tracking and notifications

      Technology Stack:
      - .NET Core MVC for robust backend architecture
      - HTML, CSS, and Bootstrap for responsive design
      - jQuery for dynamic user interactions
      - SQL Server for reliable data storage
      - RDLC for advanced reporting
      - IIS for web hosting
    `,
    technologies: ['.NET Core MVC', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'RDLC', 'IIS'],
    images: [
      '/path/to/cda-portal-screenshot1.jpg',
      '/path/to/cda-portal-screenshot2.jpg',
      '/path/to/cda-portal-screenshot3.jpg'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  'h-prime-2': {
    name: 'H-Prime 2',
    shortDescription: 'Enterprise Hospital Management System for Streamlined Healthcare Operations',
    fullDescription: `H-Prime 2 represents a pivotal evolution in hospital management systems, designed to address the complex operational challenges faced by modern healthcare institutions. 
    
    Key Highlights:
    - Comprehensive Hospital Management: Integrated solution covering multiple operational domains
    - Robust Web Forms Architecture: Leveraging ASP.NET Web Forms for stable and scalable application design
    - Advanced Security: Implemented with Azure Key Vault and Azure Logic Apps for enhanced data protection
    
    Core Functionalities:
    - Dynamic Forms Management: Customizable forms for various hospital departments
    - Comprehensive User Management: Role-based access control and user lifecycle management
    - Reporting and Analytics: Detailed insights into hospital operations and performance metrics
    
    Technical Architecture:
    - Backend: ASP.NET Web Forms providing a reliable and feature-rich platform
    - Frontend: Bootstrap and jQuery for responsive and interactive user interfaces
    - Database: SQL Server with optimized data storage and retrieval mechanisms
    
    Unique Value Proposition:
    H-Prime 2 bridges the gap between traditional hospital management systems and modern technological requirements, 
    providing healthcare administrators with a powerful, flexible, and secure platform to manage complex institutional workflows.`,
    technologies: ['ASP.NET Web Forms', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server', 'Azure Key Vault', 'Azure Logic Apps'],
    images: [
      '/H-Prime%202/dashboard.png',
      '/H-Prime%202/Create-Requirment-Module.png',
      '/H-Prime%202/Manage-User-Module.png'
    ],
    websiteUrl: 'https://www.hprime.com.au/',
    githubUrl: null,
    challenges: [
      'Developing a highly customizable system for diverse hospital needs',
      'Implementing secure and compliant medical documentation workflows',
      'Creating an intuitive interface for multiple user roles'
    ],
    outcomes: [
      'Streamlined hospital administrative processes',
      'Enhanced data security and compliance',
      'Improved user experience for hospital staff'
    ]
  },
  'h-prime-3': {
    name: 'H-Prime 3',
    shortDescription: 'Advanced Hospital Management System leveraging cutting-edge technologies',
    fullDescription: `H-Prime 3 represents the next generation of hospital management systems, built on a modern, scalable, and cloud-native architecture.

    Key Technological Advancements:
    - Microservices Architecture: Modular, scalable system design
    - .NET Core and Angular: Cutting-edge frontend and backend technologies
    - Azure Cloud Services: Enhanced scalability, security, and performance

    Core Innovations:
    - Real-time Communication: Implemented using SignalR for instant updates
    - Advanced Microservices: Improved system flexibility and maintainability
    - Cloud-Native Design: Leveraging Azure's robust cloud infrastructure

    Technical Highlights:
    - Backend: .NET Core with Entity Framework Core
    - Frontend: Angular with responsive design
    - Cloud Integration: Comprehensive Azure cloud services
    - Performance: Optimized for high-scalability and low-latency operations

    Strategic Value:
    H-Prime 3 transforms hospital management by providing a cutting-edge, 
    flexible platform that adapts to the evolving needs of modern healthcare institutions.`,
    technologies: ['.NET Core', 'Angular', 'Azure Cloud Services', 'Microservices Architecture', 'SignalR', 'Entity Framework Core'],
    images: [
      '/H-Prime%203/dashboard.png',
      '/H-Prime%203/dashboard-with-event.png',
      '/H-Prime%203/create-assesssment.png',
      '/H-Prime%203/user-detail.png'
    ],
    websiteUrl: 'https://www.hprime.com.au/',
    githubUrl: null,
    challenges: [
      'Designing a scalable microservices architecture',
      'Implementing real-time communication across distributed systems',
      'Ensuring seamless cloud integration and performance'
    ],
    outcomes: [
      'Achieved highly scalable and maintainable system architecture',
      'Improved real-time data synchronization and user experience',
      'Enabled advanced cloud-native capabilities for healthcare management'
    ]
  },
  'meta-curricular': {
    name: 'Meta-Curricular Activities Reporting System (MCT)',
    shortDescription: 'Comprehensive platform for tracking and verifying student extracurricular achievements',
    fullDescription: `The Meta-Curricular Activities Reporting System (MCT) is an advanced, cloud-native application developed using cutting-edge technologies to streamline student extracurricular activity tracking.

Technical Architecture:
- Backend: .NET Core microservices architecture
- Frontend: Modern Single Page Application (SPA) built with Angular
- Cloud Infrastructure: Fully leveraged Azure ecosystem

Key Architectural Highlights:
- Microservices-based backend for scalability and modularity
- Angular-powered responsive and interactive user interface
- Comprehensive cloud security with Azure Key Vault
- Efficient file storage and management using Azure Blob Storage

Core Features:
- Dual-panel system (Admin and Student) with role-based access control
- Seamless activity submission and approval workflow
- Secure, cloud-native document upload and verification
- Real-time notifications and activity tracking

Security and Compliance:
- Advanced authentication via Active Directory
- Data encryption at rest and in transit
- Granular access management
- Comprehensive audit logging

Performance Optimization:
- Scalable cloud-native design
- Efficient data processing with .NET Core
- Responsive and dynamic user interfaces with Angular
- Optimized cloud resource utilization`,
    technologies: [
      '.NET Core',
      'Angular',
      'Azure Cloud Services',
      'Azure Blob Storage',
      'Azure Key Vault',
      'Role-Based Access Control',
      'Active Directory Integration'
    ],
    images: [
      '/MCT/admin-protal/dashboard.png',
      '/MCT/Student-Portal/all-activity-dashboard.png',
      '/MCT/admin-protal/activity form.png',
      '/MCT/Student-Portal/activity-form.png',
      '/MCT/admin-protal/student assing access.png',
      '/MCT/Student-Portal/personal-profile-section.png'
    ],
    websiteUrl: 'https://mct.habib.edu.pk/',
    githubUrl: null,
    challenges: [
      'Designing a scalable microservices architecture with .NET Core',
      'Implementing complex role-based access control',
      'Integrating Azure cloud services seamlessly',
      'Creating a responsive Angular-based single-page application',
      'Ensuring secure file uploads and storage with Azure Blob',
      'Managing sensitive configuration with Azure Key Vault'
    ],
    outcomes: [
      'Successfully migrated from monolithic to microservices architecture',
      'Achieved high scalability and performance with .NET Core',
      'Implemented robust cloud-native security mechanisms',
      'Created a responsive and intuitive user interface with Angular',
      'Optimized cloud resource utilization',
      'Enhanced data management and access control'
    ],
    keyFeatures: [
      {
        title: 'Dual-Panel System',
        description: 'Comprehensive interface with distinct functionalities for administrators and students. Admin panel provides full system management, while student portal offers intuitive activity submission and tracking.'
      },
      {
        title: 'Activity Verification Workflow',
        description: 'Robust multi-stage approval process involving supervisors and student life office. Includes detailed status tracking, comment mechanisms, and automated notifications for each stage of activity review.'
      },
      {
        title: 'Secure Cloud-Native Document Management',
        description: 'Advanced file upload and storage system using Azure Blob Storage. Supports multiple file formats, implements strict security protocols, and provides efficient document verification and archival capabilities.'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular permission management with Azure Active Directory integration. Ensures secure access, differentiates user roles, and provides comprehensive audit logging for all system interactions.'
      }
    ]
  },
  'scholarship-financial-aid': {
    title: 'Scholarship & Financial Aid Management System',
    description: 'Enterprise-grade scholarship and financial aid management system built with ASP.NET MVC 5.',
    fullDescription: `
The Scholarship & Financial Aid Management System is a robust enterprise application developed using ASP.NET MVC 5 architecture. This system streamlines the entire scholarship and financial aid process, from application submission to final disbursement.

Key Features:
- Comprehensive Application Management
  • Online application submission with document upload
  • Real-time application status tracking
  • Automated email notifications
  • Dynamic form generation based on scholarship type

- Administrative Dashboard
  • Role-based access control (Admin, Reviewer, Student)
  • Application review workflow
  • Batch processing capabilities
  • Advanced reporting and analytics

Technical Implementation:
- Backend Architecture:
  • ASP.NET MVC 5 with C# for robust application structure
  • Entity Framework for data access and ORM
  • LINQ for efficient data querying
  • SQL Server for reliable data storage

- Frontend Development:
  • jQuery for dynamic client-side interactions
  • Bootstrap for responsive design
  • AJAX for seamless data updates
  • JavaScript for form validation

- DevOps & Deployment:
  • Azure DevOps for CI/CD pipeline
  • Automated testing and deployment
  • Performance monitoring and logging
  • Database versioning and migrations

The system features a sophisticated database design with multiple interconnected entities including Students, Scholarships, Applications, and Financial Records, all managed through Entity Framework Code First approach.
    `,
    technologies: ['ASP.NET MVC 5', 'jQuery', 'Bootstrap', 'SQL Server', 'Entity Framework', 'Azure DevOps', 'LINQ', 'C#'],
    images: [
      '/scholarship/Screen-1.png',
      '/scholarship/Section-1.png',
      '/scholarship/Section-A.png',
      '/scholarship/Section-B.png',
      '/scholarship/Section-C.png',
      '/scholarship/Section-D.png',
      '/scholarship/Section-E.png',
      '/scholarship/Section-F.png',
      '/scholarship/Section-G.png',
      '/scholarship/Section-H.png'
    ],
    liveLink: '/scholarships',
    githubLink: '#'
  },
  'dexa-xplore': {
    title: 'DexaXplore - IoT-based ERP System',
    description: 'A customized IoT-based ERP system tailored for electrical manufacturing, integrating real-time data and operational efficiency.',
    fullDescription: `DexaXplore is a comprehensive IoT-based Enterprise Resource Planning (ERP) system designed specifically for electrical manufacturing processes.

Core Modules and Functionalities:
1. Integrated Sales Order Registration
- Electronic order capture with automatic system updates
- Streamlined quoting and proposal generation
- Seamless POS system integration

2. Sample Request Management
- Electronic tracking of customer specifications
- Cost association and detailed reporting
- Progress monitoring

3. Engineering Planning
- Master Bill of Materials (MBOM) management
- Automated Bills of Quantities (BOQs) generation
- Multi-level BOM structure support

4. Job Sheet Creation and Management
- Automatic job sheet generation
- Real-time task and material tracking
- Personnel and work center assignment

5. Label Printing and Factory Certification
- Customized label printing
- Electronic quality control processes
- Regulatory compliance management

6. Purchase Planning and Management
- Automatic purchase requisitions
- Supplier performance tracking
- Digital approval workflows

7. Production Shop Floor Management
- IoT sensor integration
- Real-time machine performance monitoring
- Work-in-progress (WIP) tracking

8. Warehouse Management
- Real-time inventory tracking
- Automated replenishment
- RFID and barcode integration

9. Dynamic Excel Import
- Flexible data entry and manipulation
- Seamless data migration capabilities

Key Benefits:
- Enhanced operational efficiency
- Real-time data integration
- Improved production planning
- Optimized resource utilization
- Comprehensive traceability`,
    technologies: [
      'ASP.NET Core',
      'SQL Server',
      'MQTT Protocol',
      'RDLC Reporting',
      'IoT Integration',
      'Real-time Monitoring',
      'RFID Technology',
      'Excel Integration'
    ],
    images: [
      '/dexa-xplore/dashboard.webp'
    ],
    externalLink: 'https://www.iotsands.com/dexaXplore',
    githubLink: '#',
    challenges: [
      'Integrating IoT sensors across multiple manufacturing processes',
      'Ensuring real-time data synchronization',
      'Creating a flexible and scalable ERP solution'
    ],
    outcomes: [
      'Developed a comprehensive IoT-based ERP system',
      'Improved manufacturing operational efficiency',
      'Enhanced real-time monitoring and decision-making'
    ]
  },
  'davis-erp': {
    title: 'Davis ERP',
    description: 'ERP system with advanced inventory and production control features.',
    fullDescription: `Davis ERP is a comprehensive Enterprise Resource Planning system designed to enhance inventory management and production control for manufacturing businesses.

Key Features:
- Advanced inventory tracking and management
- Production control and optimization
- MQTT protocol integration for machine communication
- Robust reporting capabilities using RDLC

The system provides businesses with:
- Improved operational efficiency
- Real-time production monitoring
- Streamlined inventory processes
- Detailed performance reporting`,
    technologies: ['ASP.NET MVC 5', 'SQL Server', 'RDLC Reports', 'MQTT Protocol'],
    images: [
      '/path/to/davis-erp-image.jpg'
    ],
    liveLink: 'https://www.davis.com.my/',
    githubLink: '#',
    challenges: [
      'Integrating MQTT protocol for machine communication',
      'Developing a flexible inventory management system',
      'Creating comprehensive production tracking features'
    ],
    outcomes: [
      'Developed a robust ERP solution for manufacturing',
      'Implemented real-time machine communication',
      'Enhanced inventory and production tracking capabilities'
    ]
  },
  // Add more projects as needed
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  // Normalize project data
  const projectName = project.name || project.title;
  const projectDescription = project.shortDescription || project.description;
  const projectFullDescription = project.fullDescription || project.description;
  const projectImages = project.images || [];
  const projectTechnologies = project.technologies || [];
  const projectChallenges = project.challenges || [];
  const projectOutcomes = project.outcomes || [];
  const projectKeyFeatures = project.keyFeatures || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white py-8 px-4">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-center space-x-6 py-4">
          <Link 
            to="/projects" 
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/" 
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-16">
        {/* Large Header Image for Dexa Xplore */}
        {projectId === 'dexa-xplore' && projectImages.length > 0 && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={projectImages[0]}
              alt={`${projectName} Project Overview`}
              className="w-full h-[600px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Header Image for Scholarship Project */}
        {projectId === 'scholarship-financial-aid' && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/scholarship/Index.png"
              alt="Scholarship & Financial Aid Management System"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Project Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">{projectName}</h1>
            <p className="text-lg text-gray-300">{projectDescription}</p>
          </div>
          <div className="flex space-x-4">
            {project.externalLink && (
              <a 
                href={project.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                <FaExternalLinkAlt className="mr-2" /> Visit Project
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* All Screenshots for Scholarship & Financial Aid */}
        {projectId === 'scholarship-financial-aid' && projectImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img 
                  src={image} 
                  alt={`${projectName} Project Screenshot ${index + 1}`}
                  className="w-full rounded-lg shadow-lg object-cover h-64"
                />
              </div>
            ))}
          </div>
        )}

        {/* All Screenshots for Meta-Curricular */}
        {projectId === 'meta-curricular' && projectImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <a 
                  href={image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={image} 
                    alt={`${projectName} Project Screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg object-cover h-64"
                  />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* All Screenshots for H-Prime 3 */}
        {projectId === 'h-prime-3' && projectImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <a 
                  href={image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={image} 
                    alt={`${projectName} Project Screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg object-cover h-64"
                  />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* All Screenshots for H-Prime 2 */}
        {projectId === 'h-prime-2' && projectImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <a 
                  href={image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={image} 
                    alt={`${projectName} Project Screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg object-cover h-64"
                  />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Top Two Images */}
        {projectImages.length > 0 && projectId !== 'h-prime-3' && projectId !== 'h-prime-2' && projectId !== 'meta-curricular' && projectId !== 'scholarship-financial-aid' && projectId !== 'dexa-xplore' && (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {projectImages.slice(0, 2).map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <a 
                  href={image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={image} 
                    alt={`${projectName} Project Screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg object-cover h-64"
                  />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Image Slider for Remaining Images */}
        {projectImages.length > 2 && projectId !== 'h-prime-3' && projectId !== 'h-prime-2' && projectId !== 'meta-curricular' && projectId !== 'scholarship-financial-aid' && projectId !== 'dexa-xplore' && (
          <div className="relative mb-12 overflow-hidden">
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-4xl relative">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: `translateX(-${0 * 100}%)`,
                    width: `${(projectImages.length - 2) * 100}%`
                  }}
                >
                  {projectImages.slice(2, 5).map((image, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 px-2 cursor-pointer"
                      style={{ width: '100%' }}
                    >
                      <a 
                        href={image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img 
                          src={image} 
                          alt={`${projectName} Project Screenshot ${index + 3}`}
                          className="w-full rounded-lg shadow-lg object-cover h-96 hover:opacity-80 transition-opacity"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full m-2"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full m-2"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed">{projectFullDescription}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {projectTechnologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        {projectKeyFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectKeyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Outcomes */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectChallenges.length > 0 && (
            <div>
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Project Challenges</h2>
              <ul className="space-y-3 text-gray-300">
                {projectChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-500 mr-3">➤</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {projectOutcomes.length > 0 && (
            <div>
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Project Outcomes</h2>
              <ul className="space-y-3 text-gray-300">
                {projectOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-500 mr-3">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
