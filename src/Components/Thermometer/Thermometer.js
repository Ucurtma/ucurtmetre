import React from 'react';
import cls from 'classnames';
import './Thermometer.scss';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@apollo/client';
import { ALL_CAMPAIGN_DETAILS } from '../../Utils/Queries';
import Alert from '../Alert/Alert';

const Thermometer = () => {
  const { data, loading, error } = useQuery(ALL_CAMPAIGN_DETAILS);

  if (loading) {
    return (
      <div className="widget-thermometer">
        <Skeleton width="148px" height="24px" />
        <Skeleton width="250px" height="45px" style={{ marginTop: 10 }} />
        <Skeleton width="50px" height="342px" style={{ marginTop: 25 }} />
        <Skeleton width="250px" height="75px" style={{ marginTop: 25 }} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="widget-thermometer">
        <Alert
          message="Bir hata oluştu. Lütfen sayfayı yenileyerek tekrar deneyiniz."
          variant="danger"
        />
      </div>
    );
  }

  const target = data.allCampaignDetails.targetAmount;
  const currentValue = data.allCampaignDetails.collectedAmount;
  const thermometerHeight = 342;
  const currentHeight = (currentValue * 100) / target;
  const milestoneCount = 48000;
  const passiveRulerCount = 5;

  return (
    <div className="widget-thermometer">
      <div className="target-value">
        <span className="title">Hedeflenen Miktar</span>
        <span className="value">
          {new Intl.NumberFormat('tr-TR').format(target)}
          <span className="currency">TRYB</span>
        </span>
      </div>
      <div className="thermometer-box" style={{ height: thermometerHeight }}>
        <div className="left">
          {new Array(Math.round((target / milestoneCount) * passiveRulerCount))
            .fill('')
            .map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex.toString()}
                  className={cls('left-item', {
                    active: itemIndex % passiveRulerCount === 0,
                  })}
                />
              );
            })}
        </div>

        <div
          className="current-value half"
          style={{ height: `${currentHeight}%` }}
        />
        <div className="bottom" />
        <div className="body" />
        <div
          className="right"
          style={{ top: `calc(100% - ${currentHeight}% - 30px)` }}
        >
          <div className="value">
            <div className="price">
              {new Intl.NumberFormat('tr-TR').format(currentValue)}
              <span className="currency">TRYB</span>
            </div>
            <div className="subtext">Şimdiye Kadar Toplanan</div>
          </div>
        </div>
      </div>
      <Link to="/donate-all" className="button primary-button yellow">
        Tüm Kampanyalara Destek Ol
      </Link>
    </div>
  );
};

export default Thermometer;
