import SearchBarContainer from "./SearchBarContainer";
import CreateRoomContainer from "./CreateRoomContainer";
import React, {Component} from "react";
import "./Home.css";

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <div className="top-text">
                    <h1>Join a Room</h1>
                </div>
                <SearchBarContainer/>
                <div className="bottom-text">
                    <h1>or</h1>
                </div>
                <CreateRoomContainer/>
            </div>
        );
    }
}

export default Home;
