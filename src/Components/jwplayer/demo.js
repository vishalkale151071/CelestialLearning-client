import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player'
export default function Demo() {
    return(
        <ReactJWPlayer 
            playerID='4l9dIkdn'
            playerScript='https://cdn.jwplayer.com/libraries/kMVvGqfm.js'
            file='https://content.jwplatform.com/videos/NRO32dhz-xRznb4b4.mp4'
        />
    )
}