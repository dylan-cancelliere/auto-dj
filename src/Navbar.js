import React from "react";
import {slide as Menu} from "react-burger-menu";
import {HashRouter, Link} from "react-router-dom";
import "./Navbar.css";

export default props => {
    return(
        <Menu>
            <HashRouter>
                <ul>
                    <li>
                        <Link exact to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/lobby">
                            Lobby
                        </Link>
                    </li>
                </ul>
            </HashRouter>
        </Menu>
    )
}
