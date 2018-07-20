import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TweetBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            textNum : 140
        }
    }

    handleChange(text) {
        this.setState({
            text: text,
            textNum : 140 - text.length
        })
    }

    render() {
        return (
            <div>
                <img src="https://i.imgur.com/offAvzq.jpg" alt="" className="img-thumbnail"/>
                <input
                    className="form-control" 
                    type="text"
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.handleChange(e.target.value)} 
                />
                    <p>{this.state.textNum}</p>
                    <button 
                        onClick={() => this.props.onTweet(this.state.text)} 
                        disabled={this.state.textNum < 0}
                        className="btn btn-info"
                    > TWEET </button> 
            </div>
        )
    }
}

export default TweetBox;