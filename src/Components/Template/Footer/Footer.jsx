import React from 'react';
import './footer.scss';
import Icon from '@mdi/react';
import { mdiWhatsapp, mdiLinkedin, mdiGithub, mdiInstagram } from '@mdi/js';

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright © <span>Gustavo Oliveira</span> All Right Reserved</p>
            <div className="midias">
                <Icon path={mdiWhatsapp} size={1} color="#FF005C"/>
                <Icon path={mdiLinkedin} size={1} color="#FF005C"/>
                <Icon path={mdiGithub} size={1} color="#FF005C"/>
                <Icon path={mdiInstagram} size={1} color="#FF005C"/>
            </div>
        </div>
    );
}

export default Footer;