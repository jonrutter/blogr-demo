import React from 'react';

// components
import Nav from 'components/layout/Nav';
import WhiteButton from 'components/buttons/WhiteButton';
import TransparentButton from 'components/buttons/TransparentButton';

// background

const HeroSection = () => {
  return (
    <div className="text-center bg-hero-pattern bg-no-repeat bg-center pt-12 px-6 pb-36 rounded-bl-xl md:pb-40 md:pt-16 md:px-8">
      <header>
        <Nav />
        <h1 className="text-white text-4xl md:text-6xl mb-4">
          A modern publishing platform
        </h1>
        <p className="text-white opacity-70 mb-10">
          Grow your audience and build your online brand
        </p>
        <div className="space-x-2">
          <WhiteButton>Start for Free</WhiteButton>
          <TransparentButton>Learn More</TransparentButton>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
