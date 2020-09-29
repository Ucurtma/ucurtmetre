import React from 'react';
import cls from 'classnames';
import './SelectBank.scss';

function SelectBank({ bankData, onSelect, selectedBank }) {
  return (
    <div className="select-bank">
      <div className="select-bank-header">
        <p mb={4} size="sm">
          Lütfen desteğinizi göndermek istediğiniz bankayı seçiniz.
        </p>
        <p>
          Listelenen banka hesapları, <strong>BiLira</strong> tarafından
          sağlanan ödeme kanallarıdır. Bu banka hesaplarından birinde hesabınız
          olmasa dahi <strong>EFT</strong> ile gönderme seçeneğiniz
          bulunmaktadır.
        </p>
      </div>
      <div className="banks">
        {bankData?.systemBankAccounts?.map(bankAccount => (
          <button
            type="button"
            className={cls('button', {
              isSelected: selectedBank === bankAccount.id,
            })}
            key={bankAccount.id}
            onClick={() => onSelect(bankAccount.id)}
          >
            <img
              alt={bankAccount.name}
              src={`${process.env.PUBLIC_URL}/assets/images/banks/${bankAccount.id}.png`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectBank;
