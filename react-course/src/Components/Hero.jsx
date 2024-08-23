import React from 'react'
import "./Hero.css";
 

function Hero({title,price,desc,img,}) {
  return (
<>
<div className='hero'>
    <div className='card'>
        <h2>{title}</h2>
            <div className='productlogo' >
           <img src={img} alt='product1'  ></img>
             </div>
        <div className='productdesc'>
            <p>{desc}</p>
            <p>{price}</p>
        </div>     
    </div>

</div>




</>
  )
}

export default Hero