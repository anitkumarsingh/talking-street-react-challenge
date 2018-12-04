import React from 'react';
// Importing css file and images
import logo from '../../Images/logo.svg';
import './Header.css';

const Header = () =>{
    return(
        <div className="header-container">
             <img src={logo} className="App-logo" alt="logo" />
             <p className="website__title">Talking Street Coding Assignment</p>
        </div>
    )
}
export default Header;