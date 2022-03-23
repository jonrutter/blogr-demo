import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main"
      className="bg-white py-2 px-4 fixed top-0 left-0 right-0 text-lg transition-all transform -translate-y-full focus:translate-y-0"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;
