import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    return this.props.clickFunction(this.props.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
