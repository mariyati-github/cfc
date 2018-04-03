import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import DropDown from '../DropDown/DropDown';
import './AutoComplete.css';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event) => {
        console.log("change");
    }

    onSelect = (event) => {
        console.log("onselect " + event.target.dataset.item);
    }

    getFilteredOptions() {
        return this.props.options.filter((item)=>item.label.startsWith("S"));
    }

    render () {
        return (
            <div className="AutoComplete">
                <TextInput onChange={this.onChange} />
                <DropDown options={this.getFilteredOptions()} onSelect={this.onSelect}/>
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