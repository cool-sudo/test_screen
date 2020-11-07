import React, { Component } from 'react';
import './App.css';
import Transfer from './Transfer';
import EarningStats from './EarningStats';
import Statement from './Statement'

class App extends Component {
  render(){
    return (
      <div>
        <EarningStats/>
        <Transfer/>
        <Statement/>
      </div>
    );
  }
}

export default App;
