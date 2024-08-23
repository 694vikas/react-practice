// import logo from './logo.svg';
import React from "react";
import Product from "./components/Product";
import "./App.css";

function App() {
  const products = [
    { id: "p1", title: "Nirma", amount: "100", date: new Date(2021, 8, 10) },
    { id: "p2", title: "Vikas", amount: "100", date: new Date(2004, 6, 9) },
    { id: "p3", title: "Vicky", amount: "100", date: new Date(2021, 9, 10) },
    { id: "p4", title: "Dhiraj", amount: "100", date: new Date(2021, 1, 11) },
  ];
  return (
    <>
      <Product items={products}></Product>
    </>
  );
}

export default App;
