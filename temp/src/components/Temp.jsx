import React, { useState } from 'react'
import "./Temp.css"

function Temp() {
    const [temp,setTemp]=useState(0);
    const [color,setColor]=useState("aqua");
    const [btncolor,setBtnColor]=useState("white")
    function tempHandler(){
        setTemp(temp+1);
        if(temp>=18){
           setBtnColor("red") 
        }
        if(temp>=18){
            setColor("red");
        }
    }
function minusTempHandler(){
    setTemp(temp-1);
    if(temp<=19){
        setColor("aqua");
    }
    if(temp<=19){
        setBtnColor("white") 
     }
}




  return (
   <>
   <div className='tempshow'>
      <div className='degvalue' style={{backgroundColor:color}}><h2>Temp :{temp}°</h2> </div>

     <button style={{backgroundColor:btncolor}} onClick={tempHandler}>INC</button>
     <button onClick={minusTempHandler}>DEC</button>
   </div>
   
   </>
  )
}

export default Temp