import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../images/logo.svg';

function Header() {
  const handleScrollToContact = () => {
    const newsletterSection = document.getElementById('Newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-30 backdrop-blur h-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Site branding */}
          <div>
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="text-black mr-4">
                <FontAwesomeIcon icon={faPhone} className="mr-1" style={{ color: '#8B4513' }} />
                {' '}
                <span>(</span>
                <span className="font-bold">705</span>
                <span>)-</span>
                <span className="font-bold">816</span>
                <span>-</span>
                <span className="font-bold">5675</span>
              </li>
              <li className="text-black mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" style={{ color: '#8B4513' }} />
                {' '}
                <button className="font-bold" onClick={handleScrollToContact}>armanrenovationgta@gmail.com</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
