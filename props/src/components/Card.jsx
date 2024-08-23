
export default function  Card(props){

    return(<>
    <p>{props.date[0].date}</p>
    <p>{props.date[0].month}</p>
    <p>{props.date[0].Year}</p> 
    </>
    );
}