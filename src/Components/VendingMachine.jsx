import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine-container">
        <div className="VendingMachine-welcome">
          <h1>HELLO I AM A VENDING MACHINE WHAT WOULD YOU LIKE TO HAVE?</h1>
        </div>
        <nav className="VendingMachine-nav">
          <Link exact to="/soda">
            SODA
          </Link>
          <Link exact to="/chips">
            CHIPS
          </Link>
          <Link exact to="/sardines">
            SARDINES
          </Link>
        </nav>
      </div>
    );
  }
}

export default VendingMachine;
