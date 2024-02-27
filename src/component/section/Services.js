import React from 'react';
import '../../style/Services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Services = () => {
    return (
        <div>
              <section id='services' >
             <Container>
                <h2 className='title-section text-center fs-2 p-4  ' >
                Our Service 
                </h2>
                <Row>
                 <Col className='col-lg-6 col-12'>
                    <h3 className='text-start ' >Shoes Mag Services</h3>
                 <div className='description-services' >
                   <h4 className='text-start fs-6'  >
                   Large range of products :
                   </h4>
                   <p>Our store offers a wide selection of shoes for men, women and children. Whether you're looking for casual sneakers, dress shoes, stylish boots, summer sandals, or performance athletic shoes, we've got you covered.</p>           
                   <h4 className='text-start fs-6'  >
                   Well-known brands :
                   </h4>
                   <p>We collaborate with renowned brands, renowned for their quality and style. From Nike and Adidas to Clarks and Timberland, you'll find a variety of customer favorite brands, as well as emerging brands that offer innovative designs.</p>
                   <h4 className='text-start fs-6' >Convenient filter options :</h4>
                    <p>Our website offers intuitive filtering options to help you quickly find shoes that match your preferences in size, color, style and price. Whether you're looking for something specific or just like to browse options, our user-friendly interface will make it easy.</p>
                </div>
                </Col>
                <Col className='col-lg-6 col-12'>

                 <div className='description-services ' >
                   <h4 className='text-start fs-6'  >
                   Detailed descriptions and high-resolution photos :
                   </h4>
                   <p>Each product comes with detailed descriptions and high-resolution photos, allowing you to examine the shoes from every angle and learn important features such as material, size, and color options.</p>           
                   <h4 className='text-start fs-6'  >
                   Fast delivery and flexible returns policy : </h4>
                   <p>We understand the importance of receiving your new shoes quickly. That's why we offer fast and reliable shipping options. Plus, if you're not completely satisfied with your purchase, our flexible returns policy allows you to return or exchange your items within a timely manner.</p>
                  <h4 className='text-start fs-6'>
                  Outstanding Customer Service :
                  </h4>
                  <p>Our dedicated customer service team is here to answer all your questions and help you find the perfect shoes. Whether by phone, email or through our live chat service, we are here to provide you with an exceptional shopping experience.</p>
                </div>
                 </Col>
                </Row>                            
            </Container>      
            </section>
        </div>
    );
};

export default Services;
