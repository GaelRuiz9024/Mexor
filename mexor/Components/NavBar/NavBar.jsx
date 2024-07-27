import React from 'react';
import './NavBar.css'; // Archivo CSS para los estilos
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <img src="../Images/Mexor-Logo.png" alt="Logo" className="logo"/>
                <span className="project-name">Mexor</span>
                <span className="additional-name">MexIA</span>
            </div>
            <div className="buttons">
                <Button color="orange" text="Inicia sesión" />
                <Button color="blue" text="Regístrate" />
            </div>
        </div>
    );
}

export default Navbar;
