import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h5 className="headerText">Created By Anit Kumar</h5>
        <Cards/>
        <Footer/>
      </div>
    );
  }
}

export default App;
