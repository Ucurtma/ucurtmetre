import React, { useState } from 'react';
import cls from 'classnames';
import './DonateAll.scss';
import { useLocation } from 'react-router';
import BankTransferFlow from '../BankTransferFlow/BankTransferFlow';
import BiLiraWalletFlow from '../BiLiraWalletFlow/BiLiraWalletFlow';
import EthereumWallet from '../EthereumWallet/EthereumWallet';
import Card from '../Card/Card';

function DonateAll() {
  const location = useLocation();

  const donateWays = [
    { name: 'BiLira Cüzdanı', component: <BiLiraWalletFlow /> },
    { name: 'Ethereum Cüzdanı', component: <EthereumWallet /> },
    { name: 'Banka Havalesi', component: <BankTransferFlow /> },
  ];

  const [activeTab, setActiveTab] = useState(
    donateWays[location.state.state?.redirected ? 2 : 0]
  );

  const toggleDonator = type => {
    setActiveTab(type);
  };

  return (
    <Card
      className="donate-card"
      title="Destek Yöntemleri"
      desc="Uçurtma gençlerine destekte bulunabilmeniz için aşağıdaki ödeme
    yöntemlerini kullanabilirsiniz."
    >
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
    </Card>
  );
}

export default DonateAll;
