import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/"><img className='logo' src={require("../../../assets/img/logo.png")} alt="" /></Link>
                <ul>
                    <Link to="/"><li>About me</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    );
}
 
export default Header;