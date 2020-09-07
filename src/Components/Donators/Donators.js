import React, { useState } from 'react';
import cls from 'classnames';
import './Donators.scss';
import IndividualTab from '../IndividualTab/IndividualTab';
import SponsorsTab from '../SponsorsTab/SponsorsTab';

const tabs = ['Kurumsal', 'Bireysel'];

const sponsors = [
  {
    type: 'gold',
    details: {
      name: 'Turkish Airlines',
      url: 'https://www.turkishairlines.com/tr-tr/',
      img: 'https://miro.medium.com/max/700/1*mg-sfp_LfrQkgIuE-zYe2g.jpeg',
    },
  },
  {
    type: 'gold',
    details: {
      name: 'Turkish Airlines',
      url: 'https://www.turkishairlines.com/tr-tr/',
      img: 'https://miro.medium.com/max/700/1*mg-sfp_LfrQkgIuE-zYe2g.jpeg',
    },
  },
  {
    type: 'silver',
    details: {
      name: 'Turkish Airlines',
      url: 'https://www.turkishairlines.com/tr-tr/',
      img: 'https://miro.medium.com/max/700/1*mg-sfp_LfrQkgIuE-zYe2g.jpeg',
    },
  },
  // {
  //   type: 'bronze',
  //   details: {
  //     name: 'Turkcell',
  //     url: 'https://www.turkcell.com.tr',
  //     img:
  //       'https://www.eczacibasi.com.tr/_Media/Image/Master/ECZFacebookImage2.jpg',
  //   },
  // },
];

const individuals = [
  {
    name: 'Mustafa Turhan',
    picture: './logo192.png',
    address:
      '0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d',
    amount: 5500,
  },
  {
    name: 'Eliza Lambert',
    picture: null,
    address:
      '0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d',
    amount: 1000,
  },
  {
    name: null,
    picture: './logo192.png',
    address:
      '0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d',
    amount: 1000,
  },

  {
    name: null,
    picture: null,
    address:
      '0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d',
    amount: 1000,
  },
  {
    name: 'Hu** B**',
    picture: null,
    address:
      '0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d',
    amount: 1000,
  },
];

const Donators = () => {
  const [activeTab, setActiveTab] = useState('Kurumsal');
  const toggleDonator = type => setActiveTab(type);

  return (
    <div className="widget-donators">
      <nav>
        {tabs.map(tab => (
          <button
            type="button"
            className={cls({
              'button donator tab-buttons': true,
              active: activeTab === tab,
            })}
            key={tab}
            onClick={() => toggleDonator(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      {activeTab === 'Kurumsal' && <SponsorsTab sponsors={sponsors} />}
      {activeTab === 'Bireysel' && <IndividualTab individuals={individuals} />}
      <a
        href="https://ucurtmaprojesi.com/kampanyalar"
        className="button secondary-button blue-border fluid"
      >
        Kampanyaları Görüntüle
      </a>
    </div>
  );
};

export default Donators;
