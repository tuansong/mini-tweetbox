import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './Component/TweetBox';
import Tweet from './Component/Tweet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faHeart, faTrash, faComment, faPlane } from '@fortawesome/free-solid-svg-icons';

library.add(faRetweet, faHeart, faTrash, faComment, faPlane);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "Heyyyyyyyyyyyyy",
          liked: true,
          timeStamp: new Date()
        }
      ]
    }
    this.handleTweet = this.handleTweet.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false,
      timeStamp: new Date()
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    })
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked,
          timeStamp: t.timeStamp
        }
      }
      return t;
    });

    this.setState({
      tweets
    })
  }

  handleRemove(tweet) {
    let tweets = this.state.tweets.filter((e) => {
      return e !== tweet
    });
    this.setState({
      tweets
    });
  }

  handleReTweet(t) {
    let tweetArr = this.state.tweets;
//    tweetArr.splice(this.state.tweets[t], 0, t);
    tweetArr.push({
      text: t.text,
      liked: t.liked,
      timeStamp: new Date()
    })
    this.setState({tweets : tweetArr});
  }

  fakeId = () => Math.random() * this.state.tweets.length;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title text-info">Welcome to my minitweet app</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TweetBox placeholder="How do you feel right now ?" onTweet={this.handleTweet} />  
            </div>
            <div className="col-md-6">
              {this.state.tweets.map( (tweet,index) => <Tweet
              tweet={tweet}
              handleLike={this.handleLike.bind(this)}
              handleRemove={this.handleRemove.bind(this)}
              handleReTweet={this.handleReTweet.bind(this)}
              key={this.fakeId()}/>)}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
