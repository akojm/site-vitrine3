import React from 'react';
import '../../style/Arrow.css'
import { IoMdArrowDropup } from "react-icons/io";

const Arrow = () => {
    return (
        <div>
            <span id='btnArrow' className='arrow' ><IoMdArrowDropup /></span>
        </div>
    );

};

export default Arrow;