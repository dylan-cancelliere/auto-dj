import React, {Component} from "react";
import "./MenuButton.css";
import MenuContainer from "./MenuContainer";

class MenuButton extends Component{
    constructor(props, context) {
        super(props, context);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    render() {
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}/>
        );
    }
    componentWillMount() {
        <MenuContainer/>
    }
}

export default MenuButton;
