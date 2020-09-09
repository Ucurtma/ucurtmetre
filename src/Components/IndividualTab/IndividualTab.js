import React from 'react';
import './IndividualTab.scss';
import Alert from '../Alert/Alert';

function IndividualTab({ individuals }) {
  return (
    <ul className="list individuals">
      {individuals.length > 0 ? (
        individuals.map((individual, individualIndex) => {
          return (
            <li className="donator" key={individualIndex.toString()}>
              <p className="name">
                {individual.name ? individual.name : individual.address}
              </p>
              <p className="amount">{Math.floor(individual.amount)} TRYB</p>
            </li>
          );
        })
      ) : (
        <Alert message="Henüz kampanyalara destek olan kimse bulunmamaktadır." />
      )}
    </ul>
  );
}

export default IndividualTab;
