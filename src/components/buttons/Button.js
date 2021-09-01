import React from 'react';

const Button = ({ type, children }) => {
  return (
    <button className={`py-3 px-4 rounded-full font-ubuntu font-bold  ${type}`}>
      {children}
    </button>
  );
};

export default Button;
