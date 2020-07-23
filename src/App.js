import React from "react";
import Card from "./components/Cards";
import Coding from "./components/Coding.png";
import "./App.css";

function App() {
  const name = "Sparsh";

  return (
    <div>
      <header className="header">
        <h2>
          codewith<b className="name-color">sparsh</b>
        </h2>
        <div className="end-header">
          <h2 className="header-content">
            <b>Home</b>
          </h2>
          <h2 className="header-content">
            <b>About</b>
          </h2>
          <h2 className="header-content">
            <b>Blog</b>
          </h2>
        </div>
      </header>
      <hr />
      <div className="Card">
        <Card />
      </div>
      <h2 className="name">I'm {name}</h2>
      <div className="content">
        <img src={Coding} alt="" />
        <h2>
          Aspiring <div className="color-web">Web Developer</div>
        </h2>
      </div>
    </div>
  );
}

export default App;
