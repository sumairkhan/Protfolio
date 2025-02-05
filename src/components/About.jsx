import React from 'react';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'C#', 'Python', 'SQL', 'VB.NET'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'ASP.NET Core', 'Express.js', 'GraphQL'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
    { category: 'Tools', items: ['Git', 'Jira', 'Postman', 'Figma'] }
  ];

  const achievements = [
    'Architected a microservices-based e-commerce platform increasing scalability by 200%',
    'Developed AI-powered recommendation system improving user engagement by 35%',
    'Implemented zero-downtime deployment strategies using Kubernetes and Docker',
    'Optimized database queries reducing response times by 45% in high-traffic applications'
  ];

  const certificates = [
    'AWS Certified Developer', 
    'Microsoft Certified: Azure Developer', 
    'Advanced React Design Patterns', 
    'Machine Learning Specialization'
  ];

  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
            <p className="text-gray-300 mb-4">
              A passionate software engineer with a proven track record of transforming complex challenges into 
              innovative, scalable solutions. Specializing in full-stack development and cloud-native architectures, 
              I excel at bridging cutting-edge technologies with business objectives. My approach combines 
              technical excellence, strategic thinking, and a user-centric design philosophy.
            </p>
            <h4 className="text-xl font-semibold mb-3">Key Achievements</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Expertise</h3>
            {skills.map((skillGroup, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-medium text-gray-300">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-700 text-xs px-2 py-1 rounded-md hover:bg-cyan-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <h3 className="text-2xl font-semibold mb-4 mt-6">Professional Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certificates.map((cert, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-xs px-2 py-1 rounded-md hover:bg-cyan-600 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
