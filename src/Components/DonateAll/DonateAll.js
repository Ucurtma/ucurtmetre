import React, { useState } from 'react';
import cls from 'classnames';
import './DonateAll.scss';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';

const donateWays = ['Banka Havalesi', 'BiLira', 'Ethereum & USDT'];

function DonateAll() {
  const [activeTab, setActiveTab] = useState('BiLira');

  const toggleDonator = type => {
    setActiveTab(type);
  };

  return (
    <div className="donate-card">
      <div className="breadcrumb-link">
        <Link to="/">
          <ChevronLeft />
          Anasayfa&apos;ya dön
        </Link>
      </div>
      <div>
        <h1>Bağış Yöntemleri</h1>
        <p>
          Uçurtma gençlerine bağış desteğinde bulunabilmeniz için aşağıdaki
          ödeme yöntemlerini kullanabilirsiniz.
        </p>
      </div>
      <div>
        <nav>
          {donateWays.map(way => (
            <button
              type="button"
              className={cls({
                'button tab-buttons': true,
                active: activeTab === way,
              })}
              onClick={() => toggleDonator(way)}
              key={way}
            >
              {way}
            </button>
          ))}
        </nav>
        <div className="donate-tab-content">
          {activeTab === 'Banka Havalesi' && 'Banka Havalesi'}
          {activeTab === 'BiLira' && 'Bi Lira'}
          {activeTab === 'Ethereum & USDT' && 'Ethereum & USDT'}
        </div>
      </div>
    </div>
  );
}

export default DonateAll;
