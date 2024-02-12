import React from 'react';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import SupportOrg from '../partials/SupportOrg';
import Contact from '../partials/Contact';

function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
        <SupportOrg />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
