import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import ResumeButton from './ResumeButton';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  /** Handle header background color on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isScrolled && 'bg-[#05010D]'} fixed top-0 w-full z-50`}
    >
      <div className="flex items-center justify-between mx-auto space-x-2 py-4 px-4 lg:px-10 2xl:px-24">
        <Link href="/">
          <a className="text-sm md:text-lg text-gray-400 hover:text-white transition duration-300">
            marinladovic.com
          </a>
        </Link>
        <ul className="menu-list hidden md:flex md:space-x-6">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <ResumeButton />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
