import React, { Component } from 'react';
import './App.css';

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div className="tweet">
                <div className="top-tweet bg-info">
                    <img src="https://i.imgur.com/offAvzq.jpg" alt="" className="avatar"/>
                    <p>@TuSoTr /{new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</p>
                </div>
                {tweet.text}
                <div className="button-group">
                    <a href='#' onClick={() => this.props.handleLike(tweet)}>
                        {tweet.liked ? 'Unlike' : 'Like'} Post
                    </a>
                    <button onClick={() => this.props.handleRemove(tweet)}
                    className="btn">Delete</button>
                </div>
            </div>
        )
    }
}
export default Tweet;