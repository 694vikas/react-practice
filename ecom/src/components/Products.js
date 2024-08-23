import React, { useState } from "react";
import Data from "./Data.js";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(Data);
  function sortHandler() {
    setProducts(
      products.filter((item) => {
        return item.price < 60;
      })
    );
  }

  return (
    <>
      <div>
        <p
          onClick={sortHandler}
          style={{
            border: "2px solid green",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          Sort The Products
        </p>
        <p>Reset</p>
      </div>

      <div className="cart">
        {products.map((item, id) => {
          return (
            <div className="card" key={item.id}>
              <div className="image">
                <img
                  src={item.image}
                  alt="logo"
                  style={{ width: "300px" }}
                ></img>
              </div>
              <div
                className="producttitle"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p>{item.title}</p>
                <p>Rs.{item.price}</p>
              </div>
              <div
                className="btn"
                style={{
                  alignItems: "center",
                  margin: "10px",

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button>BUY NOW</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
