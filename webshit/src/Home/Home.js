import SearchBarContainer from "./SearchBarContainer";
import CreateRoomContainer from "./CreateRoomContainer";
import React, {Component} from "react";
import "./Home.css";

class Home extends Component{
    render(){
        return(
            <div>
                <div id="toptext">
                    <h1>Join a Room</h1>
                </div>
                <div id="bottomtext">
                    <h1>or</h1>
                </div>
                <div>
                    <SearchBarContainer/>
                    <CreateRoomContainer/>
                </div>
            </div>
        );
    }
}

export default Home;
