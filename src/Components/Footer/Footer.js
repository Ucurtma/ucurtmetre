import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="illustration" />
      <nav className="footer-nav">
        <div className="container">
          <ul>
            <li>
              <Link to="/cookie-policy">Çerez Politikası</Link>
            </li>
            <li>
              <Link to="/kvkk">Aydınlatma Metni</Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
