import React from 'react';
import './Thermometer.scss';
import { Link } from 'react-router-dom';

const Thermometer = () => {
  return (
    <div className="widget-thermometer">
      <div className="target-value">
        <span className="title">Hedeflenen Miktar</span>
        <span className="value">
          240.000<span className="currency">TRYB</span>
        </span>
      </div>
      <div className="thermometer">
        <div className="current-value half">
          <div className="value">
            <div className="price">
              185.210 <span className="currency">TRYB</span>
            </div>
            <div className="subtext">Şimdiye Kadar Toplanan</div>
          </div>
        </div>
        <div className="bottom" />
        <div className="body" />
      </div>
      <Link className="button primary-button yellow">
        Tüm Kampanyalara Destek Ol
      </Link>
    </div>
  );
};

export default Thermometer;
