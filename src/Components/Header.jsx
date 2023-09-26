import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-gray-20 shadow-sm'>
      <div className='lg:flex xl:block md:block justify-between items-center px-4 py-6 mb-[4rem]'>
        <section className='flex justify-between lg:px-[3rem]'>

    
        <div className='logo relative'>
          <div className='w-[1rem] h-[1rem] rounded-full bg-pink-600 absolute left-6 top-[1rem] dot animate-bounce'></div>
          <h3 className='logo text-[2.4rem]'>&.au</h3>
        </div>


{/* Desktop Navigation */}
<nav className='hidden lg:block xl:block md:block'>
          <ul className='navLinks flex space-x-20 capitalize font-meduim leading-[4rem]'>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Project'>project</Link>
            </li>
            <li>
              <Link to='/Contact'>contact us</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}

        <div
          className='lg:hidden xl:hidden md:hidden cursor-pointer'
          onClick={toggleMenu}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-12 w-12'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </div>
        </section>

        <div className={`lg:hidden xl:hidden md:hidden ${isMenuOpen ? 'navLinks-shown' : 'navLinks-hidden'}`}>
        <div className='lg:hidden xl:hidden md:hidden'>
          <nav className='bg-slate-800 rounded-lg h-[14rem] w-full absolute '>
            <ul className='navLinks pt-10 pl-4'>
              <li className='text-[1.2rem] text-slate-200 capitalize'>
                <Link to='/'>home</Link>
              </li>
              <li className='text-[1.2rem] my-2 text-slate-200 capitalize'>
                <Link to='/About'>About</Link>
              </li>
              <li className='text-[1.2rem] my-2 text-slate-200 capitalize'>
                <Link to='/Project'>project</Link>
              </li>
              <li className='text-[1.2rem] my-2 text-slate-200 capitalize'>
                <Link to='/Contact'>contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      
      

        
      </div>

    
    
    </header>
  );
};

export default Header;
