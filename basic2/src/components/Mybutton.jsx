import "./Mybutton.css";
export function Mybutton(prop){
    return(

    <div>   <h1>name from data {prop.user.name} </h1>
    <h1>age from data {prop.user.age} </h1>
    <h1>job from data {prop.user.job} </h1>
    <h1>hobby from data {prop.user.hobby} </h1>
   
        <button>My Button</button>
    </div>
   

    )


    




}