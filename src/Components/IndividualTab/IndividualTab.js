import React from 'react';
import './IndividualTab.scss';

function IndividualTab({ individuals }) {
  return (
    <ul className="list individuals">
      {individuals?.map((individual, individualIndex) => {
        return (
          <li className="donator" key={individualIndex.toString()}>
            <p className="name">
              {individual.name ? individual.name : individual.address}
            </p>
            <p className="amount">{individual.amount} TRYB</p>
          </li>
        );
      })}
    </ul>
  );
}

export default IndividualTab;
