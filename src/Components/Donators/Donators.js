import React, { useState } from 'react';
import cls from 'classnames';
import { useQuery } from '@apollo/client';
import './Donators.scss';
import Skeleton from 'react-loading-skeleton';
import IndividualTab from '../IndividualTab/IndividualTab';
import SponsorsTab from '../SponsorsTab/SponsorsTab';
import {
  GET_CORPORATE_SPONSORS,
  GET_INDIVIDUAL_SPONSORS,
} from '../../Utils/Queries';
import Alert from '../Alert/Alert';

const tabs = ['Kurumsal', 'Bireysel'];

const Donators = () => {
  const {
    data: corporateData,
    loading: corporateLoading,
    error: corporateError,
  } = useQuery(GET_CORPORATE_SPONSORS);
  const {
    data: individualData,
    loading: individualLoading,
    error: individualError,
  } = useQuery(GET_INDIVIDUAL_SPONSORS, { variables: { top: 6 } });

  const [activeTab, setActiveTab] = useState('Kurumsal');
  const toggleDonator = type => setActiveTab(type);

  if (corporateLoading || individualLoading) {
    return (
      <div className="widget-donators">
        <Skeleton width="148px" height="50px" />
        <Skeleton width="100%" height="342px" style={{ marginTop: 25 }} />
        <Skeleton width="250px" height="75px" style={{ marginTop: 25 }} />
      </div>
    );
  }

  if (corporateError || individualError) {
    return (
      <div className="widget-donators">
        <Alert
          message="Bir hata oluştu. Lütfen sayfayı yenileyerek tekrar deneyiniz."
          variant="danger"
        />
      </div>
    );
  }

  return (
    <div className="widget-donators">
      <nav>
        {tabs.map(tab => (
          <button
            type="button"
            className={cls({
              'button donator tab-buttons': true,
              active: activeTab === tab,
            })}
            key={tab}
            onClick={() => toggleDonator(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      {activeTab === 'Kurumsal' && (
        <SponsorsTab sponsors={corporateData.corporateSponsors} />
      )}
      {activeTab === 'Bireysel' && (
        <IndividualTab individuals={individualData.individualSponsors} />
      )}
      <a
        href="https://ucurtmaprojesi.com/kampanyalar"
        className="button secondary-button blue-border fluid"
      >
        Kampanyaları Görüntüle
      </a>
    </div>
  );
};

export default Donators;
