import React from 'react';
import './Home.scss';
import Thermometer from '../UI/Thermometer/Thermometer';
import Donators from '../UI/Donators/Donators';

const Home = () => {
  document.title = 'Home';

  return (
    <>
      <Thermometer />
      <Donators />
    </>
  );
};

export default Home;
