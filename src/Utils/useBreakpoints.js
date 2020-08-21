import { useState, useEffect } from 'react';
import { debounce } from './Debounce';

const setBreakpoints = width => {
  if (width < 768) {
    return 'isMobile';
  }

  if (width >= 768 && width <= 1024) {
    return 'isTabletAndUp';
  }

  return 'isDesktopAndUp';
};

function useBreakpoints() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      debounce(setWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return setBreakpoints(width);
}

export default useBreakpoints;
