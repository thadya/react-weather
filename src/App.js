import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <p>
          This app was created by{" "}
          <a href="">Thato Gumbo</a> and it is
          open sourced on
          <a href="">
            {" "}
            Github
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;