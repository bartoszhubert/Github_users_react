import React from 'react';

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

export default Input;