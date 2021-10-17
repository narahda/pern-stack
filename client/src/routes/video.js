import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';


const VideoPlayer = () => {
    return(
        <div>
            <ReactHlsPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
            />
        </div>
    )
};


export default VideoPlayer;