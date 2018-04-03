import React, { Component } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import data from './data/MOCK_DATA_1000.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AutoComplete Component</h1>
        </header>
        <div className="App-container">
        <AutoComplete options={data}/>
        </div>
      </div>
    );
  }
}

export default App;
