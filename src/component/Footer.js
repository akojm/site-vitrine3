import React from 'react';
import  '../style/Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavFooter from './NavFooter';
import { FaArrowTurnDown } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram,faXTwitter, faYoutube  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div>
            <section id='footer' >
                <Container>
                    <Row className='pt-5' >
                    <Col className='col-lg-4 col-12  '    >
                       <div className='content-image-footer mt-1'>
                        <p className='text-center' >Shoes Mag</p>
                        </div>
                     </Col>
                    <Col className='col-lg-4 col-12 '    >
                            <NavFooter/>
                    </Col>
                    <Col className='col-lg-4 col-12  d-flex flex-column justify-content-center align-items-center mt-3 ' >
                            <h5 className='text-white text-center'>follow us<FaArrowTurnDown /></h5>
                          <div className='social d-flex justify-content-between '>
                            <a href='https://www.facebook.com/' target='_blank' >
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href='https://www.instagram.com/' target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href='https://twitter.com/i/flow/login'target='_blank'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a href='https://www.youtube.com/' target='_blank'>
                            <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                     </Col>
                    </Row>        
                    <Row>
                        <Col xs={12}>
                            <div className='copyright'>
                                <p>Copyright &copy; - Tous droits réservés à MJDEV</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
            </section>
        </div>
    );
};

export default Footer;