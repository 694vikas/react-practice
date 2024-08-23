import { useState } from "react";
import "./index.css";
import Tours from "./components/Tours";
import data from "./data";
import Refresh from "./components/Refresh";

function App() {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tour.filter((tour) => tour.id !== id);

    setTour(newTour);
  }

  if (tour.length === 0) {
    return <Refresh setTour={setTour} data={data} />;
  }

  return (
    <div className="cardscontainer">
      <Tours tours={tour} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
