import React from 'react';
import FeatureImage1 from '../images/features-03-image-01.png';
import FeatureImage2 from '../images/features-03-image-02.png';
import FeatureImage3 from '../images/features-03-image-03.png';

function FeatureItem({ imageSrc, heading, description, listItems, index }) {
  // Determine if the index is even or odd to alternate the layout
  const isEven = index % 2 === 0;

  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Content */}
      <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 ${isEven ? 'md:order-2' : ''}`} data-aos="fade-right">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">Call to us to get started</div>
          <h3 className="h3 mb-3">{heading}</h3>
          <ul className="text-lg text-gray-400 -mb-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Image */}
      <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 ${isEven ? '' : 'md:order-1'}`} data-aos="fade-up">
        <img className="max-w-full mx-auto md:max-w-none h-auto" src={imageSrc} width="460" height="405" alt={heading} />
      </div>
    </div>
  );
}

function FeaturesZigzag() {
  const features = [
    {
      imageSrc: FeatureImage1,
      heading: 'Kitchen Renovations',
      listItems: ['Basement Renovations, Specialized Services', 'Bathroom Renovations', 'Home Additions/Extensions']
    },
    {
      imageSrc: FeatureImage2,
      heading: 'Interior/Exterior Painting',
      listItems: ['Flooring Installation', 'Roofing and Siding', 'Window and Door Replacements']
    },
    {
      imageSrc: FeatureImage3,
      heading: 'Deck/Patio Construction',
      listItems: ['Whole House Renovations']
    }
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm py-1 px-3 m-2 text-purple-600 bg-purple-200 rounded-full mb-4">We cater to all of GTA</div>
            <h1 className="h2 mb-4">Call to us to get started</h1>
            <p className="text-xl text-gray-400">We provide a wide array of offerings and services tailored to meet various client needs.</p>
          </div>
          {/* Items */}
          <div className="grid mt-5 md:mt-20 gap-20 md:gap-40">
            {features.map((feature, index) => (
              <FeatureItem key={index} index={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
