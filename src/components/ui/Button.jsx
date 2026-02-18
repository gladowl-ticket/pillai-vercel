import React from 'react';
import './Button.css';

const Button = ({ data, onClick, className = '', ...rest }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-3 py-2 btn_red rounded-md text-black ${className}`}
            {...rest}
        >
            {data}
        </button>
    );
};

export default Button;