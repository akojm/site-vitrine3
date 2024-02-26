import React from 'react';
import '../../style/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const About = () => {
    return (
        <div>
              <section id='about' >
             <Container >
                <h2 className='title-section text-center fs-2 p-4 ' >
                 who are we ?
                </h2>
                <Row>
                 <Col className='col-lg-6  col-12'>
                    <h3 className='text-start fs-4 ' >Shoes Mag</h3>
                   <div className='description '  >
                    <p>Welcome to the presentation of our online shoe store! We are delighted to present our selection of trendy, comfortable and high quality shoes, available just a click away. 
                     Our store is environmentally conscious in order to reduce our carbon footprint. This is why we are privy to short circuits and our production is 100% in France.  
                     The quality of our shoes is one of the essential elements during our manufacturing process.
                     Find shoes that fit your feet, that’s our guess.
                    So don’t hesitate to make your choice!</p>
                       
                </div>
                </Col>
                <Col  className='col-lg-6 col-12  d-flex align-items-center justify-content-center' >
                    <div className='content-image '>
                    <Image className='text-end'  src = "/public/../assets/img/image-about1.png"></Image>

                    </div>
                </Col>
                </Row>        
            </Container>      
            </section>
        </div>
    );
};

export default About;
