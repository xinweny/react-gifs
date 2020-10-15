import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleUpdate = (event) => {
    return this.props.searchFunction(event.target.value);
  }

  handleFocus = () => {
    this.setState({
      focused: true
    });
  }

  handleBlur = () => {
    this.setState({
      focused: false
    });
  }

  render() {
    const classes = `form-control form-search ${this.state.focused ? 'focused' : 'blurred'}`;

    return (
      <div>
        <input type="text" className={classes} onChange={this.handleUpdate} onFocus={this.handleFocus} onBlur={this.handleBlur} />
      </div>
    );
  }
}

export default SearchBar;
