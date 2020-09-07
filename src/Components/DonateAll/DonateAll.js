import React, { useState } from 'react';
import cls from 'classnames';
import './DonateAll.scss';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import BankTransferFlow from '../BankTransferFlow/BankTransferFlow';

const donateWays = ['Banka Havalesi', 'BiLira Cüzdanı'];

function DonateAll() {
  const [activeTab, setActiveTab] = useState('Banka Havalesi');

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
          Uçurtma gençlerine destekte bulunabilmeniz için aşağıdaki ödeme
          yöntemlerini kullanabilirsiniz.
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
          {activeTab === 'Banka Havalesi' && <BankTransferFlow />}
          {activeTab === 'BiLira Cüzdanı' && 'Bi Lira'}
        </div>
      </div>
    </div>
  );
}

export default DonateAll;
