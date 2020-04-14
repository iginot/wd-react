//react core
import React from 'react';

//assets and style
import './App.css';

//components
import Card from './Card.js'

function HomePage() {
  // data
  const information = require('./information.json')
  const cards = information.map((item) =>
    <Card key={item.id} title={item.title} channelName={item.channelName} views={item.views} 
    media={'images/' + item.media + '.jpg'} channelThumb={'images/channels/' + item.channelThumb + '.jpg'}
    id={item.id}
    />
  )

  // render
  return (
    <div className="App">
      <header className="App-header">
    <h1 id="homePageHeading">Recommended</h1>   
      <div class="grid">
        {cards}
      </div>
      </header>
    </div>
  );
}

export default HomePage;
