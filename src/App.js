import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Cards from './Components/Cards/Cards';
// import Footer from './Components/Footer/Footer';
import hacker from './Images/hackerrank-brands.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
        {/* <Footer/> */}
        <h5 className="headerText"> &copy; 2018, Coded By Anit Kumar</h5>
        <div className="icons-bar">
          <a
            href="https://www.linkedin.com/in/anit-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
            id="profile-link"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://www.freecodecamp.org/anitkumar"
            id="profile-link"
            target="_blank"
            rel="noopener noreferrer"
            className="freecodecamp"
          >
            <i className="fa fa-free-code-camp" />
          </a>
          <a
            href="https://codepen.io/Anitkumar"
            className="codepen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-codepen" />
          </a>
          <a
            href="https://github.com/anitkumarsingh"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="https://www.hackerrank.com/anit123"
            className="hackerrank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={hacker}
              width="25px"
              height="25px"
              alt=""
              className="svg-icon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
