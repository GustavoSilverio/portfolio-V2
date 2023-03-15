import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';

const Rotas = () => {
    
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Projects />} path="projects" />
        </Routes>
    );
}
 
export default Rotas;