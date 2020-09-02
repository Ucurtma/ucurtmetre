import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import DonateAll from './Components/DonateAll/DonateAll';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Stairs from './Components/UI/Stairs/Stairs';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/donate-all" component={DonateAll} />
          <Route path="/" component={Home} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <Stairs />
    </Router>
  );
}

export default App;
