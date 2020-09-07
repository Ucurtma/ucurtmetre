import React from 'react';
import './Home.scss';
import Thermometer from '../Thermometer/Thermometer';
import Donators from '../Donators/Donators';

const Home = () => {
  return (
    <>
      <Thermometer />
      <Donators />
    </>
  );
};

export default Home;
