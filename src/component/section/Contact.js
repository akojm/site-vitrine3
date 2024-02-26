import React from 'react'
import '../../style/Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
    return (
        <div>
            <section id='contact'>
            <h2 className='title-section text-center fs-2 p-4 ' > 
            Contact
            </h2>
            <Container> 
                <Row>
                    <Col className='col-lg-6 col-12 '>
                    <div className='information-contact mb-4 '>
                        <span className='text-start titre-contact pb-2 fs-3'>Shoes Mag</span>
                        <span className='adresse-contact fs-5'><FaLocationDot />Address : </span>
                        <span className='adresse-contact-info ms-4 '>62 Av. du Général Michel Bizot, 75012 Paris</span>
                        <span className='phone-bureau-contact pt-1 fs-5'><FontAwesomeIcon icon={faPhone}/>Phone's Office</span>
                        <span className='phone-bureau-contact-info ms-4'>01.54.54.30.00</span>
                        <span className='phone-sav-contact pt-1 fs-5'><FontAwesomeIcon icon={faPhone}/>S.A.V phone :</span>
                        <span className='phone-sav-contact-info ms-4'>01.30.30.30.31</span>
                        <span className='email-contact pt-1 fs-5'><IoMdMail />E-mail :</span>
                        <span className='email-contact-info ms-4'>shoes.mag@shoes.com</span>
                    </div>
                        
                    </Col>
                    <Col className='col-lg-6 col-12'>
                     <div className='localisation mb-4'>
                     <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1979335874043!2d2.3995403763244894!3d48.83536310232694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672678874b28f%3A0x984a484df513a0e!2sCordonnerie!5e0!3m2!1sfr!2sfr!4v1708765941267!5m2!1sfr!2sfr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                    </Col>
                </Row>
            </Container>
            </section>          
        </div>
    );
};

export default Contact;