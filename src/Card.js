import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <article class="videoPreview">
            <div>
            <Link to={'/video/' + props.id}>  
            <img src={props.media}/>
            </Link>  
            <h1>{props.title}</h1>
            <img class='smallImage' src={props.channelThumb}/>
            <p class="videoPreviewText">{props.channelName} </p>
            <p class="videoPreviewText">{props.views} views</p>
            </div>
        </article>
    )
}

export default Card