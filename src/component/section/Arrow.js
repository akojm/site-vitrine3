import React from 'react';
import '../../style/Arrow.css'
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from 'react';




const Arrow = () => {
   
    const [activeScrollButton, setActiveScollButton]= useState(false);
   
    // Function scrollUp //
    const scrollUp = ()=>{
     const scrollValue = document.documentElement.scrollTop; 
      if (scrollValue > 300) {
         setActiveScollButton(true);  
      }else{
        setActiveScollButton(false)      
      }
    }
    
    const btnScrollUp = ()=>{
        window.scrollTo({
            top: 200,
            behavior : 'smooth',
          })
    }
    

    // Event click //
    window.addEventListener('scroll', scrollUp, btnScrollUp )

    return (
        <div>
            <span onClick={btnScrollUp}  id='btnArrow' className={activeScrollButton? " active " : " "} ><IoMdArrowDropup /></span>
        </div>
    );

};

export default Arrow;