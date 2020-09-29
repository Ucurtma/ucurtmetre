import React from 'react';
import './BeSponsor.scss';

function BeSponsor({ href = `https://bit.ly/2G2CT7f` }) {
  return (
    <a
      className="empty-sponsor"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      SPONSOR OL
    </a>
  );
}

export default BeSponsor;
