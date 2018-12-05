import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Cards from './Components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Cards/>
      </div>
    );
  }
}

export default App;
