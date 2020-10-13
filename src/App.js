import React, { lazy, Suspense } from 'react';
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
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Redirecting from './Components/Redirecting/Redirecting';
import CookiePolicy from './Components/Agreements/CookiePolicy';

const ClarificationText = lazy(() =>
  import('./Components/Agreements/ClarificationText')
);
const DirectConsent = lazy(() =>
  import('./Components/Agreements/DirectConsent')
);
const UserAgreement = lazy(() =>
  import('./Components/Agreements/UserAgreement')
);

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<p>Loading</p>}>
        <Router>
          <div>
            <Header />

            <Switch>
              <Route path="/auth/*" component={Redirecting} />
              <Route
                path="/transaction-history"
                component={TransactionHistory}
              />
              <Route path="/donate-all" component={DonateAll} />
              <Route path="/kvkk" component={ClarificationText} />
              <Route path="/direct-consent" component={DirectConsent} />
              <Route path="/user-agreement" component={UserAgreement} />
              <Route path="/cookie-policy" component={CookiePolicy} />
              <Route path="/" component={Home} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </div>
          <Footer />
          <Stairs />
        </Router>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
