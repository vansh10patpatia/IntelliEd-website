import React from 'react';
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";


function HeadNavbar(props) {

    const {feature,work,contact , executeScroll} = props;

    return (
        <>
        <Navbar  expand="lg" className="navbar" fixed="top"  >
            <Container>
                <Navbar.Brand  >
                    <div className="navbar-heading">IntelliED</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="tiles-container">
                        <Nav.Link className="navbar-tiles" onClick={()=>executeScroll()}>Features</Nav.Link>
                        <Nav.Link className="navbar-tiles how-it-works" onClick={()=>executeScroll()}>How it Works</Nav.Link>
                        <Nav.Link className="navbar-tiles demo-button" >
                            <div >
                                <button className='navbar-demo' onClick={()=>executeScroll()}>
                                    <span className='demo-text'> Free Demo</span>
                                </button>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default HeadNavbar;