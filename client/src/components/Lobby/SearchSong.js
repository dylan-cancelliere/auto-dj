import React, {Component} from "react"
import "./SearchSong.css";

class SearchResults extends Component{
    constructor(props) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    keyPress(e){
        if(e.keyCode === 13){

            //console.log(e.target.value);
            const link = 'http://localhost:5000/search/song/' + encodeURIComponent(e.target.value) + '/auth/' + this.props.auth_token;
            this.props.btn(link);
        }
    }
    render(){
        return(
            <input placeholder="Enter text" className="search-song" onKeyDown={this.keyPress}/>
        );
    }
}

export default SearchResults;
