import React from 'react';
import { Link } from 'gatsby';

// data
import { links } from 'data/links';

// logo
import Logo from 'images/logo.svg';

const Footer = () => {
  return (
    <div className="bg-footer-bg py-16 px-6 rounded-tr-xl md:py-20">
      <footer className="container mx-auto text-center block grid grid-cols-1 justify-items-center md:grid-cols-4 md:justify-items-start md:text-left">
        <img src={Logo} alt="Blogr" className="mb-16" />
        {links.map((link, index) => {
          const { title, links } = link;
          return (
            <ul key={index} className="mb-7">
              <li className="text-white mb-6 font-semibold">{title}</li>
              {links.map((link, index) => {
                const { title, href } = link;
                return (
                  <li key={index} className="mb-3">
                    <Link
                      to={href}
                      className="text-footer-text hover:underline"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;
