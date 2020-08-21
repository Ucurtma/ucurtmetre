import React from 'react';
import Thermometer from '../UI/Thermometer/Thermometer';
import './Main.scss';
import Donators from '../UI/Donators/Donators';

const Main = () => {
  return (
    <main>
      <Thermometer />
      <Donators />
    </main>
  );
};

export default Main;
