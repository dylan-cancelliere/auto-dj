import React, {Component} from "react";
import "./SearchSong.css";

class SearchSong extends Component{
    constructor(props) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    handleChange(event){
        const text = event.target.value;
        this.props.onChange(this.props.id, text);
    }

    keyPress(e){
        if(e.keyCode === 13){
            const link = 'http://localhost:5000/search/song/' + encodeURIComponent(e.target.value) + '/auth/' + this.props.auth_token;
            this.props.btn();
        }
    }
    render(){
        return(
            <input placeholder="Enter text" className="search-song" onKeyDown={this.keyPress}/>
        );
    }
}

export default SearchSong;
