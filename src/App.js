import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Users from './components/Users';
import {Provider} from 'react-redux';
// import ReduxDemo from './ReduxDemo';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <ReduxDemo></ReduxDemo> */}
        </header>
        <PostForm></PostForm>
        <hr></hr>
        <div className="sidePost">
            <Posts></Posts>
        </div>
        <div className="Users">
        <Users></Users>

        </div>

      </div>
      </Provider>
      
    );
  }
}

export default App;
