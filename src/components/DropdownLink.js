import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';

// icons
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// hooks
import useOutsideClick from 'hooks/useOutsideClick';

const DropdownLink = ({ name, array }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setOpen(false);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className={`flex items-center text-white font-ubuntu font-bold opacity-70 ${
          open && 'opacity-100 underline'
        } hover:opacity-100 focus:opacity-100 transition-all`}
        onClick={() => setOpen(!open)}
      >
        {name} {open ? <BiChevronUp /> : <BiChevronDown />}
      </button>
      {open && (
        <div className="absolute top-12 bg-white px-6 py-8 rounded w-40 shadow-xl animate-up">
          <ul className="flex flex-col space-y-6 font-ubuntu">
            {array.map((link, index) => {
              const { title, href } = link;
              return (
                <li key={index}>
                  <Link to={href} className="hover:font-bold">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLink;
