import React from 'react';
import { Link } from 'gatsby';

// data
import { links } from 'data/links';

// logo
import Logo from 'images/logo.svg';

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-footer-text relative group overflow-hidden inline-block"
  >
    {children}
    <div className="absolute bottom-0 h-px w-full transform -translate-x-full group-hover:translate-x-0 bg-current transition-all" />
  </Link>
);

const Footer = () => {
  return (
    <div className="bg-footer-bg py-16 px-6 rounded-tr-xl md:py-20">
      <footer className="container mx-auto text-center grid grid-cols-1 justify-items-center md:grid-cols-4 md:justify-items-start md:text-left">
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
                    <FooterLink to={href}>{title}</FooterLink>
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
