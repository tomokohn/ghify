import React, { Component } from 'react';
// import './Navbar.css';

class Search extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.nativeEvent.target.value)
    this.props.onSearch(event);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input"/>
          <button type="submit">search</button>
        </form>
      </div>
    )
  }
}



export default Search;

