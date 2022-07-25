import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';

// components
import GradientButton from 'components/buttons/GradientButton';

// icons
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// data
import { links } from 'data/links';

// hooks
import useOutsideClick from 'hooks/useOutsideClick';

const DropdownBox = ({ array }) => {
  return (
    <div className="bg-gray-200 rounded-md py-6 mb-6 mt-5">
      <ul className="space-y-6">
        {array.map((link, index) => {
          const { title, href } = link;
          return (
            <li className="mb-5" key={index}>
              <Link to={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const DropdownLink = ({ name, array }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button className="flex justify-center" onClick={() => setOpen(!open)}>
        {name}{' '}
        {open ? (
          <BiChevronUp className="text-brand" />
        ) : (
          <BiChevronDown className="text-brand" />
        )}
      </button>
      {open && <DropdownBox array={array} />}
    </div>
  );
};

const NavDropdown = ({ setDropdownOpen }) => {
  const dropdownRef = useRef(null);

  const closeNav = () => {
    setDropdownOpen(false);
  };

  useOutsideClick(dropdownRef, closeNav);

  return (
    <div
      className="bg-white text-dark-blue absolute top-16 inset-x-0 p-6 rounded-md shadow-xl z-20 animate-up"
      ref={dropdownRef}
    >
      <ul className="flex flex-col border-b mb-6">
        {links.map((link, index) => {
          const { title, links } = link;
          return (
            <li key={index} className="mb-5">
              <DropdownLink name={title} array={links} />
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col space-y-6">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <GradientButton to="/">Sign Up</GradientButton>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
