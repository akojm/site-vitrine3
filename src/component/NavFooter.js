import React from 'react';
import  "../style/NavFooter.css";

const NavFooter = () => {
    return (
        <div>
            <div className='footer-navbar'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#produits'>Produits</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            </div>
              
        </div>
    );
};

export default NavFooter;