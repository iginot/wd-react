//react core
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//assets and style
import './App.css';

//components
import HomePage from './HomePage.js'
import Nav from './Nav.js'
import Video from './Video.js'

function App() {
  // render
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/video/:id" component={Video} />
    </div>
    </Router> 
  );
}

export default App;
