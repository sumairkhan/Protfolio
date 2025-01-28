import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = {
  'project1': {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced features.',
    fullDescription: `
      This project is a full-stack e-commerce platform developed to provide a seamless online shopping experience. 
      Key features include user authentication, product browsing, cart management, and secure payment integration.
    `,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    images: [
      '/path/to/project1-screenshot1.jpg',
      '/path/to/project1-screenshot2.jpg',
      '/path/to/project1-screenshot3.jpg'
    ],
    githubLink: 'https://github.com/yourusername/ecommerce-project',
    liveLink: 'https://your-ecommerce-site.com'
  },
  'project2': {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics and management tool.',
    fullDescription: `
      A powerful dashboard that provides comprehensive analytics and management tools 
      for social media accounts. Features include real-time data tracking, engagement metrics, 
      and content scheduling.
    `,
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Chart.js'],
    images: [
      '/path/to/project2-screenshot1.jpg',
      '/path/to/project2-screenshot2.jpg',
      '/path/to/project2-screenshot3.jpg'
    ],
    githubLink: 'https://github.com/yourusername/social-media-dashboard',
    liveLink: 'https://your-dashboard-site.com'
  }
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
          
          <p className="text-gray-300 mb-8">{project.fullDescription}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Screenshots</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/projects" 
          className="text-white bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
