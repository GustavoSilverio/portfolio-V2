import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../Components/Template/Header';
import Rotas from '../../Routes/Rotas';

const Template = () => {
    return (
        <Router>
            <Header/>
            <Rotas />
        </Router>
    );
}
 
export default Template;