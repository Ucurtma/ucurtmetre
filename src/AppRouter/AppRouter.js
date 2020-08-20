import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import NotFound from '../Components/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
