import React from 'react';
import LogoImage2 from '../images/logo2.png';

function SupportOrg() {
  return (
    <section>
       
      <div className="mx-auto px-4 sm:px-6 bg-slate-100 ">
        <div className="max-w-4xl  mx-auto py-12 md:py-20">

          {/* Section header */}

      <p className='h4 text-center '>Supported by</p>
          {/* Items */}
          <div className="pt-20 max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none " data-aos-id-blocks>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img src={LogoImage2} alt="Logo2" />
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center pt-1 mx-10" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img src={LogoImage2} alt="Logo2" />
            </div>
                     

          </div>

        </div>
      </div>
    </section>
  );
}

export default SupportOrg;
