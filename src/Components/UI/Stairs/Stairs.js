import React from 'react';
import './Stairs.scss';
import useBreakpoints from '../../../Utils/useBreakpoints';

const Stairs = () => {
  const breakpoint = useBreakpoints();
  const isMobile = breakpoint === 'isMobile';

  return (
    <div>
      {!isMobile && (
        <>
          <div className="stair-bg" />
          <div className="stair-front-bg" />
        </>
      )}
      {isMobile && <div className="shaped-box" />}
    </div>
  );
};

export default Stairs;
