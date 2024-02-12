import React, { useState } from 'react';
import HeroImage from '../images/hero-image-01.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleScrollToContact = () => {
    const newsletterSection = document.getElementById('Newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="mx-auto px-0 relative">

        {/* Hero content */}
        <div className="relative md:pb-16">
          {/* Hero image */}
          <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto mb-10 header-image" src={HeroImage} width="100%" alt="Hero" />
            </div>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto px-5 text-center pb-2 md:pb-2">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Section */}
              <div className="md:w-2/3 md:text-left mb-6 md:mb-0">
                <h1 className="h1 mb-4 mt-6" data-aos="fade-up">
                  Crafting your Vision, Perfecting Spaces
                </h1>
              </div>

              {/* Right Section */}
              <div className="md:w-1/3 md:text-left mb-6 md:mb-0">
                <p className="text-xl text-gray-400 mb-4" data-aos="fade-up" data-aos-delay="200">
                  No Sub Contractors – All In House Crew
                </p>
                <ul className="list-disc pl-4">
                  <li>Lowest Prices For Home Renovation!</li>
                  <li>Plywood Interiors</li>
                  <li>Solid Maple Doors & Dovetail Drawers</li>
                  <li>Free Custom Design & Lifetime Warranty</li>
                </ul>
              </div>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pb-1">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-gray-200 hover:bg-gray-300 w-full mb-4 sm:w-auto sm:mb-0" rel="noopener noreferrer" href="/Contact">
                  Submit a query
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
