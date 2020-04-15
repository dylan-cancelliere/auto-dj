import React, {Component} from "react";

class WebPlayer extends Component{
    render(){
        return(
            <div className="web-player">
                <script src="https://sdk.scdn.co/spotify-player.js">
                </script>
                {window.onSpotifyWebPlaybackSDKReady = () => {
                    const token = 'BQChHZ7jKPBg0BOV5koUpbJvwOgF7ye-KtjUdOhVjo4JJQ85nGybswb--kwPagI2Anj2Il6l0e3DegsQQZSk8vVPcgOPYPXz3RfPASMnsrx6gI4ks7KLCs2VZKSuWud4npeoQbwtayf6O9gn_XanA4kjzl4qEEii5yx9sP2wtLeRUIVbr2CN1c4BtmBUcw'; //Auth Token
                    const player = new Spotify.Player({
                        name: 'Web Playback SDK Quick Start Player',
                        getOAuthToken: cb => {cb(token);}
                    });

                    //Error handling
                    player.addListener('initialization_error', ({message}) => {
                        console.error(message); });
                    player.addListener('authentication_error', ({message}) => {
                        console.error(message); });
                    player.addListener('account_error', ({message}) => {console.error(message); });
                    player.addListener('playback_error', ({message}) => {console.error(message); });

                    //Playback status updates
                    player.addListener('player_state_changed', state => {console.log(state); });

                    //Ready
                    player.addListener('ready', ({device_id}) => {
                        console.log('Ready with Device ID', device_id);
                    });

                    //Connect to the player
                    player.connect();
                }}
            </div>
        )
    }
}

export default WebPlayer
