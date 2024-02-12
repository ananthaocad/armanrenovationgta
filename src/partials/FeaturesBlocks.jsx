import React from 'react';
import FormImage from '../images/form.svg';
import QuoteImage from '../images/quote.svg';
import ConstructImage from '../images/construct.svg';

function FeatureItem({ imageSrc, altText, heading, description, delay }) {
  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={delay} data-aos-anchor="[data-aos-id-blocks]">
      <img src={imageSrc} alt={altText} style={{ width: '50px', height: '50px', marginBottom: '32px' }} />
      <h4 className="h4 mb-2 text-center">{heading}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  );
}

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <FeatureItem
              imageSrc={FormImage}
              altText="Form Image"
              heading="Submit your requirements"
              description="We will call you back for more details."
            />

            {/* 2nd item */}
            <FeatureItem
              imageSrc={QuoteImage}
              altText="Quote Image"
              heading="Get a quote"
              description="We will get back with pricing and options."
            />

            {/* 3rd item */}
            <FeatureItem
              imageSrc={ConstructImage}
              altText="Construct Image"
              heading="Let's get your work started"
              description="You can trust our agents to give you quality work."
              delay="200"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
