import React from 'react';
import './BeSponsor.scss';

function BeSponsor({
  href = `https://twitter.com/intent/tweet?text=This is not a nice placeholder for link bro&screen_name=mustaphaturhan`,
}) {
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
