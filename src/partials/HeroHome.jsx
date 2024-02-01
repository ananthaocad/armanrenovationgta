import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="mx-auto  px-0 relative">

        {/* Hero content */}
        <div className="relative  md:pb-16">
            {/* Hero image */}
            <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto mb-10 header-image" src={HeroImage} width="100%" alt="Hero" />
              {/* <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a> */}
            </div>

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}
          </div>
          {/* Section header */}
          <div className="max-w-3xl mx-auto px-5 text-center pb-2 md:pb-2">
            <h1 className="h1 mb-4 mt-6 " data-aos="fade-up">
            Crafting your Vision, Perfecting Spaces
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
            No Sub Contractors – All In House Crew
            <ul>
              <li>Lowest Prices For Home Renovation!</li>
              <li>Plywood Interiors</li>
              <li>Solid Maple Doors & Dovetail Drawers</li>
              <li>Free Custom Design & Lifetime Warranty</li>
            </ul>
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pb-1">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-gray-200 hover:bg-gray-300 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" rel="noopener noreferrer" href="/pages/Contact.jsx">
                  Submit a query
                </a>
              </div>
            
            </div>
          </div>
          {/*}
          <div className='max-w-3xl mx-auto place-content-center pb-1 md:pb-1 flex items-center'>
            <text className='text-sm pr-1.5 pb-0.5'>Available on </text>            
          </div>*/}
        
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
