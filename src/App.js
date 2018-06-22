import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "Heyyyyyyyyyyyyy",
          liked: true
        }
      ]
    }
    this.handleTweet = this.handleTweet.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false
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
          liked: !t.liked
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
    })
    this.setState({
      tweets
    })
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
              {this.state.tweets.map(tweet => <Tweet
              tweet={tweet}
              handleLike={this.handleLike.bind(this)}
              handleRemove={this.handleRemove.bind(this)}
              key={this.fakeId()}/>)}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
