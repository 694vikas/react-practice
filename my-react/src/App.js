import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/card";

function App() {
  const response = [
    { itemName: "Nirma", itemDate: "202", itemMonth: "sept", itemYear: "3022" },

    {
      itemName: "Vikas",
      itemDate: "2022",
      itemMonth: "sept2",
      itemYear: "30222",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>jai shree ram --1</Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>
        <div className="App"> hello world</div>;
      </Card>
    </div>
  );
}

export default App;
