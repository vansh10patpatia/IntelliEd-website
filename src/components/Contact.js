import React from 'react';
import "./Contact.css";
import bg from "../images/contact_1.png";
import mainBg from "../images/main-bg.png";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTwitter,BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Form, Button, Container, FormControl, Row, InputGroup,Col } from "react-bootstrap";


import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
// import twitter from "../images/contact_icons/twitter.png";
// import insta from "../images/contact_icons/inst.png";
// import linkedin from "../images/contact_icons/linkedIn.png";

function Contact(props){

    return(
        <>
        <Container className='contact'>
            <Row className='contact-us-main-box'>
                <Col className='contact-box-1' id="laptop-contact">
                    <div className='contact-trans'>
                        <div className='transparent-div'>
                            <div className='contact-right-side'>
                                <span className='bold-border-2'></span>
                                    <h1 className='contact-us-heading'>Contact Us</h1>
                                <span className='bold-border-2'></span>
                            </div>

                            <div className='gmail-phone-div'>
                                <div className='contact-gmail'><span className='gmail-image'><img src={gmail} className='' /></span>info.intellied@gmail.com</div>
                                <div className='contact-phone'><span className='gmail-image'><img src={phone} className='' /></span>+91123456789</div>
                            </div>
                            <div className='line'></div>
                            <div className="icon-holder">
                                <div className="contact-icons">
                                    <div className='laptop-icon'> <BsTwitter className="color-gradient"  /></div>
                                    <div className='laptop-icon'> <BsInstagram className="color-gradient" /> </div>
                                    <div className='laptop-icon'> <FaLinkedin  className="color-gradient"/></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='contact-box-2'>
                    <div className='Details'>


                       <div className='contact-right-side'>
                           <span className='bold-border'></span>
                           <h1 className='contact-heading'>Get in Touch</h1>
                           <span className='bold-border'></span>

                       </div>

                       <div className='contact-details contact-form'>

                           <InputGroup className="mb-3 inputs">
                               <FormControl aria-label="Text input with checkbox" placeholder="Name" />
                           </InputGroup>

                       </div>

                       <div className='contact-details contact-form'>
                           <InputGroup className="mb-3 inputs">
                               <FormControl aria-label="Text input with checkbox" placeholder="Email Id" />
                           </InputGroup>
                       </div>
                       <div className='contact-details contact-form'>
                           <Form.Control as="textarea" className="inputs" rows={3} placeholder="How can we help you?" />
                       </div>

                       <div className='contact-details'>
                            <Button className='contact-button' size="lg">
                                SEND
                            </Button>
                       </div>

                   </div>
                </Col>
            </Row>
        </Container>
        <Container className="footer-container">
            <Row style={{backgroundColor:'#0C1D40'}} >
                <div className="navbar-extra">
                    <div className="navbar-heading">IntelliED</div>
                    <div className='gmail-phone-div'>
                        <div className='contact-gmail'><span className='gmail-image'><img src={gmail} style={{height:20}}/></span> info.intellied@gmail.com</div>
                        <div className='contact-phone'><span className='gmail-image'><img src={phone} style={{height:20}}/></span>  +91123456789</div>
                    </div>
                    <div className="contact-icons">
                        <div > <BsTwitter className="color-gradient"  /></div>
                        <div > <BsInstagram className="color-gradient" /> </div>
                        <div > <FaLinkedin  className="color-gradient"/></div>
                    </div>
                </div>
            </Row>
            <Row className="footer-class">
                <Col md={{ span: 7, offset: 5}}>
                    <p className="footer-context">
                        Copyright &copy; 2022  
                        <span style={{color:'#00C968'}}> Intelli</span>
                        <span style={{color:'#365FCD'}}>ED </span> 
                        All rights reserved.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact;