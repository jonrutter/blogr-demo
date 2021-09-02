import React from 'react';

import Button from 'components/buttons/Button';

const WhiteButton = ({ children }) => {
  return (
    <Button type="bg-white text-brand border border-white hover:bg-brand-hover hover:text-white hover:border-brand-hover">
      {children}
    </Button>
  );
};

export default WhiteButton;
