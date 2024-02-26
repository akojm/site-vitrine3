import React from 'react';
import '../style/Navbars.css';



const NavBars = () => {
    return (
        <div>
        
        <nav class="navbar navbar-expand-lg bg-light navbar-white">
            <a class="navbar-brand" href="#">Shoes Mag</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Our Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#produits">Our Product</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>   
            </ul>
            </div>  
        </nav>
      </div>
    );
};

export default NavBars;