import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../Components/Template/Footer/Footer';
import Header from '../../Components/Template/Header/Header';
import Rotas from '../../Routes/Rotas';

const Template = () => {
    return (
        <>
            <Router>
                <Header />
                <Rotas />
                <Footer />
            </Router>
        </>
    );
}

export default Template;