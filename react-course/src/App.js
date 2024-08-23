import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import product from "./Assets//shoes1.avif";
const data = [
  { title: "title-1", img: product, desc: "desc-1", price: "99" },
  { title: "title-2", img: product, desc: "desc-2", price: "99" },
  { title: "title-3", img: product, desc: "desc-3", price: "99" },
  { title: "title-4", img: product, desc: "desc-4", price: "99" },
];

function App() {
  const [number, setNumber] = useState(0);

  function numberHandler() {
    setNumber(number + 1);
  }
  function minusNumberHandler() {
    setNumber(number - 1);
  }
  const [name, setName] = useState("vikas");
  function nameHandler() {
    setName((prevName) => (prevName === "vikas" ? "vikas kumar" : "vikas"));
  }

  return (
    <>
      {/* <Header></Header>
      <div
        className="herowala"
        style={{ display: "flex", padding: "10px ", flexWrap: "wrap" }}
      >
        {data.map((item) => {
          return (
            <Hero
              title={item.title}
              img={item.img}
              price={item.price}
              desc={item.desc}
            ></Hero>
          );
        })}
      </div>
      <Footer></Footer> */}
      <p>number: {number}</p>
      <button onClick={numberHandler}>increase</button>
      <button onClick={minusNumberHandler}>decrease</button>
      <h2>your name :{name}</h2>
      <button onClick={nameHandler}>change name</button>
    </>
  );
}

export default App;
