import React from 'react';

const ScholarshipFinancialAid = () => {
  const images = [
    { src: '/scholarship/Index.png', title: 'Dashboard' },
    { src: '/scholarship/Screen-1.png', title: 'Overview' },
    { src: '/scholarship/Section-1.png', title: 'Main Section' },
    { src: '/scholarship/Section-A.png', title: 'Application Management' },
    { src: '/scholarship/Section-B.png', title: 'Scholarship Categories' },
    { src: '/scholarship/Section-C.png', title: 'Application Process' },
    { src: '/scholarship/Section-D.png', title: 'Review Process' },
    { src: '/scholarship/Section-E.png', title: 'Documentation' },
    { src: '/scholarship/Section-F.png', title: 'Status Tracking' },
    { src: '/scholarship/Section-G.png', title: 'Financial Details' },
    { src: '/scholarship/Section-H.png', title: 'Reports' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Scholarship & Financial Aid</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img 
              src={image.src}
              alt={image.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipFinancialAid;
