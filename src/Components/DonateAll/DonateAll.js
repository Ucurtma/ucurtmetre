import React, { useState } from 'react';
import cls from 'classnames';
import './DonateAll.scss';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import BankTransferFlow from '../BankTransferFlow/BankTransferFlow';
import BiLiraWalletFlow from '../BiLiraWalletFlow/BiLiraWalletFlow';
import EthereumWallet from '../EthereumWallet/EthereumWallet';

function DonateAll() {
  const donateWays = [
    { name: 'BiLira Cüzdanı', component: <BiLiraWalletFlow /> },
    { name: 'Ethereum Cüzdanı', component: <EthereumWallet /> },
    { name: 'Banka Havalesi', component: <BankTransferFlow /> },
  ];

  const [activeTab, setActiveTab] = useState(donateWays[0]);

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
        <h1>Destek Yöntemleri</h1>
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
                active: activeTab.name === way.name,
              })}
              onClick={() => toggleDonator(way)}
              key={way.name}
            >
              {way.name}
            </button>
          ))}
        </nav>
        <div className="donate-tab-content">{activeTab.component}</div>
      </div>
    </div>
  );
}

export default DonateAll;
