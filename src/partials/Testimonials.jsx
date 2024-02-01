import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
            <h2 className="h2 opacity-20 mb-10 px-5">See what our customers are saying about us</h2>
            {/*<p className="text-xl text-gray-400"> - Bret Victor</p>*/}
          </div> 

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col  h-full p-6 bg-gray-900" data-aos="fade-up">
              <div>
                <div className="relative  inline-flex flex-col mb-4">
                  <img className="rounded-full text-center" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
               
                        </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow"> Arman guys get the work done on time and in a professional manner. Did our legal basement. Absolutely love the work he has done. Highly recommend them!!</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Tanveer</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Brampton</a>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-900" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
               
                        </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">Arman guys get the work done on time and in a professional manner. Did our legal basement. Absolutely love the work he has done. Highly recommend them!! </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Virender</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Missisauga</a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-900" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
              
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow"> Arman guys get the work done on time and in a professional manner. Did our legal basement. Absolutely love the work he has done. Highly recommend them!! </blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Jonathan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Milton</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
