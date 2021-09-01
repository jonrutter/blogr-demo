import React, { useState } from 'react';
import { Link } from 'gatsby';

// logo
import Logo from 'images/logo.svg';

// components
import DropdownLink from 'components/DropdownLink';
import WhiteButton from 'components/buttons/WhiteButton';
import NavDropdown from 'components/layout/NavDropdown';

// icons
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

// data
import { links } from 'data/links';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };
  return (
    <div className="container mx-auto mb-28 md:mb-32 relative">
      <nav>
        {/* crossbar */}
        <div className="flex justify-between items-center">
          {/* right side */}
          <div className="flex items-center">
            <Link to="/" className="mr-16">
              <img src={Logo} alt="Blogr" />
            </Link>
            <div className="hidden space-x-4 md:flex">
              {links.map((link, index) => {
                const { title, links } = link;
                return <DropdownLink key={index} name={title} array={links} />;
              })}
            </div>
          </div>
          {/* left side */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link to="/" className="text-white opacity-70">
              Login
            </Link>
            <WhiteButton>Sign Up</WhiteButton>
          </div>
          {/* menu button */}
          <button
            className="text-4xl text-white md:hidden"
            onClick={handleDropdown}
          >
            {dropdownOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
        {dropdownOpen && <NavDropdown setDropdownOpen={setDropdownOpen} />}
      </nav>
    </div>
  );
};

export default Nav;
