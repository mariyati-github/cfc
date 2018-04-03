import React, { Component } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import data from './data/MOCK_DATA_1000.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        value: -1,
        label: ""
      }
    }
  }
  onSelect = (item) => {
    const selected = JSON.parse(item);
    this.setState({ selected });
  }

  render() {
    const selectedItem = (this.state.selected.value > -1) ? (
      <span>Selected: {this.state.selected.label}, {this.state.selected.value}</span>
    ) : (
      <span>Nothing selected</span>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AutoComplete Component</h1>
        </header>
        <div className="App-container">
          <AutoComplete options={data} onSelect={this.onSelect} />
          <div className="App-selected">
            {selectedItem}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
