import React from 'react';
import { AlertCircle } from 'react-feather';
import Alert from '../Alert/Alert';
import AddressViewer from '../AddressViewer/AddressViewer';

function Bitcoin() {
  return (
    <>
      <Alert
        variant="danger"
        message="Bu adrese yalnızca Bitcoin(BTC) gönderebilirsiniz."
        icon={<AlertCircle />}
      />
      <AddressViewer
        title="Bitcoin"
        data="bitcoin:191pEwgp2gNsWKhQKQAVnoZqHhyxxmvA4W"
      />
    </>
  );
}

export default Bitcoin;
