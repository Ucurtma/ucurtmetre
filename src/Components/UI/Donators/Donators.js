import React from 'react';
import './Donators.scss';
import { Link } from 'react-router-dom';

const active = false;
const toggleDonator = (type) => {
    [...document.querySelectorAll('li.nav-link')].map((link) => link.classList.contains('active') && link.classList.remove('active'));
    document.querySelector(`li.nav-link.donator[donator-type=${type}]`).classList.add('active');

    [...document.querySelectorAll('.list.donators')].map((list) => list.classList.contains('active') && list.classList.remove('active'));
    document.querySelector(`.list.donators[donator-type=${type}]`).classList.add('active');
};

const Donators = () => {
  return (
    <div className="widget-donators">
      <nav>
          <ul>
              <li className="nav-link donator active" donator-type="company" onClick={() => toggleDonator('company')}>Kurumsal</li>
              <li className="nav-link donator" donator-type="individual" onClick={() => toggleDonator('individual')}>Bireysel</li>
          </ul>
      </nav>
      <div id="listCompanies" donator-type="company" className="list donators companies active">
          <div className="gold">
              <h3>GOLD SPONSORLAR</h3>
              <ul className="company-list">
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
              </ul>
          </div>
          <div className="silver">
              <h3>SILVER SPONSORLAR</h3>
              <ul className="company-list">
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
              </ul>
          </div>
          <div className="bronze">
              <h3>BRONZE SPONSORLAR</h3>
              <ul className="company-list">
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
                  <li className="company">
                      <div className="logo">
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <ul id="listIndividuals" donator-type="individual" className="list donators individuals">
          <li className="donator">
              <p className="name">0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d</p>
              <p className="amount">5.500 TRYB</p>
          </li>
          <li className="donator">
              <div className="picture">
                  <img src="./logo192.png" alt=""/>
              </div>
              <p className="name">Eliza Lambert</p>
              <p className="amount">1.000 TRYB</p>
          </li>
          <li className="donator">
              <div className="picture">
                  <img src="./logo192.png" alt=""/>
              </div>
              <p className="name">Hu** B**</p>
              <p className="amount">790 TRYB</p>
          </li>
          <li className="donator">
              <p className="name">0x0d9d9bbbd50dc1499ed2fa6375cba14f64e0a567b956f7d472d48ea4b166242d</p>
              <p className="amount">4500 TRYB</p>
          </li>
          <li className="donator">
              <div className="picture">
                  <img src="./logo192.png" alt=""/>
              </div>
              <p className="name">Michael Flowers</p>
              <p className="amount">2300 TRYB</p>
          </li>
      </ul>
      <Link className="button secondary-button blue-border fluid">
        Kampanyaları Görüntüle
      </Link>
    </div>
  );
};

export default Donators;
