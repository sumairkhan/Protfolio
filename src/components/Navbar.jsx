import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, link: 'home', path: '/' },
    { id: 2, link: 'about', path: '/about' },
    { id: 3, link: 'experience', path: '/#experience' },
    { id: 4, link: 'projects', path: '/projects' },
    { id: 5, link: 'courses', path: '/courses', comingSoon: true },
    { id: 6, link: 'contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-4 bg-black text-white z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center h-full">
        <div>
          <Link to="/" className="text-5xl font-signature ml-2">MSK</Link>
        </div>

        <ul className="hidden md:flex space-x-8 justify-center flex-grow">
          {links.map(({ id, link, path, comingSoon }) => (
            <li
              key={id}
              className="relative cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            >
              <Link to={path} className="inline-flex items-center">
                {link}
                {comingSoon && (
                  <span className="ml-2 bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full -top-2 relative">
                    Soon
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform"
          >
            Get Free Consultation
          </a>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="fixed inset-0 bg-gradient-to-b from-black to-gray-800 z-40 flex flex-col justify-center items-center">
            <ul className="space-y-8 text-center mb-8">
              {links.map(({ id, link, path, comingSoon }) => (
                <li
                  key={id}
                  className="text-4xl relative"
                >
                  <Link 
                    to={path} 
                    onClick={() => setNav(!nav)}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center justify-center"
                  >
                    {link}
                    {comingSoon && (
                      <span className="ml-2 bg-cyan-500 text-white text-base px-2 py-0.5 rounded-full relative">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href="#contact"
              onClick={() => setNav(!nav)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md text-2xl hover:scale-105 transition-transform"
            >
              Get Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
