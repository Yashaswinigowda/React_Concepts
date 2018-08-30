import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Refs_Dom from './React_Concepts/Refs_Dom';
import HocComponents from './React_Concepts/Hoc_Components';

import TextFeild from './React_Concepts/Compon/TextFeild';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Refs_Dom />
      </div>
    );
  }
}

export default App;
