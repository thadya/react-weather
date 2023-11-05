import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Thato Gumbo and is open sourced on{" "}
          <a
            href="https://github.com/thadya/reactapp"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}