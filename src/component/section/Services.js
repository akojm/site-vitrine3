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
                   Large gamme de produits :
                   </h4>
                   <p>Notre magasin propose une vaste sélection de chaussures pour hommes, femmes et enfants. Que vous recherchiez des baskets décontractées, des chaussures habillées, des bottes élégantes, des sandales estivales ou des chaussures de sport performantes, nous avons ce qu'il vous faut.</p>           
                   <h4 className='text-start fs-6'  >
                   Marques renommées :
                   </h4>
                   <p>Nous collaborons avec des marques de renom, réputées pour leur qualité et leur style. De Nike et Adidas à Clarks et Timberland, vous trouverez une variété de marques préférées des clients, ainsi que des marques émergentes qui offrent des designs innovants.</p>
                   <h4 className='text-start fs-6' > Options de filtrage pratiques :</h4>
                    <p>Notre site web propose des options de filtrage intuitives pour vous aider à trouver rapidement les chaussures qui correspondent à vos préférences en termes de taille, de couleur, de style et de prix. Que vous recherchiez quelque chose de spécifique ou que vous aimiez simplement parcourir les options, notre interface conviviale vous facilitera la tâche.</p>
                </div>
                </Col>
                <Col className='col-lg-6 col-12'>

                 <div className='description-services ' >
                   <h4 className='text-start fs-6'  >
                   Descriptions détaillées et photos haute résolution :
                   </h4>
                   <p>Chaque produit est accompagné de descriptions détaillées et de photos haute résolution, vous permettant d'examiner les chaussures sous tous les angles et de connaître les caractéristiques importantes telles que le matériau, la taille, et les options de couleur.</p>           
                   <h4 className='text-start fs-6'  >
                   Livraison rapide et politique de retour flexible :
                   </h4>
                   <p>Nous comprenons l'importance de recevoir vos nouvelles chaussures rapidement. C'est pourquoi nous proposons des options d'expédition rapides et fiables. De plus, si vous n'êtes pas entièrement satisfait de votre achat, notre politique de retour flexible vous permet de retourner ou d'échanger vos articles dans un délai convenable.</p>
                  <h4 className='text-start fs-6'>
                  Service clientèle exceptionnel :
                  </h4>
                  <p>Notre équipe dévouée de service clientèle est là pour répondre à toutes vos questions et vous aider à trouver les chaussures parfaites. Que ce soit par téléphone, par e-mail ou via notre service de chat en direct, nous sommes là pour vous offrir une expérience d'achat exceptionnelle.</p>
                </div>
                 </Col>
                </Row>                            
            </Container>      
            </section>
        </div>
    );
};

export default Services;
