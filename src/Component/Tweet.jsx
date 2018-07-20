import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateComment from './CreateComment'
import Comment from './Comment'

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComment: false,
            text: "",
            comments: []
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleCreateComment = this.handleCreateComment.bind(this);
    }

    handleComment() {
        this.setState({ activeComment: !this.state.activeComment });
    }

    handleType(e) {
        this.setState({text: e.target.value});
    }

    handleCreateComment() {
        let commentArr = this.state.comments;
        commentArr.push(this.state.text);
        this.setState({comments: commentArr});
    }

    render() {
        let tweet = this.props.tweet;
        return (
            <div className="tweet">
                <div className="top-tweet bg-info">
                    <img src="https://i.imgur.com/offAvzq.jpg" alt="" className="avatar" />
                    <p>@TuSoTr /
                    {tweet.timeStamp.toLocaleTimeString() + tweet.timeStamp.toLocaleDateString()}
                    </p>
                </div>
                {tweet.text}
                <div className="button-group">
                    <a href='#' onClick={() => this.props.handleLike(tweet)}>
                        {tweet.liked ? 'Unlike' : 'Like'}
                        <FontAwesomeIcon icon="heart" />
                    </a>
                    <a href="#" onClick={this.handleComment}><FontAwesomeIcon icon="comment" /></a>
                    <a href="#" onClick={() => this.props.handleReTweet(tweet)}><FontAwesomeIcon icon="retweet" /></a>
                    <button onClick={() => this.props.handleRemove(tweet)}
                        className="btn btn-danger"><FontAwesomeIcon icon="trash" /></button>
                </div>
                <hr />
                {this.state.activeComment ?
                    <CreateComment
                        handleType={this.handleType}
                        handleCreateComment={this.handleCreateComment}
                    />
                    : null}
                {this.state.comments.map((m, i) => <Comment key={i} comment={m} />)}
            </div>
        )
    }
}
export default Tweet;