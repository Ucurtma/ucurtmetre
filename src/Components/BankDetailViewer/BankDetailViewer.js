import React from 'react';
import Alert from '../Alert/Alert';
import './BankDetailViewer.scss';

function BankDetailViewer({ data, error }) {
  const infos = [
    { title: 'Alıcı İsmi', value: 'Bilira Teknoloji A.Ş.' },
    { title: 'Banka Adı', value: data?.collectDonation?.bankName },
    { title: 'IBAN Numarası', value: data?.collectDonation?.iban },
    { title: 'Referans Kodu', value: data?.collectDonation?.referenceCode },
  ];

  if (error) {
    return (
      <div className="bank-detail-viewer">
        <Alert
          variant="danger"
          message={
            <p>
              Desteğiniz gönderilirken bir hata oluştu. Lütfen{' '}
              <strong>BiLira</strong> ile yapabileceğiniz işlem limitinin{' '}
              <strong>1500 TRB</strong> olduğunu unutmayın.
            </p>
          }
        />
      </div>
    );
  }

  return (
    <div className="bank-detail-viewer">
      <Alert
        variant="success"
        message={
          <p>
            Gönderdiğiniz destek için teşekkürler. Desteğinizin onaylanması için
            seçtiğiniz bankadan, aşağıda bilgileri verilen hesaba açıklamasına{' '}
            <strong>{data?.collectDonation?.referenceCode}</strong> yazarak
            desteklediğiniz kadar ücreti göndermeniz gerekmektedir.
          </p>
        }
      />
      <div className="bank-detail-infos">
        {infos.map((info, infoIndex) => (
          <div className="info" key={infoIndex.toString()}>
            <p>
              <strong>{info.title}</strong>
            </p>
            <p>
              {info.value ||
                'Veriye ulaşılamadı, lütfen daha sonra tekrar deneyiniz.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankDetailViewer;
