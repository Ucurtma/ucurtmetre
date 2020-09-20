import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import cls from 'classnames';
import { HelpCircle } from 'react-feather';
import useBreakpoints from '../../Utils/useBreakpoints';

const Header = () => {
  const breakpoint = useBreakpoints();
  const isMobile = breakpoint === 'isMobile';

  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="./assets/images/logo-gray@3x.png"
          alt="uçurtma"
        />
      </Link>
      <nav className="header-nav">
        <a
          className={cls({
            'button secondary-button white': !isMobile,
            'button icon-button white': isMobile,
          })}
          href="https://www.ucurtmaprojesi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isMobile ? <HelpCircle /> : 'Uçurtma Projesi Nedir?'}
        </a>
        <Link
          className={cls({
            'button secondary-button white': !isMobile,
            'button icon-button white': isMobile,
          })}
          to="/transaction-history"
        >
          İşlem Geçmişi
        </Link>
      </nav>
    </header>
  );
};

export default Header;
