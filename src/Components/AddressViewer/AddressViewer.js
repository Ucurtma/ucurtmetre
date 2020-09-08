import React from 'react';
import { QRCode } from 'react-qr-svg';
import './AddressViewer.scss';

function AddressViewer({ data, title = 'BiLira Cüzdanı' }) {
  return (
    <div className="address-container">
      <a
        mr={4}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://etherscan.io/address/${data}`}
      >
        <div className="qr-container">
          <QRCode
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            style={{ width: 200, padding: '1rem' }}
            value={data}
          />
        </div>
      </a>
      <div className="address">
        <h3>{title}</h3>
        <p wordBreak="break-all">{data}</p>
      </div>
    </div>
  );
}

export default AddressViewer;
