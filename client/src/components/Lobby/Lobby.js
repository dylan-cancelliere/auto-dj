import React, {Component} from "react";
import "./Lobby.css";
import Room from '../Rooms/Rooms';
import WebPlayer from "./WebPlayer";

class Lobby extends Component {
    constructor(props){
        super(props);
        this.state = {auth_token: "", auth: false};
    }
    render() {
        if (this.state.auth === false && window.location.hash.slice(8, 20) === "access_token"){
            this.setState({auth_token: window.location.hash.slice(21), auth: true})
        }
        return (
            <div className="web-player-container">
                <WebPlayer auth={this.state.auth} auth_token={this.state.auth_token}/>
            </div>

        )
    }
}

export default Lobby;
