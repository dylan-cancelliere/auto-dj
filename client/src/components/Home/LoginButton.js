import React, { Component } from 'react';
//import './LoginButton.css';

class LoginButton extends Component {
    render(){
        return(
            <div className="container-oauth">
                <a href="http://localhost:5000/login">
                    Log in to Spotify
                </a>
            </div>
        )
    }
}

export default LoginButton;
