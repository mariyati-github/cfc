import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

function DropDown({options, visible, onSelect, ...props}) { 
    return (
        <div className="DropDown">
            <ul>
                {options.map((item, index) => (
                    <li data-item={JSON.stringify(item)} key={index} onClick={onSelect}>{item.label}</li>
                ))}
            </ul>
        </div>
    );
}

DropDown.propTypes = {
    options: PropTypes.array,
    visible: PropTypes.bool,
    onSelect: PropTypes.func
}

export default DropDown;