import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import BanksPage from './containers/BanksPage';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="banks" component={BanksPage}/>
      {/*<Route path="form" component={FormPage}/>*/}
      {/*<Route path="table" component={TablePage}/>*/}
    </Route>
  </Route>
);
