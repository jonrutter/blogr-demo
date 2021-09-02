import React from 'react';

// images
import Mobile from 'images/illustration-laptop-mobile.svg';
import Desktop from 'images/illustration-laptop-desktop.svg';

const DetailsSection = () => {
  return (
    <div className="pt-24 md:pt-36 px-6 pb-20 text-body-text text-sm md:text-base text-center md:text-left overflow-hidden">
      {/* grid */}
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
        {/* image */}
        <div className="max-w-xs mx-auto md:max-w-none relative md:-left-8 xl:-left-1/3">
          <img
            src={Mobile}
            alt="Illustration of the editor"
            className="block md:hidden"
          />
          <img
            src={Desktop}
            alt="Illustration of the editor"
            className="hidden md:block"
          />
        </div>
        {/* text content */}
        <div className="max-w-md xl:max-w-lg mx-auto md:mx-0 xl:justify-self-center">
          <div className="mb-9 md:mb-16">
            <h2 className="text-dark-blue text-xl md:text-3xl mb-5 font-semibold">
              Free, open, simple
            </h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h2 className="text-dark-blue text-xl md:text-3xl mb-5 font-semibold">
              Powerful tooling
            </h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
