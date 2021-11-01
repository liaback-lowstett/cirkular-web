import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home/Home'
import Platform from './pages/Platform/Platform'
import Aquafeed from './pages/Aquafeed/Aquafeed'
import Dairyprotein from './pages/Dairyprotein/Dairyprotein'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/aquafeed" component={Aquafeed} />
        <Route path="/dairyprotein" component={Dairyprotein} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
