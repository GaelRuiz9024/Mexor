// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../Landing/Landing.tsx'; // Suponiendo que tienes una página principal
import Cuestionario from '../Cuestionario/Cuestionario';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/cuestionario" element={<Cuestionario />} />
            </Routes>
        </Router>
    );
};

export default App;
