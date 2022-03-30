import React from 'react';
// import mobile from "../images/mobiles.png";
import mobile from "../images/Mockup.png";
import "./Header.css"
import { Row, Container, Col } from "react-bootstrap";

function Header() {
    return (
        <>
            <Container className="header-container">
                <Row>
                    <Col md={6}>
                        <div className='header-detail'>

                            <span className='header-colorline'>Data Driven approach </span><br />
                            to equitably <br />
                            accelerate growth <br />
                            for every learner.

                            <div className='book'>
                                <button className='header-book'><span className='book-text'>Book Now</span></button>
                            </ div>

                        </div>  
                    </Col>
                    <Col md={{ span: 5}}>
                        <div className='header-image' >
                            <img src={mobile} alt="" className='mobile-image' />
                        </div>
                    </Col>
                 
                </Row>
            </Container>
        </>
    );
}

export default Header;