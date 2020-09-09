import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import DonateAll from './Components/DonateAll/DonateAll';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Stairs from './Components/Stairs/Stairs';
import client from './Utils/ApolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />

          <main>
            <Switch>
              <Route path="/donate-all" component={DonateAll} />
              <Route path="/" component={Home} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </main>
        </div>
        <Footer />
        <Stairs />
      </Router>
    </ApolloProvider>
  );
}

export default App;
