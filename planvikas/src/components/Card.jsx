import React, { useState } from 'react'
 

function Card(props) {
    const [readmore, setReadmore] = useState(false)
    let description = readmore ? props.tour.info : `${props.tour.info.substring(0, 200)}....`;
   
  return (
    <div className='card'>
    <div className='img-container'>
        <img  className='cityImage' src={props.tour.image} alt="" />
    </div>
    <div className='desc'>   
       <p> ₹ {props.tour.price}</p>
       <p className='tourCityName'>{props.tour.name}</p>
    </div>


    <div className="description">
                    {description}
     <span className='readMore' onClick={() => { setReadmore(!readmore) }}>
                        {readmore ? " Show Less" : " Read More"}
     </span>
     </div>
     
     <button className='notIntrestedBtn' onClick={() => props.getRemoveId(props.tour.id)}>Not Intrested</button>
    </div>
  )
}

export default Card