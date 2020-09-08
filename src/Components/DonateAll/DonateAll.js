import React, { useState } from 'react';
import cls from 'classnames';
import './DonateAll.scss';
import { ChevronLeft, AlertCircle, CheckCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import BankTransferFlow from '../BankTransferFlow/BankTransferFlow';
import AddressViewer from '../AddressViewer/AddressViewer';

const donateWays = ['BiLira Cüzdanı', 'Ethereum Cüzdanı', 'Banka Havalesi'];

function DonateAll() {
  const [activeTab, setActiveTab] = useState('BiLira Cüzdanı');

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
          {activeTab === 'BiLira Cüzdanı' && (
            <>
              <div className="alert danger">
                <div className="alert-icon">
                  <AlertCircle />
                </div>
                <div>
                  <p>
                    Bu cüzdan sadece BiLira tokenı kabul etmektedir. Bu kontrata
                    göndereceğiniz diğer tokenları geri döndürülemez biçimde
                    kaybedersiniz.
                  </p>
                </div>
              </div>
              <AddressViewer data="0x3365CfF5e0970fbB2cF744796901002d9987c0Dc" />
            </>
          )}
          {activeTab === 'Ethereum Cüzdanı' && (
            <>
              <div className="alert success">
                <div className="alert-icon">
                  <CheckCircle />
                </div>
                <div>
                  <p>
                    Bu cüzdana ERC20 kökenli bütün tokenlar ile ödeme
                    yapabilirsiniz.
                  </p>
                </div>
              </div>
              <AddressViewer
                title="Ethereum Cüzdanı"
                data="0xaEf4bB2D11058a627468fDECC6D7E45CC75997c5"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonateAll;
