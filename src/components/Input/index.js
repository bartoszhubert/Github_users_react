import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ name, onChange, placeholder, value }) => {
    return (
        <input
            className='input'
            name={name}
            type='text'
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
}

Input.defaultProps = {
    placeholder: 'Placeholder'
}

export default Input;