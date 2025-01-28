import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 'project1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with advanced features.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/path/to/project1-image.jpg'
  },
  {
    id: 'project2',
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics and management tool.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    image: '/path/to/project2-image.jpg'
  }
  // Add more projects here
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
                className="w-full h-48 object-cover"
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
                <Link 
                  to={`/projects/${project.id}`} 
                  className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
                >
                  View Details
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
