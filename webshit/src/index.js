import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import SearchBarContainer from "./SearchBarContainer";
import CreateRoomContainer from "./CreateRoomContainer";

ReactDOM.render(
    <div>
        <SearchBarContainer/>
        <CreateRoomContainer/>
    </div>,
    document.querySelector("#container")
);
