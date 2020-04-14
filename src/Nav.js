import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
    return(
        <Link to='/'>
        <img id='appLogo' src='./images/logo/logo-light.svg' />
        </Link>
    );
}

export default Nav;