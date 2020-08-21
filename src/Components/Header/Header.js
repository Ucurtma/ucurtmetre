import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import cls from 'classnames';
import useBreakpoints from '../../Utils/useBreakpoints';
import { ReactComponent as QuestionIcon } from '../Icons/question.svg';

const Header = () => {
  const breakpoint = useBreakpoints();
  const isMobile = breakpoint === 'isMobile';
  return (
    <header>
      <img
        className="logo"
        src="./assets/images/logo-gray@3x.png"
        alt="uçurtma"
      />
      <Link
        className={cls({
          'button secondary-button white': !isMobile,
          'button icon-button white': isMobile,
        })}
        to="#"
      >
        {isMobile && <QuestionIcon />}
        {!isMobile && 'Uçurtma Projesi Nedir?'}
      </Link>
    </header>
  );
};

export default Header;
