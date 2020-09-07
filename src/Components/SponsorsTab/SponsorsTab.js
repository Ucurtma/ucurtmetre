import React, { Fragment, useEffect, useState } from 'react';
import BeSponsor from '../BeSponsor/BeSponsor';
import './SponsorsTab.scss';
import SponsorChip from '../SponsorChip/SponsorChip';

const sponsorTypes = [
  {
    type: 'gold',
    maxCount: 2,
  },
  {
    type: 'silver',
    maxCount: 4,
  },
  {
    type: 'bronze',
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
          filteredSponsors.push({ type: sponsorType.type, details: null });
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
          <div className={sponsorType.type} key={sponsorType.type}>
            <h3>
              {sponsorType.type === 'gold' && 'Gold Sponsorlar'}
              {sponsorType.type === 'silver' && 'Silver Sponsorlar'}
              {sponsorType.type === 'bronze' && 'Bronz Sponsorlar'}
            </h3>
            <div className="sponsor-list">
              <>
                {modSponsors.map((sponsor, sponsorIndex) => {
                  return (
                    <Fragment key={sponsorIndex.toString()}>
                      {sponsor.type === sponsorType.type && (
                        <>
                          {sponsor.details ? (
                            <SponsorChip
                              url={sponsor.details.url}
                              name={sponsor.details.name}
                              logo={sponsor.details.img}
                            />
                          ) : (
                            <BeSponsor />
                          )}
                        </>
                      )}
                    </Fragment>
                  );
                })}
              </>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SponsorsTab;
