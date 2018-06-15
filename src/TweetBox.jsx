import React, { Component } from 'react';

class TweetBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }


    render() {
        return (
            <div>
                <input type="text"
                    placeholder={this.props.placeholder}
                    onChange={(tweet) => this.setState({ text: tweet.target.value })} />
                <button onClick={() => this.props.onTweet(this.state.text)}> tweet </button>
            </div>
        )
    }
}

export default TweetBox;