import React, { useState } from 'react'

function Cards(props) {
  const [readmore,setreadmore]=useState(false)
  const description=props.data[0].info;
  const truncatedText = `${description.slice(0, 100)}...`;

  const toggleText = () => {
    setreadmore(!readmore);
  };
  
  return (
    <div className='card'>
      <div>
        <img src={props.data[0].image} alt="" />
      </div>
      <div className='info'>
        <h2>{props.data[0].price}</h2>
        <h3>{props.data[0].name}</h3>

      </div>
      <div>
      {readmore ? description : truncatedText}
      {description.length > 100 && (
        <span
           
          onClick={toggleText}
        >
          {readmore ? ' Show less' : ' Show more'}
        </span>
      )}
      </div>
      <button>Not Interested</button>


    </div>
  )
}

export default Cards