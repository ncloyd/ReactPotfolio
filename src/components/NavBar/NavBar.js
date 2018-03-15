import React from 'react';
import './NavBar.css';

const NavBar = () => (

//  <nav className="navbar navbar-expand-lg navbar-light bg-light">
// 	  <a className="navbar-brand" href="#">Nicole</a>
// 	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
// 	    <span className="navbar-toggler-icon"></span>
// 	  </button>

// 	  <div className="collapse navbar-collapse justify-content-end">
// 	    <div className="nav navbar-nav">
// 	      <a className="nav-item nav-link" href="/#">Home</a>
// 	      <a className="nav-item nav-link" href="/portfolio#">Portfolio</a>
// 	      <a className="nav-item nav-link" href="/contact#">Contact</a>
// 	    </div>
// 	  </div>
// </nav>

 <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">Nicole</a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span>
 			</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
);

export default NavBar;
