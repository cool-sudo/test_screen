import React, { Component } from 'react';
import './styles/App.css';
import Transfer from './components/Transfer';
import EarningStats from './components/EarningStats';
import Statement from './components/Statement'

class App extends Component {
  render(){
    return (
      
      <div>
        <div className="Header">Earnings</div>
        <div className="App">
        <div className="Header Center">Earnings</div>
        <EarningStats/>
        <Transfer/>
        <Statement/>
        </div>
      </div>
    );
  }
}

export default App;
