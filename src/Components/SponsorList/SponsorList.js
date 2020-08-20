import React, { useState } from 'react';
import TabMenu from '../UI/TabMenu/TabMenu';

const SponsorList = () => {
  const [showCorporateList, setShowCorporateList] = useState(false);
  return (
    <>
      <div>
        <TabMenu
          tabMenuCallback={tabMenuIndex => {
            if (tabMenuIndex === 1) {
              setShowCorporateList(true);
            } else {
              setShowCorporateList(false);
            }
          }}
        />
        {showCorporateList ? (
          <span>KurumsalList</span>
        ) : (
          <span>BireyselList</span>
        )}
      </div>
    </>
  );
};

export default SponsorList;
