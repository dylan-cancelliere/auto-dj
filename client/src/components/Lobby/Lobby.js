import React, {Component} from "react";
import "./Lobby.css";
import Room from '../Rooms/Rooms';
import WebPlayer from "./WebPlayer";

class Lobby extends Component {
    render() {
        return (
            <div className="web-player-container">
                <WebPlayer/>
            </div>

        )
    }
}

export default Lobby;
