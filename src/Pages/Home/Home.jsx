import React from 'react';
import './home.scss'
import { Container, Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            <Container fluid>
                <Row>
                    <Col sm md lg xl = {12}>
                        <Row className='sobre'>
                            <Col sm md = {12} lg xl = {6}>
                            <img
                                className='fotoDePerfil' src={require("../../assets/img/profPic.jpg")} alt="Minha foto de perfil" />
                            </Col>
                            <Col sm md = {12} lg xl = {6}>
                            <div className="sobre-txt">
                                <h2>Gustavo <span>Silvério</span></h2>
                                <h3><span>Desenvolvedor</span> e designer</h3>
                                <p>Sou um desenvolvedor iniciante com o objetivo de me tornar um <span>Full-stack dev</span>, tenho um amplo conhecimento em <span>HTML</span> E <span>CSS</span>, e estou estudando <span>Javascript</span>, posso te oferecer sites bem interativos e animados, como tambem posso fazer sites “Mordernos”, Minimalistas mas muito bonitos !. No momento estudo na <span>Etec MCM</span> cursando Programação,e tambêm tenho um <span>inglês</span> intermediario podendo conversar tranquilamente.</p>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='download' sm md lg xl = {12}>
                                <button className='download-bt'>Download C.V.</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;