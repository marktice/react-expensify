import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
  return <div>This is from my dashboard component</div>;
};
const AddExpensePage = () => {
  return <div>This is from my add expense component</div>;
};
const EditExpensePage = () => {
  return <div>This is from my edit expense component</div>;
};
const HelpPage = () => {
  return <div>This is from my help page component</div>;
};
const NotFoundPage = () => {
  return (
    <div>
      404 - <Link to="/">Go Home</Link>
    </div>
  );
};
const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector('#app'));
