import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import DropDown from '../DropDown/DropDown';
import './AutoComplete.css';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false,
      wordPrefix: ""
    }
  }

  onChange = (event) => {
    this.setState({showDropDown: true, wordPrefix: event.target.value});
  }

  onSelect = (item) => {
    this.setState({showDropDown: false});
    this.props.onSelect(item);
  }

  filterOnWord(fullString, subString) {
    const words = fullString.split(" ");
    return words.some((word) => (
      word.toLowerCase().startsWith(subString.toLowerCase())));
  }

  getFilteredOptions() {
    const { options } = this.props;
    const { wordPrefix } = this.state;
    let filteredItems = options.filter((item) => this.filterOnWord(item.label, wordPrefix));

    // sort
    return filteredItems.sort((a,b) => a.label.localeCompare(b.label));
  }

  render() {
    const { showDropDown } = this.state;

    return (
      <div className="AutoComplete">
        <TextInput placeholder="Start typing..." onChange={this.onChange} />
        <DropDown options={this.getFilteredOptions()} onSelect={this.onSelect} visible={showDropDown} />
      </div>
    )
  }
}


// Component should take 'options' as input and notify upon selection
AutoComplete.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func
}

export default AutoComplete;