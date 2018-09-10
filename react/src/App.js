import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        {/* Nav */}
        <div className="header">

          <div className="headerBar">
            <div className="logo">OCULAR</div>
            <button type="button" name="button" className="menuBtn"><i className="fas fa-bars"></i></button>
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
