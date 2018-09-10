import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        {/* Nav */}
        <div className="header fixed-top">

          <div className="headerBar">
            <div className="logo">OCULAR</div>
            <button type="button" name="button btn-primary" className="btn btn-primary menuBtn"><i className="fas fa-bars fa-3x"></i>Menu</button>
          </div>

          <ol className="menu">
            <li className="menuItem">Home</li>
            <li className="menuItem">Designers</li>
            <li className="menuItem">Contact</li>
          </ol>

        </div>
      </div>
    );
  }
}

export default App;
