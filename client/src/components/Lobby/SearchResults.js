import React, {Component} from "react";

class SearchResults extends React{
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const link = this.props.link
        console.log(link);
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                //Error handling
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        console.log(this.state.items);
    }

    render(){
        return(
            <div>Hi</div>
        )

    }
}
