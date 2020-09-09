import React from 'react';
import { AlertCircle } from 'react-feather';
// import { useQuery } from '@apollo/client';
// import { GET_OAUTH_URL } from '../../Utils/Queries';
import './BankTransferFlow.scss';
import Alert from '../Alert/Alert';

function BankTransferFlow() {
  // const { data } = useQuery(GET_OAUTH_URL, {
  //   variables: {
  //     campaignId: 'donate-all',
  //   },
  // });

  return (
    <div className="bank-transfer-flow">
      <Alert
        message={
          <div>
            <p>
              Yapacağınız destekleri güvenli ve hızlı bir şekilde öğrencimize
              ulaştırabilmek için{' '}
              <a
                href="https://www.bilira.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BiLira
              </a>{' '}
              ile çalışıyoruz.
            </p>
            <p>
              Aşağıdaki butonu kullanarak hızlıca hesap oluşturabilir, varolan
              hesabınızla transferi yapacağınız banka hesabına kolayca
              ulaşabilirsiniz.
            </p>
          </div>
        }
        icon={<AlertCircle />}
      />
      <Alert
        variant="danger"
        message="Banka Havalesini aktif etmek için ekibimiz dur durak bilmeden
        çalışıyor. Yakında aktif olacak."
        icon={<AlertCircle />}
      />
      {/* {data && (
        <a
          className="login-with-bilira"
          href={data.biliraOAuthUrl.authorizationUri}
        >
          BiLira ile giriş yap
        </a>
      )} */}
    </div>
  );
}

export default BankTransferFlow;
