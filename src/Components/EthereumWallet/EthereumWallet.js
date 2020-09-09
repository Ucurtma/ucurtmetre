import React from 'react';
import { CheckCircle } from 'react-feather';
import Alert from '../Alert/Alert';
import AddressViewer from '../AddressViewer/AddressViewer';

function EthereumWallet() {
  return (
    <>
      <Alert
        variant="success"
        message="Bu cüzdana ERC20 kökenli bütün tokenlar ile ödeme
    yapabilirsiniz."
        icon={<CheckCircle />}
      />
      <AddressViewer
        title="Ethereum Cüzdanı"
        data="0xaEf4bB2D11058a627468fDECC6D7E45CC75997c5"
      />
    </>
  );
}

export default EthereumWallet;
