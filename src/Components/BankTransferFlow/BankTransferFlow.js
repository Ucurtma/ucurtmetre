import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { AlertCircle } from 'react-feather';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useLocation } from 'react-router';
import { Form, Formik } from 'formik';
import Skeleton from 'react-loading-skeleton';
import {
  GET_OAUTH_URL,
  GET_BANKS,
  COLLECT_DONATION,
} from '../../Utils/Queries';
import './BankTransferFlow.scss';
import Alert from '../Alert/Alert';
import SelectBank from '../SelectBank/SelectBank';
import Input from '../Input/Input';
import Agreements from '../Agreements/Agreements';
import BankDetailViewer from '../BankDetailViewer/BankDetailViewer';

const bankTransferValidation = Yup.object().shape({
  email: Yup.string()
    .required('Bu alan zorunludur.')
    .email('Lütfen geçerli bir email adresi giriniz.'),
  amount: Yup.number()
    .min(100, "Gönderebileceğiniz en düşük miktar 100 TRB'dir.")
    .max(1500, "Gönderebileceğiniz en yüksek miktar 1500 TRB'dir.")
    .typeError('Lütfen geçerli bir rakam giriniz.')
    .required('Bu alan zorunludur.'),
  consentToReceiveNews: Yup.boolean().oneOf(
    [true],
    'Devam edebilmek için sözleşmeyi onaylamanız gerekmektedir.'
  ),
  consentToUserAgreement: Yup.boolean().oneOf(
    [true],
    'Devam edebilmek için sözleşmeyi onaylamanız gerekmektedir.'
  ),
});

function BankTransferFlow() {
  const location = useLocation();
  const [currentBank, setCurrentBank] = React.useState(-1);
  const blAuth = localStorage.getItem('blAuth');

  const [
    collectDonation,
    { data: donationData, error: donationError, loading: donationLoading },
  ] = useMutation(COLLECT_DONATION, { onError: err => err });

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

  useEffect(() => {
    if (blAuth) {
      getBanks();
    } else {
      getOauthUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bankError) {
      localStorage.removeItem('blAuth');
      getOauthUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankError]);

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
      {data && !blAuth && (
        <a
          className="login-with-bilira"
          href={data.biliraOAuthUrl.authorizationUri}
        >
          BiLira ile giriş yap
        </a>
      )}
      {bankData && !donationData && (
        <>
          <SelectBank
            bankData={bankData}
            onSelect={bankId => setCurrentBank(bankId)}
            selectedBank={currentBank}
          />
          {currentBank !== -1 && (
            <Formik
              initialValues={{
                email: '',
                amount: '',
                consentToReceiveNews: false,
                consentToUserAgreement: false,
              }}
              validationSchema={bankTransferValidation}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                collectDonation({
                  variables: {
                    campaignCode: 'campaign-all',
                    bankId: parseInt(currentBank, 10),
                    email: values.email,
                    amount: parseFloat(values.amount),
                  },
                  context: {
                    headers: {
                      oauth2: blAuth,
                    },
                  },
                });
              }}
            >
              {({ isSubmitting, dirty, isValid }) => (
                <Form data-private>
                  <div>
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Lütfen email adresinizi girin."
                    />

                    <Input
                      label="Miktar"
                      name="amount"
                      type="number"
                      placeholder="Lütfen göndermek istediğiniz destek miktarını giriniz."
                    />
                  </div>

                  <Agreements
                    kvkkName="consentToReceiveNews"
                    agreementName="consentToUserAgreement"
                  />

                  <button
                    className="button secondary-button submit"
                    type="submit"
                    disabled={
                      isSubmitting || !dirty || !isValid || donationLoading
                    }
                    width="full"
                  >
                    Destekle
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </>
      )}
      {(donationData || donationError) && (
        <BankDetailViewer error={donationError} data={donationData} />
      )}
    </div>
  );
}

export default BankTransferFlow;
