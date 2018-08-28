import React from 'react';
import './App.css';
import './materialize.css';
import Jumbo from './components/Jumbo';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

import Footer from './components/Footer';

const App = () => (
  <div className="App">
  	<div>
	  	<Jumbo />
	  	<About />
	  	<Contact />
	  	<Card />
		<Footer />
	</div>
  </div>
);

export default App;