import "./App.css";
import Cards from "./components/Cards";
import data from "./data";

function App() {
  return <Cards data={data} desc={data[0].info} />;
}

export default App;
