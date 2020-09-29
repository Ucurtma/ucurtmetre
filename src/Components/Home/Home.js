import React, { useMemo } from 'react';
import './Home.scss';
import dayjs from 'dayjs';
import Thermometer from '../Thermometer/Thermometer';
import Donators from '../Donators/Donators';

const Home = () => {
  const monthSummary = useMemo(
    () => ({
      firstDate: dayjs('2020-08-28'),
      lastDate: dayjs(),
      amounts: {
        total: 28000,
        to: 24000,
      },
    }),
    []
  );

  return (
    <>
      <div className="container with-alert">
        <div className="box">
          <strong>{monthSummary.firstDate.format('DD MMMM')}</strong> ile{' '}
          <strong>{monthSummary.lastDate.format('DD MMMM')}</strong> tarihleri
          arasında <strong>{monthSummary.amounts.total}</strong> BiLira
          toplanmış, <strong>{monthSummary.amounts.to}</strong> BiLira&apos;sı
          öğrencilere dağıtılmıştır.
        </div>
      </div>
      <main className="container">
        <Thermometer />
        <Donators />
      </main>
    </>
  );
};

export default Home;
