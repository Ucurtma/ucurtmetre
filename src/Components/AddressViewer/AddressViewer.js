import React from 'react';
import { QRCode } from 'react-qr-svg';
import { Clipboard, CheckCircle } from 'react-feather';
import './AddressViewer.scss';
import useClipboard from '../../Utils/useClipboard';

function AddressViewer({ data, title = 'BiLira Cüzdanı' }) {
  const { onCopy, hasCopied } = useClipboard(data);

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
        <p>
          {data}
          <button onClick={onCopy} type="button" className="button">
            {hasCopied ? <CheckCircle /> : <Clipboard />}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AddressViewer;
