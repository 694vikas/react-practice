import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/All";
import Javascript from "./components/Javascript";
import Study from "./components/Study";
import Music from "./components/Music";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/Javascript" element={<Javascript></Javascript>}></Route>
          <Route path="/Study" element={<Study></Study>}></Route>
          <Route path="/Music" element={<Music></Music>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
