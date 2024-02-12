import React from 'react';
import FacebookImage from '../images/facebook.png';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <a href="https://www.facebook.com/armanbuildersandrenovators" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <img className="w-8 h-8 fill-current" src={FacebookImage} alt="Facebook" />
                </a>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Arman Builders & Renovators. 2024.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
