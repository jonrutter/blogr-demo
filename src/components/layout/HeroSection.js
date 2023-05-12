import React from 'react';

// components
import Nav from 'components/layout/Nav';
import WhiteButton from 'components/buttons/WhiteButton';
import TransparentButton from 'components/buttons/TransparentButton';
import SkipToContent from '../buttons/SkipToContent';

// background

const HeroSection = () => {
  return (
    <div className="text-center bg-hero-pattern bg-no-repeat bg-center pt-12 px-6 pb-36 rounded-bl-xl md:pb-40 md:pt-16 md:px-8">
      <SkipToContent />
      <header>
        <Nav />
        <div className="w-full mx-auto md:container" id="main">
          <h1 className="text-white text-3xl md:text-6xl mb-4 md:font-semibold">
            A modern publishing platform
          </h1>
          <p className="text-white opacity-70 mb-10">
            Grow your audience and build your online brand
          </p>
          <div className="flex flex-col items-stretch gap-4 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:justify-center">
            <WhiteButton>Start for Free</WhiteButton>
            <TransparentButton>Learn More</TransparentButton>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
