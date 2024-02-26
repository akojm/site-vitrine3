import React from 'react';
import '../../style/Produits.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'


const Produits = () => {
    return (
        <div>
            <section id='produits'>
            <h2 className='title-section text-center fs-2 p-4 ' > 
            Our product
            </h2>
            <Container>
            <h3 className='text-center fs-4 ' >Shoes Mag Classic</h3>
            <Row>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/shoes-man.png" />
                   <Card.Body>
                    <Card.Title>Men's Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <h4 className='fs-5' ><Badge bg="primary">New Collection</Badge></h4>
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/shoes-women.png" />
                   <Card.Body>
                    <Card.Title>Women's Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <h4 className='fs-5' ><Badge bg="primary">New Collection</Badge></h4>
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/walking.png" />
                   <Card.Body>
                    <Card.Title>Boy's Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                   </Card.Text>
                </Card.Body>
              </Card>
             </Col>            
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/shoes-children.png" />
                   <Card.Body>
                    <Card.Title>Girl's Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <h4 className='fs-5' ><Badge bg="primary">New Collection</Badge></h4>
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>            
            </Row>
            <h3 className='text-center fs-4 ' >Shoes Mag Basket</h3>
            <Row>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/men-basket.png" />
                   <Card.Body>
                    <Card.Title>Men's Basket shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/women-basket.png" />
                   <Card.Body>
                    <Card.Title>Women's Basket Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/boy-basket.png" />
                   <Card.Body>
                    <Card.Title>Boy's Basket Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <h4 className='fs-5' ><Badge bg="primary">New Collection</Badge></h4>
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>            
             <Col className='col-lg-3 col-6'>
                <Card >
                  <Card.Img variant="top" src="/public/../assets/img/girl-basket.png" />
                   <Card.Body>
                    <Card.Title>Girl's Basket Shoes</Card.Title>
                    <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <h4 className='fs-5' ><Badge bg="primary">New Collection</Badge></h4>
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>            
            </Row>
            </Container>        
            </section>           
        </div>
    );
};

export default Produits;