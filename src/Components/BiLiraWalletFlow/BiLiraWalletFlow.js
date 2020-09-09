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
      <AddressViewer data="0x3365CfF5e0970fbB2cF744796901002d9987c0Dc" />
    </>
  );
}

export default BiLiraWalletFlow;
