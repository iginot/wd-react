import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Video() {
  const information = require('./information.json')

  const currentLink = window.location.href
  const placeInLink = currentLink.search('video/')
  const videoID = currentLink.substring(placeInLink + 6)

  const filteredInformation = information.filter(el => el.id == videoID)
    
    return(
        <div>
            <p>
                { filteredInformation.map(item => (
                    <article>
                        <p class="video"> 
                        <video controls>
                             <source src={"/videos/" + item.media +".mp4"} type="video/mp4"/>
                        </video></p>
                        <div class="videoText">
                            <h1 class="videoTitle">{item.title}</h1>
                            <p class="videoSubtitle">{item.views} views - {item.uploadDate}</p>
                            <img class='channelImage' src={'/images/channels/' + item.channelThumb + '.jpg'}/>
                            <p class="channelName">{item.channelName}</p>
                            <p class="channelSubscription">{item.suscribers} subscribers</p>
                            <p class="channelText">{item.description}</p>
                        </div>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                        <p class="backButton">BACK TO HOME</p>
                        </Link>
                    </article>
                ))}
            </p>
        </div>
    );
}

export default Video