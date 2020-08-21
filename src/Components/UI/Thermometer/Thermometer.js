import React from 'react';
import './Thermometer.scss';
import { Link } from 'react-router-dom';

const Thermometer = () => {
  const target = 240000;
  const currentValue = 185210;
  const thermometerHeight = 342;
  const currentHeight = (currentValue * 100) / target;

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
        {/* todo: add ruler
          <div className="left">left</div>
        */}
        <div
          className="current-value half"
          style={{ height: `${currentHeight}%` }}
        />
        <div className="bottom" />
        <div className="body" />
        <div
          className="right"
          style={{ top: `calc(100% - ${currentHeight}%)` }}
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
      <Link className="button primary-button yellow">
        Tüm Kampanyalara Destek Ol
      </Link>
    </div>
  );
};

export default Thermometer;
