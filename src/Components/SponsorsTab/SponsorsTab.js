import React, { Fragment, useEffect, useState } from 'react';
import BeSponsor from '../BeSponsor/BeSponsor';
import './SponsorsTab.scss';
import SponsorChip from '../SponsorChip/SponsorChip';

const sponsorTypes = [
  {
    type: 'GOLD',
    maxCount: 2,
  },
  {
    type: 'SILVER',
    maxCount: 4,
  },
  {
    type: 'BRONZE',
    maxCount: 5,
  },
];

function SponsorsTab({ sponsors }) {
  const [modSponsors, setModSponsors] = useState([]);

  useEffect(() => {
    sponsorTypes.forEach(sponsorType => {
      const filteredSponsors = sponsors.filter(
        sponsor => sponsorType.type === sponsor.type
      );

      if (filteredSponsors.length < sponsorType.maxCount) {
        for (
          let i = filteredSponsors.length;
          i < sponsorType.maxCount;
          i += 1
        ) {
          filteredSponsors.push({ type: sponsorType.type, name: null });
        }
      }

      setModSponsors(val => {
        return [...val, ...filteredSponsors];
      });
    });
  }, [sponsors]);

  return (
    <div className="list sponsors">
      {sponsorTypes.map(sponsorType => {
        return (
          <div
            className={sponsorType.type.toLowerCase()}
            key={sponsorType.type}
          >
            <h3>
              {sponsorType.type === 'GOLD' && 'Gold Sponsorlar'}
              {sponsorType.type === 'SILVER' && 'Silver Sponsorlar'}
              {sponsorType.type === 'BRONZE' && 'Bronz Sponsorlar'}
            </h3>
            <div className="sponsor-list">
              {modSponsors.map((sponsor, sponsorIndex) => {
                return (
                  <Fragment key={sponsorIndex.toString()}>
                    {sponsor.type === sponsorType.type && (
                      <>
                        {sponsor.name ? (
                          <SponsorChip
                            url={sponsor.url}
                            name={sponsor.name}
                            logo={sponsor.image}
                          />
                        ) : (
                          <BeSponsor />
                        )}
                      </>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SponsorsTab;
