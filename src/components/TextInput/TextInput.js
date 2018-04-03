import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

function TextInput({value, placeholder, onChange, ...props}) { 
    return (
        <div className="TextInput">
            <input 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

TextInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default TextInput;