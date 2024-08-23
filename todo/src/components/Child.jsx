import React, {   useState } from 'react';

function Child({ str }) {
    const[showMore,setshowMore]=useState(false);
    const displayText=showMore?str:str.substring(0,20)+"...";

    function toggletext(){
        setshowMore(!showMore)
    }

    return (
        <div className='desc'>
          {displayText}
          <span onClick={toggletext} style={{color:"red",cursor:"pointer"}}>   {showMore?"Show less":"Show More"}
            </span>

        </div>
    );
}

export default Child;
