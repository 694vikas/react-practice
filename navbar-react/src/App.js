// import Profile from "./components/Profile";

import React, { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("use effect");
  }, [setCount]);
  return (
    <div className="parentDiv">
      <h1>useEffect In react {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
