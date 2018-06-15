import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }
  
  handleTweet(tweet){
    this.setState({
      tweets : this.state.tweets.concat(tweet)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TweetBox placeholder="How do you feel right now ?" onTweet={this.handleTweet.bind(this)} />
        <div>
          {this.state.tweets.map(tweet => <p> {tweet} </p>)}
        </div>
      </div>

    );
  }
}

export default App;
