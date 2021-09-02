import React from 'react';

// image
import Image from 'images/illustration-phones.svg';

const InfrastructureSection = () => {
  return (
    <div className="relative mt-16 pt-40 md:pt-14">
      <img
        src={Image}
        alt="Illustration of mobile phones"
        className="max-w-xs mx-auto w-full absolute top-0 left-0 right-0 md:left-6 md:top-20 md:bottom-20 md:right-auto lg:max-w-md lg:top-0 lg:bottom-0 xl:max-w-lg"
      />
      {/* gradient box */}
      <section className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white rounded-tr-xl rounded-bl-xl overflow-hidden">
        <div className="bg-circles-pattern bg-no-repeat bg-center-half bg-size-125 md:bg-size-80 md:bg-left-10-top-20 lg:bg-size-50 pt-48 pb-28 px-6 md:py-24 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left justify-items-center md:justify-items-start">
            <div className="w-full max-w-sm md:col-start-2 md:max-w-lg">
              <h2 className="text-4xl lg:text-5xl mb-5 font-semibold">
                State of the Art Infrastructure
              </h2>
              <p className="text-sm md:text-base">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureSection;
