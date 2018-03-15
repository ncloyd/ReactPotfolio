//import React, { Component } from 'react';
import React from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';


const App = () => (
  <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
      </div>
  </Router>
);


export default App;
