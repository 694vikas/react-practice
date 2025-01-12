import React from 'react'
import Card from './Card.jsx';

const Tours = (props) => {
    function getId(id)
    {
        props.removeTour(id);
    }

    
    return (
        <div className='container'>
            <div className='title-box'>
                <h1 className="title">Plan With Love</h1>
            </div>

            <div className="cardsContainer">
                { props.tours.map((tour)=>{
                return <Card tour={tour} getRemoveId = {getId}/>
                })
            
                }
               
            </div>
        </div>
    )
}

export default Tours