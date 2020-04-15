import React, {Component} from "react";
import "./Lobby.css";
import Room from '../Rooms/Rooms';
import WebPlayer from "./WebPlayer";
import SearchSong from "./SearchSong";
import SearchResults from "./SearchSong";

class Lobby extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth_token: "",
            auth: false,
            hide_search: false,
            hide_results: true,
            link: ''
        };
        this.hideButton = this.hideButton.bind(this);
    }

    hideButton(lnk){
        this.setState({
            hide_search: true,
            hide_results: false,
            link: lnk
        });
    }



    render() {
        if (this.state.auth === false && window.location.hash.slice(8, 20) === "access_token"){
            this.setState({auth_token: window.location.hash.slice(21), auth: true})
        }
        return (
            <div className="web-player-container">
                <WebPlayer auth={this.state.auth} auth_token={this.state.auth_token}/>
                <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                {!this.state.hide_search && <SearchSong btn={this.hideButton} auth_token={this.state.auth_token}/>}
                {!this.state.hide_results && <SearchResults link={this.state.link}/>}
            </div>
        )
    }
}

export default Lobby;
