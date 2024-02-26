import React from 'react';
import  '../style/Main.css';
import About from './section/About';
import Services from './section/Services';
import Produits from './section/Produits';
import Contact from './section/Contact';



const Main = () => {
    return (
        <div className='main' >
          <About />
          <Services/>
          <Produits/>
          <Contact/>
        </div>
    );
};

export default Main;
