import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Rotas = () => {
    
    return (
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    );
}
 
export default Rotas;