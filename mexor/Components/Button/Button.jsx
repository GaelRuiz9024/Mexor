import React from 'react';
import './Button.css'; // Archivo CSS para los estilos

const Button = ({ color, text }) => {
    return (
        <button className="custom-button" style={{ backgroundColor: color }}>
            {text}
        </button>
    );
};

export default Button;
