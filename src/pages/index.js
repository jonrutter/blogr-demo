import React from 'react';

import { Helmet } from 'react-helmet';

// components
import HeroSection from 'components/layout/HeroSection';
import Footer from 'components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en-us' }}>
        <title>Blogr | Home</title>
        <meta
          name="description"
          content=" A demo landing page for a fictitional blogging platform."
        />
        <meta name="author" content="Jon Rutter" />
      </Helmet>
      <HeroSection />
      <Footer />
    </>
  );
};

export default HomePage;
