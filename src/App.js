import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import List from './components/List/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      gifs: []
    }
  }
  searchApi = (e) => {
    console.log('e', e);
    this.setState({
      gifs: [{name: 'cat'}, {name: 'dog'}]
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search onSearch={this.searchApi}/>
        <List gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
