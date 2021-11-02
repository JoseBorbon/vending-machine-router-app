import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Chip from './Chip';
import './Chips.css';

const URL =
  'https://www.gogetdelivery.com/media/catalog/product/cache/1/image/1252x1252/9df78eab33525d08d6e5fb8d27136e95/2/8/2840019914cf.gif';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = { chips: [], count: 0 };
    this.addChips = this.addChips.bind(this);
  }

  addChips() {
    this.setState((st) => {
      console.log(this.props.imgSrc);
      return {
        chips: [
          ...st.chips.slice(),
          {
            url: URL,
            xCoord: -300 + Math.floor(Math.random() * 900),
            yCoord: Math.floor(Math.random() * -300),
          },
        ],
        count: st.count + 1,
      };
    });
  }
  render() {
    const chips = this.state.chips.map(({ url, yCoord, xCoord }, idx) => (
      <Chip
        key={uuid()}
        src={url}
        yCoord={yCoord}
        xCoord={xCoord}
        zIdx={-idx}
        altText={'lays-bag-of-chips'}
      />
    ));
    return (
      <div className="Chips-container">
        {chips}
        <div className="count-container">
          <Link className="Chips-go-back" to="/">
            Go Back
          </Link>
          <h1>Bags Eaten: {this.state.count}</h1>
        </div>
        <button onClick={this.addChips}>Eat a Bag Of Chips!</button>
      </div>
    );
  }
}

export default Chips;
