import React from 'react';
import { AlertCircle } from 'react-feather';
import AddressViewer from '../AddressViewer/AddressViewer';
import Alert from '../Alert/Alert';

function BiLiraWalletFlow() {
  return (
    <>
      <Alert
        variant="danger"
        message="Bu cüzdan sadece BiLira tokenı kabul etmektedir. Bu kontrata
      göndereceğiniz diğer tokenları geri döndürülemez biçimde
      kaybedersiniz."
        icon={<AlertCircle />}
      />
      <AddressViewer data="0x955E5F56fae77Db5829FAE980ADeAc688fE80259" />
    </>
  );
}

export default BiLiraWalletFlow;
