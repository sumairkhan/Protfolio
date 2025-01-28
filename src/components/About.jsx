import React, { useState } from 'react';

const About = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const skills = [
    { category: 'Languages', items: ['C#', 'ASP.NET MVC', '.NET Core', 'Web Form', 'Web API', 'Node JS', 'JavaScript', 'React'] },
    { category: 'Frameworks', items: ['Angular', 'Material UI', 'Tailwind CSS'] },
    { category: 'Databases', items: ['SQL Server', 'MySQL', 'MongoDB'] },
    { category: 'Cloud Services', items: ['AWS', 'Azure', 'Heroku'] },
    { category: 'Version Control', items: ['Microsoft DevOps', 'Bitbucket', 'GitHub'] },
    { category: 'Methodologies', items: ['Agile Development', 'Scrum', 'DevOps'] }
  ];

  const achievements = [
    'Migrated 3+ enterprise applications to cloud platforms',
    'Led development teams delivering scalable web solutions',
    'Implemented CI/CD pipelines reducing deployment time by 40%',
    'Developed microservices architecture for improved system performance'
  ];

  const certificates = [
    'Net on AWS',
    'AWS Technical Essentials',
    'Architecting Serverless Applications',
    'ChatGPT Prompt Engineering for Developers'
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement actual newsletter subscription logic
    if (email) {
      setSubscribed(true);
      // You might want to add actual email submission logic here
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

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
              With over 5 years of experience in software engineering, I've transformed complex business challenges 
              into elegant, scalable digital solutions. My passion lies in bridging technology and user needs, 
              creating impactful software that drives organizational success.
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

        {/* Newsletter Subscription Section */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Tech Insights Delivered to Your Inbox
          </h3>
          <p className="text-gray-400 text-center mb-6">
            Stay ahead of the curve with my monthly tech newsletter. Get the latest insights, 
            coding tips, and industry trends directly in your inbox.
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-cyan-600 text-white rounded-r-md hover:bg-cyan-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-green-400">
              🎉 Thanks for subscribing! You'll receive tech updates soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
