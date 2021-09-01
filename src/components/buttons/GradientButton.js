import React from 'react';

import Button from 'components/buttons/Button';

const GradientButton = ({ children }) => {
  return (
    <Button type="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8">
      {children}
    </Button>
  );
};

export default GradientButton;
