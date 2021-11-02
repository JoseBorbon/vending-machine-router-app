import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Soda.css';

class Soda extends Component {
  render() {
    return (
      <div className="Soda-container">
        <img
          className="Soda-can-one"
          src="https://purepng.com/public/uploads/large/purepng.com-coca-cola-cancoca-colacokecarbonated-soft-drinksoft-drinkcoke-can-1411527233399fihip.png"
        />
        <div className="Soda-back-container">
          <Link className="Soda-go-back" exact to="/">
            Go Back
          </Link>
          <h2>GULP GULP GULP</h2>
        </div>
        <img
          className="Soda-can-two"
          src="https://purepng.com/public/uploads/large/purepng.com-coca-cola-cancoca-colacokecarbonated-soft-drinksoft-drinkcoke-can-1411527233399fihip.png"
        />
      </div>
    );
  }
}

export default Soda;
