import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';
import { Button, FormGroup, FormLabel, FormControl, Form} from 'react-bootstrap';
import UserFinder from '../../APIs/UserFinder';


const VideoPlayer = () => {
    const [video, setVideo] = useState("");
    const [selected, setSelected] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {  
            const response = await UserFinder.post("/video ", {
                video
            });
            console.log(response);
        } catch (err) {
            console.log("uh oh")
        }
    };

    return(
        <div>
            <Form>
                <FormGroup>
                    <FormLabel>rtsp link</FormLabel>
                    <FormControl value={video} onChange= {e => setVideo(e.target.value)}
                    type="text" placeholder="rtsp link"/>
                    <br />
                    <Button onClick={handleSubmit} variant="outline-success" align="right" type="submit">watch</Button>
                </FormGroup>
            </Form>
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