import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sardines.css';

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines-container">
        <div className="Sardines-back-container">
          <Link className="Sardines-go-back" exact to="/">
            Go Back
          </Link>
          <h2>HA! YOU DIDNT EXPECT THIS!</h2>
        </div>
      </div>
    );
  }
}

export default Sardines;
