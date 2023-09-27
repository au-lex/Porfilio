import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ className }) => (
  <ul className={className}>
    {['Home', 'About', 'Project', 'Contact'].map((link, index) => (
      <li key={index} className='my-2 capitalize'>
        <Link 
          to={link === 'Home' ? '/' : `/${link}`} 
          className="hover:text-blue-600 text-[1.2rem] transition-colors duration-300"
        >
          {link}
        </Link>
      </li>
    ))}
  </ul>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-gray-50 shadow-sm px-4 py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center '>
          <div className='logo relative mr-4'>
            <div className='w-4 h-4 rounded-full bg-pink-600 left-3  absolute animate-bounce'></div>
            <h3 className='text-2xl font-bold'>&.au</h3>
          </div>

          {/* Desktop Navigation */}
        
        </div>
        <nav className='hidden md:flex lg:flex'>
            <NavLinks className="flex space-x-20 " />
          </nav>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='red' viewBox='0 0 24 24' stroke='#03a9f4'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 z-50
         bg-opacity-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' :
          '-translate-y-full'}`}>
          <nav className='bg-white h-[20rem] w-4/4 max-w-sm mx-auto'>
            <button onClick={toggleMenu} className="block text-right px-4 py-3 text-[2.5rem] font-bold text-blue-500
             focus:outline-none" aria-label="Close menu">
              &times;
            </button>
            <NavLinks className="flex flex-col space-y-4 p-4 text-slate-800 font-semibold" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
