import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Lobby from "./Lobby";
import "./Main.css"

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <HashRouter>
                <p className="App-intro">;{this.state.apiResponse}</p>
                <div>
                    <div id="title"><h1>AutoDJ</h1></div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/lobby">Lobby</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/lobby" component={Lobby}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
