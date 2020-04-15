import React, {Component} from "react";

class WebPlayer extends Component{
    render(){
        return(
            <div className="web-player">
                <script src="https://sdk.scdn.co/spotify-player.js"></script>
            </div>
        )
    }
}

export default WebPlayer
