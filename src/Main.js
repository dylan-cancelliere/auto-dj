import React, {Component} from "react";
import "./Main.css"
import Navbar from "./Navbar";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import Lobby from "./Lobby/Lobby";

class Main extends Component{
    render(){
        return(
            <div className="container">
                <Router>
                    <Navbar/>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/lobby" component={Lobby}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;
