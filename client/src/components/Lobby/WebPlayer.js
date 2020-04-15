import React, {Component} from "react";
import "./WebPlayer.css";
import SpotifyPlayer from 'react-spotify-web-playback';

class WebPlayer extends Component{
    render(){
        return(
            <div className="web-player">
                <SpotifyPlayer token={this.props.auth_token}
                               autoPlay="true"
                               name="AutoDJ"
                               styles={{
                                   bgColor: '#00072d'
                               }}
                />
            </div>
        )
    }
}

export default WebPlayer
