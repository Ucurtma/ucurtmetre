import React from 'react';
import cls from 'classnames';
import './Thermometer.scss';
import { Link } from 'react-router-dom';

const Thermometer = () => {
  const target = 100000;
  const currentValue = 50000;
  const thermometerHeight = 342;
  const currentHeight = (currentValue * 100) / target;
  const milestoneCount = 20000;
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
