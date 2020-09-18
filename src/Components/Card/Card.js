import React from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';
import styles from './Card.module.scss';

function Card({
  children,
  className,
  title,
  desc,
  withHomeButton = true,
  ...otherProps
}) {
  return (
    <div className={cls(styles.donateCard, className)} {...otherProps}>
      {withHomeButton && (
        <div className={styles.breadcrumbLink}>
          <Link to="/">
            <ChevronLeft />
            Anasayfa&apos;ya dön
          </Link>
        </div>
      )}
      {(title || desc) && (
        <div>
          {title && <h1>{title}</h1>}
          {desc && <p>{desc}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
