import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Transactions from './Transactions/Transactions';

var pageID = document.getElementById('app').childNodes[1].id;

if ( pageID == 'home') {
  ReactDOM.render(<Home />, document.getElementById('home'));
} else if ( pageID == 'dashboard') {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
} else if ( pageID == 'transactions') {
  ReactDOM.render(<Transactions />, document.getElementById('transactions'));
}
