import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import App from './App';
import './index.css';
import Login from './auth/login'
import auth from './auth/auth'


function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({ 
            pathname:'/app/login/',
            state: {nextPathname: '/app/'}
        })
    }
}
ReactDOM.render(
  <Router.Router history={Router.browserHistory}>
        <Router.Route path='/app/login/' component={Login} />
        <Router.Route path='/app/' component={App} onEnter={requireAuth} />
    </Router.Router>,
  document.getElementById('app')
  // document.getElementById('root')
);
