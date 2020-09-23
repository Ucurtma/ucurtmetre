import React from 'react';
import { useQuery } from '@apollo/client';
import Skeleton from 'react-loading-skeleton';
import Card from '../Card/Card';
import './TransactionHistory.scss';
import { GET_LATEST_DONATIONS } from '../../Utils/Queries';
import TransactionHistoryTable from './TransactionHistoryTable';
import Alert from '../Alert/Alert';

function TransactionHistory() {
  const { data, loading, error } = useQuery(GET_LATEST_DONATIONS);

  const renderContent = () => {
    if (loading) {
      return (
        <div>
          <Skeleton height={43} />
          <Skeleton count={10} style={{ marginTop: '10px' }} />
        </div>
      );
    }

    if (error) {
      return (
        <Alert
          message="Bir hata oluştu. Lütfen sayfayı yenileyerek tekrar deneyiniz."
          variant="danger"
        />
      );
    }

    return (
      <TransactionHistoryTable data={data.allCampaignDetails.transactions} />
    );
  };

  return (
    <Card
      className="transaction-history"
      title="İşlem Geçmişi"
      desc="Öğrencilere destek olması için hazırladığımız akıllı algoritmamız ile hangi işlemler yapıldığının kısa bir özetine bu sayfadan ulaşabilirsiniz."
    >
      {renderContent()}
    </Card>
  );
}

export default TransactionHistory;
