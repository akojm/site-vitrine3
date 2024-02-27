import React from 'react';
import  "../style/NavFooter.css";

const NavFooter = () => {
    return (
        <div>
            <div className='footer-navbar'>
            <ul >
                <li><a href='#'>Home</a></li>
                <li><a href='#services'>Our Service</a></li>
                <li><a href='#produits'>Our Product</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            </div>
              
        </div>
    );
};

export default NavFooter;