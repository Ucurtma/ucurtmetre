import React, { useState, Fragment } from 'react';
import cls from 'classnames';
import './Donators.scss';

const companyTypes = ['gold', 'silver', 'bronze'];

const companies = [
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
      name: 'Turkcell',
      url: 'https://www.turkcell.com.tr',
      img:
        'https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_ERKEK_LOGO.jpg',
    },
  },
  {
    type: 'silver',
    details: {
      name: 'Turkcell',
      url: 'https://www.turkcell.com.tr',
      img:
        'https://2deroj25v8qu2o5mtq1fox5r-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/Arcelik-Logo.png',
    },
  },
  {
    type: 'bronze',
    details: {
      name: 'Turkcell',
      url: 'https://www.turkcell.com.tr',
      img:
        'https://www.eczacibasi.com.tr/_Media/Image/Master/ECZFacebookImage2.jpg',
    },
  },
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
  const [activeTab, setActiveTab] = useState('company');

  const toggleDonator = type => {
    if (type === 'company') {
      setActiveTab('company');
    }

    if (type === 'individual') {
      setActiveTab('individual');
    }
  };

  return (
    <div className="widget-donators">
      <nav>
        <button
          type="button"
          className={cls({
            'button donator tab-buttons': true,
            active: activeTab === 'company',
          })}
          onClick={() => toggleDonator('company')}
        >
          Kurumsal
        </button>
        <button
          type="button"
          className={cls({
            'button donator tab-buttons': true,
            active: activeTab === 'individual',
          })}
          onClick={() => toggleDonator('individual')}
        >
          Bireysel
        </button>
      </nav>
      {activeTab === 'company' && (
        <div className="list companies">
          {companyTypes.map(companyType => {
            return (
              <div className={companyType} key={companyType}>
                <h3>
                  {companyType === 'gold' && 'Gold Sponsorlar'}
                  {companyType === 'silver' && 'Silver Sponsorlar'}
                  {companyType === 'bronze' && 'Bronz Sponsorlar'}
                </h3>
                <div className="company-list">
                  {companies.map((company, companyIndex) => (
                    <Fragment key={companyIndex.toString()}>
                      {company.type === companyType ? (
                        <div className="company">
                          <a
                            href={company.details.url}
                            title={company.details.name}
                          >
                            <div
                              className="logo"
                              style={{
                                backgroundImage: `url('${company.details.img}')`,
                              }}
                            />
                          </a>
                        </div>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {activeTab === 'individual' && (
        <ul className="list individuals">
          {individuals.map(individual => {
            return (
              <li className="donator" key={individual.name}>
                <p className="name">
                  {individual.name ? individual.name : individual.address}
                </p>
                <p className="amount">{individual.amount} TRYB</p>
              </li>
            );
          })}
        </ul>
      )}
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
