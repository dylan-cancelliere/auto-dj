import React, {Component} from "react";
import SpotifyPlayer from 'react-spotify-web-playback';

class WebPlayer extends Component{
    render(){
        return(
            <div className="web-player">
                <SpotifyPlayer token="BQCcRTUTwrq5viuXYEyEnoyWx8fBGEJ3MDr7AwxkjxUFBfWfKUMWJMiVk29uS3LtVLLDMF-TKyvez-JOqVwBf7PAiQbgzX4UmFyIcHrbvv7xmXcWNiwj0SjHt_1FXK2nbYLAdJ4wPug2SNi5esIN2r0NPVwa2ozcBo60hvA-lYicP-PLm4r3ocaroaGwEQ"
                               uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}/>
            </div>
        )
    }
}

export default WebPlayer
