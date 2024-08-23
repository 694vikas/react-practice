 import Productdate from "./Productdate";
import Card from "./Card";
import "./Productitem.css";

function Productitem(props) {
  return (
  <><Card className="product-item">
  <Productdate date={props.date}></Productdate>
  <div className="product-item_description"><h2>{props.title}</h2></div>
  </Card>

  </>
  );
}

export default Productitem;