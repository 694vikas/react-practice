import React from "react";

function Header() {
  return (
    <>
      {" "}
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "yellow",
          fontWeight: "bold",
          height: "7vh",
          alignItems: "center",
        }}
      >
        <div>HOME </div>
        <div>CART</div>
      </div>
    </>
  );
}

export default Header;
