import React from 'react';

function SponsorChip({ url, name, logo }) {
  return (
    <div className="sponsor">
      <a href={url} title={name}>
        <div className="logo" style={{ backgroundImage: `url('${logo}')` }} />
      </a>
    </div>
  );
}

export default SponsorChip;
