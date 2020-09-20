import React from 'react';
import { useQuery } from '@apollo/client';
import Card from '../Card/Card';
import './TransactionHistory.scss';
import { GET_LATEST_DONATIONS } from '../../Utils/Queries';
import TransactionHistoryTable from './TransactionHistoryTable';

function TransactionHistory() {
  const { data, loading, error } = useQuery(GET_LATEST_DONATIONS);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Card
      className="transaction-history"
      title="İşlem Geçmişi"
      desc="Öğrencilere destek olması için hazırladığımız akıllı algoritmamız ile hangi işlemler yapıldığının kısa bir özetine bu sayfadan ulaşabilirsiniz."
    >
      <TransactionHistoryTable data={data.allCampaignDetails.transactions} />
    </Card>
  );
}

export default TransactionHistory;
