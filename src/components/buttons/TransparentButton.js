import React from 'react';

import Button from 'components/buttons/Button';

const TransparentButton = ({ children }) => {
  return (
    <Button type="bg-transparent text-white border border-white hover:bg-white hover:text-brand">
      {children}
    </Button>
  );
};

export default TransparentButton;
