import Productitem from "./Productitem";
import Card from "./Card";
import "./Product.css"

function Product(props) {
  return (
    <>
      <Card >
        <Productitem 
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <Productitem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <Productitem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <Productitem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </>
  );
}

export default Product;
