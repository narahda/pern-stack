import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';
import { Button, FormGroup, FormLabel, FormControl, Form} from 'react-bootstrap';
import UserFinder from '../../APIs/UserFinder';


const VideoPlayer = () => {


    return(
        <div>

            <br />
            <ReactHlsPlayer
                src="http://localhost:4000/index.m3u8"
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
            />
        </div>
    )
};


export default VideoPlayer;