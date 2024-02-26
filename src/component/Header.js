import React from 'react';
import '../style/Header.css';
import NavBars from './NavBars';
import  Button  from "react-bootstrap/Button";

const Header = () => {
return (
    <div>
        <div className='header-web' >
        <NavBars/>
        <div className='slogan'>
        <h1>Shoes Mag</h1>
        <p>Trouvez les Shoes à vos pied !</p>
        <Button className='btn'><a href='#about'>Visitez</a> </Button>
        </div>
        
        </div>

        
    </div>
);
};

export default Header;