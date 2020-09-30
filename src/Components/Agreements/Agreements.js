import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

function Agreements({ kvkkName, agreementName }) {
  return (
    <div>
      <Checkbox name={kvkkName}>
        Kişisel verileri koruma kapsamında
        <a target="_blank" rel="noopener noreferrer" href="./kvkk">
          <strong> aydınlatma metnini </strong>
        </a>
        ve
        <a target="_blank" rel="noopener noreferrer" href="./direct-consent">
          <strong> açık rıza beyan formunu </strong>
        </a>
        okudum ve onaylıyorum.
      </Checkbox>
      <Checkbox name={agreementName}>
        <a target="_blank" rel="noopener noreferrer" href="./user-agreement">
          Kullanıcı sözleşmesini
        </a>{' '}
        okudum ve onaylıyorum.
      </Checkbox>
    </div>
  );
}

export default Agreements;
