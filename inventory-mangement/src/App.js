import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginPage from './Components/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
