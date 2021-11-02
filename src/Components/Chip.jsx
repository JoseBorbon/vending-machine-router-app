import React, { Component } from 'react';
import './Chip.css';

class Chip extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.altText}
        className="Chip"
        style={{
          position: 'absolute',
          top: `${this.props.yCoord}px`,
          left: `${this.props.xCoord}px`,
          zIndex: this.props.zIdx,
        }}
      />
    );
  }
}

export default Chip;
