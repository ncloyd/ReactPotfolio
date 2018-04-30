//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import './materialize.css';
import './style.css';
// import HomePage from './containers/Home';
import Jumbo from './components/Jumbo';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
  	<div>
	  	<Jumbo />
	  	<About />
	  	<Contact />
	  	<Portfolio />
		<Footer />
	</div>
  </div>
);

export default App;
