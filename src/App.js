import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Cards from './Components/Cards/Cards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h5 className="headerText">Created By Anit Kumar</h5>
        <Cards/>
       
      </div>
    );
  }
}

export default App;
