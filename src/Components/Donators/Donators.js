import React, { useState } from 'react';
import cls from 'classnames';
import { useQuery } from '@apollo/client';
import './Donators.scss';
import IndividualTab from '../IndividualTab/IndividualTab';
import SponsorsTab from '../SponsorsTab/SponsorsTab';
import {
  GET_CORPORATE_SPONSORS,
  GET_INDIVIDUAL_SPONSORS,
} from '../../Utils/Queries';
import Loader from '../Loader/Loader';
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
  } = useQuery(GET_INDIVIDUAL_SPONSORS, { variables: { top: 5 } });

  const [activeTab, setActiveTab] = useState('Kurumsal');
  const toggleDonator = type => setActiveTab(type);

  if (corporateLoading || individualLoading) {
    return (
      <div className="widget-donators with-loader">
        <Loader />
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
