import React from 'react';
import { AlertCircle } from 'react-feather';
import { useLazyQuery } from '@apollo/client';
import { useLocation } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { GET_OAUTH_URL, GET_BANKS } from '../../Utils/Queries';
import './BankTransferFlow.scss';
import Alert from '../Alert/Alert';
import SelectBank from '../SelectBank/SelectBank';

function BankTransferFlow() {
  const location = useLocation();
  const [currentBank, setCurrentBank] = React.useState(-1);
  const blAuth = localStorage.getItem('blAuth');

  const [getOauthUrl, { data }] = useLazyQuery(GET_OAUTH_URL, {
    variables: {
      campaignId: 'donate-all',
      returnUrl: 'https://destek.ucurtmaprojesi.com/auth/callback',
    },
  });

  const [
    getBanks,
    { error: bankError, data: bankData, loading: bankLoading },
  ] = useLazyQuery(GET_BANKS, {
    context: {
      headers: {
        oauth2: blAuth,
      },
    },
  });

  React.useLayoutEffect(() => {
    if (blAuth) {
      getBanks();
    } else {
      getOauthUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bank-transfer-flow">
      {location.state?.state?.redirectError && (
        <Alert
          icon={<AlertCircle />}
          variant="danger"
          message="BiLira ile bağlantı kurulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        />
      )}
      <Alert
        message={
          <>
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
            {!blAuth && (
              <p>
                Aşağıdaki butonu kullanarak hızlıca hesap oluşturabilir, varolan
                hesabınızla transferi yapacağınız banka hesabına kolayca
                ulaşabilirsiniz.
              </p>
            )}
          </>
        }
        icon={<AlertCircle />}
      />
      {bankLoading && (
        <div>
          <Skeleton count={4} />
        </div>
      )}
      {bankError && <div>Error</div>}
      {bankData && (
        <SelectBank
          bankData={bankData}
          onSelect={bankId => setCurrentBank(bankId)}
          selectedBank={currentBank}
        />
      )}
      {data && !blAuth && (
        <a
          className="login-with-bilira"
          href={data.biliraOAuthUrl.authorizationUri}
        >
          BiLira ile giriş yap
        </a>
      )}
    </div>
  );
}

export default BankTransferFlow;
